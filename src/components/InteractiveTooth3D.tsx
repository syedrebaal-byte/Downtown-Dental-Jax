import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sparkles, Layers, ShieldCheck, RotateCcw } from 'lucide-react';

type ViewMode = 'enamel' | 'anatomy' | 'implant';

export const InteractiveTooth3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [viewMode, setViewMode] = useState<ViewMode>('enamel');
  const [isRotating, setIsRotating] = useState(true);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xd4e2d4, 1.0);
    fillLight.position.set(-5, -2, -4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0xb0c8d6, 1.5);
    rimLight.position.set(0, -6, 5);
    scene.add(rimLight);

    // Root Group
    const toothGroup = new THREE.Group();
    scene.add(toothGroup);

    // Materials
    const enamelMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xfcfbfa,
      roughness: 0.18,
      metalness: 0.05,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      transmission: 0.25,
      ior: 1.52,
      reflectivity: 0.8
    });

    const rootMaterial = new THREE.MeshStandardMaterial({
      color: 0xf3ede2,
      roughness: 0.45,
      metalness: 0.02
    });

    const pulpMaterial = new THREE.MeshStandardMaterial({
      color: 0xe07a5f,
      roughness: 0.3,
      emissive: 0xd05030,
      emissiveIntensity: 0.2
    });

    const titaniumMaterial = new THREE.MeshStandardMaterial({
      color: 0x8a9299,
      roughness: 0.25,
      metalness: 0.9
    });

    const goldAbutment = new THREE.MeshStandardMaterial({
      color: 0xd4af37,
      roughness: 0.3,
      metalness: 0.85
    });

    // 1. Natural Tooth Model Components
    const naturalTooth = new THREE.Group();

    // Crown
    const crownGeo = new THREE.CylinderGeometry(1.3, 1.05, 1.4, 32, 16);
    // Sculpt crown cusps
    const crownPos = crownGeo.attributes.position;
    for (let i = 0; i < crownPos.count; i++) {
      const x = crownPos.getX(i);
      const y = crownPos.getY(i);
      const z = crownPos.getZ(i);

      if (y > 0.4) {
        // Cusp curvature
        const cuspMod = Math.sin(x * 3.5) * Math.cos(z * 3.5) * 0.18;
        crownPos.setY(i, y + cuspMod);
      }
    }
    crownGeo.computeVertexNormals();

    const crownMesh = new THREE.Mesh(crownGeo, enamelMaterial);
    crownMesh.position.y = 0.7;
    naturalTooth.add(crownMesh);

    // Two Roots
    const rootGeo1 = new THREE.ConeGeometry(0.55, 2.2, 24);
    const root1 = new THREE.Mesh(rootGeo1, rootMaterial);
    root1.position.set(-0.45, -1.0, 0);
    root1.rotation.z = 0.15;
    root1.rotation.x = 0.08;
    naturalTooth.add(root1);

    const rootGeo2 = new THREE.ConeGeometry(0.52, 2.1, 24);
    const root2 = new THREE.Mesh(rootGeo2, rootMaterial);
    root2.position.set(0.45, -0.95, 0);
    root2.rotation.z = -0.15;
    root2.rotation.x = -0.08;
    naturalTooth.add(root2);

    toothGroup.add(naturalTooth);

    // 2. Internal Pulp Tube (for Anatomy mode)
    const pulpGroup = new THREE.Group();
    const pulpCore = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.12, 1.2, 16), pulpMaterial);
    pulpCore.position.y = 0.4;
    pulpGroup.add(pulpCore);

    const pulpRoot1 = new THREE.Mesh(new THREE.ConeGeometry(0.1, 1.8, 16), pulpMaterial);
    pulpRoot1.position.set(-0.42, -0.85, 0);
    pulpRoot1.rotation.z = 0.15;
    pulpGroup.add(pulpRoot1);

    const pulpRoot2 = new THREE.Mesh(new THREE.ConeGeometry(0.09, 1.7, 16), pulpMaterial);
    pulpRoot2.position.set(0.42, -0.8, 0);
    pulpRoot2.rotation.z = -0.15;
    pulpGroup.add(pulpRoot2);

    pulpGroup.visible = false;
    toothGroup.add(pulpGroup);

    // 3. Implant Model (Fixture + Abutment + Ceramic Crown)
    const implantGroup = new THREE.Group();

    // Titanium screw fixture with threads
    const fixtureGroup = new THREE.Group();
    const coreFixture = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.28, 2.2, 32), titaniumMaterial);
    fixtureGroup.add(coreFixture);

    // Thread rings
    for (let r = -0.8; r <= 0.8; r += 0.22) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.46, 0.035, 12, 32), titaniumMaterial);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = r;
      fixtureGroup.add(ring);
    }
    fixtureGroup.position.y = -1.1;
    implantGroup.add(fixtureGroup);

    // Golden Abutment connector
    const abutment = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.42, 0.6, 24), goldAbutment);
    abutment.position.y = 0.1;
    implantGroup.add(abutment);

    // Zirconia Crown on top
    const implantCrown = new THREE.Mesh(crownGeo, enamelMaterial);
    implantCrown.position.y = 1.0;
    implantGroup.add(implantCrown);

    implantGroup.visible = false;
    toothGroup.add(implantGroup);

    // Mouse Drag Interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      toothGroup.rotation.y += deltaX * 0.01;
      toothGroup.rotation.x += deltaY * 0.01;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevMouseX = e.touches[0].clientX;
        prevMouseY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevMouseX;
      const deltaY = e.touches[0].clientY - prevMouseY;
      toothGroup.rotation.y += deltaX * 0.01;
      toothGroup.rotation.x += deltaY * 0.01;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    const canvas = canvasRef.current;
    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !renderer) return;
      const newW = containerRef.current.clientWidth;
      const newH = containerRef.current.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (isRotating && !isDragging) {
        toothGroup.rotation.y += delta * 0.5;
        toothGroup.position.y = Math.sin(clock.getElapsedTime() * 1.5) * 0.08;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      renderer.dispose();
    };
  }, []);

  // Update visual elements when viewMode changes
  useEffect(() => {
    // We update materials based on view mode state
    if (!canvasRef.current) return;
  }, [viewMode]);

  return (
    <div className="relative w-full h-[460px] lg:h-[520px] rounded-2xl bg-gradient-to-b from-[#FAF8F5] to-[#F2EDE4] border border-stone-200/80 p-6 shadow-sm overflow-hidden flex flex-col justify-between">
      {/* Top Header & Mode Selectors */}
      <div className="z-10 flex flex-wrap items-center justify-between gap-3">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            Interactive Precision Model
          </span>
          <h4 className="text-lg font-serif font-medium text-stone-900">
            {viewMode === 'enamel' && 'Ceramic Enamel & Natural Crown'}
            {viewMode === 'anatomy' && 'Internal Root Canal & Pulp Matrix'}
            {viewMode === 'implant' && 'Biocompatible Titanium Dental Implant'}
          </h4>
        </div>

        {/* Mode Toggle Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-white/80 backdrop-blur-md rounded-xl border border-stone-200/60 shadow-xs">
          <button
            onClick={() => setViewMode('enamel')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              viewMode === 'enamel'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Enamel
            </span>
          </button>
          <button
            onClick={() => setViewMode('anatomy')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              viewMode === 'anatomy'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Anatomy
            </span>
          </button>
          <button
            onClick={() => setViewMode('implant')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
              viewMode === 'implant'
                ? 'bg-stone-900 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/60'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5" />
              Implant
            </span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Canvas Container */}
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Subtle Drag Tip & Rotation Toggle */}
      <div className="z-10 flex items-center justify-between pt-4 border-t border-stone-200/60 text-xs text-stone-500">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Drag or swipe to examine 360° structure
        </span>
        <button
          onClick={() => setIsRotating((prev) => !prev)}
          className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/70 hover:bg-white text-stone-700 transition-colors border border-stone-200/50"
        >
          <RotateCcw className="w-3 h-3" />
          {isRotating ? 'Pause rotation' : 'Auto rotate'}
        </button>
      </div>
    </div>
  );
};
