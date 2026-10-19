import React, { useState } from 'react';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  duration: string;
  doctor: string;
  description: string;
  details: string[];
  beforeImage: string;
  afterImage: string;
}

const CASES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Porcelain Veneer Reconstruction',
    category: 'Cosmetic Dentistry',
    duration: '3 visits (4 weeks total)',
    doctor: 'Dr. Andrew L. Witten, DMD',
    description: 'Patient presented with tetracycline discoloration, uneven wear, and minor incisal chipping. Six custom hand-layered porcelain veneers were designed to restore natural light transmission and facial balance.',
    details: [
      'Minimal enamel preparation preserving natural tooth structure',
      'Individual ceramic micro-texture mimicking authentic enamel',
      'Harmonious gingival contouring with painless soft-tissue laser'
    ],
    beforeImage: '/assets/images/implants.jpg',
    afterImage: '/assets/images/smile_result.jpg'
  },
  {
    id: 'case-2',
    title: 'Invisalign® Clear Aligner Realignment',
    category: 'Orthodontics',
    duration: '9 months (18 aligner trays)',
    doctor: 'Dr. Maria Al Chammas, DMD',
    description: 'Adult professional seeking discreet treatment for lower anterior crowding and an asymmetric smile line without traditional metal brackets.',
    details: [
      '100% digital treatment planning via 3D intraoral scans',
      'Zero dietary restrictions or speech impediment',
      'Completed with aesthetic whitening and retention protocol'
    ],
    beforeImage: '/assets/images/invisalign.jpg',
    afterImage: '/assets/images/smile_result.jpg'
  },
  {
    id: 'case-3',
    title: 'Biocompatible Implant & Zirconia Crown',
    category: 'Restorative Care',
    duration: 'Multi-phase customized healing',
    doctor: 'Dr. Andrew L. Witten & Dr. Eric Portalatin',
    description: 'Replacement of a fractured upper premolar. The implant was placed using computer-guided 3D surgical templates, followed by custom ceramic crown delivery.',
    details: [
      'Titanium fixture preserved adjacent healthy bone and tooth roots',
      'Shade calibrated to surrounding teeth using digital colorimetry',
      'Fully restored chewing power with natural flossability'
    ],
    beforeImage: '/assets/images/scanner.jpg',
    afterImage: '/assets/images/implants.jpg'
  }
];

interface BeforeAfterGalleryProps {
  onOpenAppointment: () => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onOpenAppointment }) => {
  const [activeCase, setActiveCase] = useState<CaseStudy>(CASES[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  return (
    <section className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#142328] font-semibold">
              Smile Transformations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight mt-2 leading-tight">
              Clinical precision. Natural elegance.
            </h2>
            <p className="mt-3 text-stone-600 text-base sm:text-lg">
              Explore real treatment outcomes designed by Dr. Witten, Dr. Portalatin, and Dr. Chammas.
              We prioritize subtle natural aesthetics over artificial uniformity.
            </p>
          </div>

          {/* Case Selector Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-200/60 rounded-xl overflow-x-auto max-w-full">
            {CASES.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveCase(c);
                  setSliderPosition(50);
                }}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeCase.id === c.id
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {c.category}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Case Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-10 shadow-xs">
          
          {/* Interactive Comparison Slider */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-xl overflow-hidden select-none bg-stone-100 border border-stone-200">
              
              {/* After Image (Background) */}
              <img
                src={activeCase.afterImage}
                alt={`${activeCase.title} Result`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#142328]/85 text-white text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-xs">
                Outcome / Result
              </div>

              {/* Before Image (Clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.beforeImage}
                  alt={`${activeCase.title} Clinical Preparation`}
                  className="absolute inset-0 w-full h-full object-cover max-w-none"
                  style={{ width: '100%', height: '100%' }}
                />
                <div className="absolute top-4 left-4 bg-stone-900/80 text-white text-[11px] font-semibold px-2.5 py-1 rounded backdrop-blur-xs">
                  Clinical Scan / Prep
                </div>
              </div>

              {/* Slider Divider Line & Thumb */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize shadow-md"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-stone-800 shadow-lg flex items-center justify-center text-xs font-bold border border-stone-200">
                  ↔
                </div>
              </div>

              {/* Invisible Range Input for Smooth Dragging */}
              <input
                type="range"
                min="5"
                max="95"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(Number(e.target.value))}
                className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                aria-label="Drag before and after slider"
              />
            </div>

            <div className="mt-3 text-center text-xs text-stone-500">
              Drag slider left or right to compare clinical documentation & final result
            </div>
          </div>

          {/* Case Narrative */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="text-xs uppercase tracking-wider text-[#142328] font-semibold">
                Case Study · {activeCase.category}
              </span>
              <h3 className="text-2xl font-serif font-medium text-stone-900 mt-1">
                {activeCase.title}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Treated by {activeCase.doctor} · Duration: {activeCase.duration}
              </p>
            </div>

            <p className="text-sm text-stone-600 leading-relaxed">
              {activeCase.description}
            </p>

            <div className="pt-2 border-t border-stone-100 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-900">
                Key Clinical Milestones
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-600">
                {activeCase.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold">✓</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenAppointment}
                className="w-full py-3 rounded-xl bg-[#142328] hover:bg-[#1E363D] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
              >
                <Calendar className="w-4 h-4 text-[#88B0A8]" />
                <span>Consult on Your Smile Goals</span>
              </button>
            </div>
          </div>

        </div>

        {/* Responsible Medical Disclaimer */}
        <div className="mt-6 text-center text-[11px] text-stone-500 max-w-2xl mx-auto">
          * Authentic clinical documentation. Every smile is unique; individual clinical results depend on bone structure, gum architecture, and lifestyle factors. Our dentists perform comprehensive diagnostics before confirming candidacy.
        </div>

      </div>
    </section>
  );
};
