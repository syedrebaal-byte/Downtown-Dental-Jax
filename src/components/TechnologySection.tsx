import React from 'react';
import { InteractiveTooth3D } from './InteractiveTooth3D';
import { Eye, ShieldCheck, Zap, Scan, CheckCircle2 } from 'lucide-react';

export const TechnologySection: React.FC = () => {
  return (
    <section id="technology" className="py-20 lg:py-28 bg-[#F4EFEA] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest text-[#142328] font-semibold">
            Next-Generation Diagnostics
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight mt-2 leading-tight">
            Advanced dental technology you can see and feel.
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            We've replaced archaic impression trays and high-radiation film with optical 3D scanners,
            computer-guided restorative design, and ultra-gentle diagnostics.
          </p>
        </div>

        {/* 2-Column Grid: Left 3D Interactive Canvas, Right Tech Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Interactive 3D Canvas Column */}
          <div className="lg:col-span-7">
            <InteractiveTooth3D />
          </div>

          {/* Right Technology Insights */}
          <div className="lg:col-span-5 space-y-5">
            
            <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#142328]/10 text-[#142328] flex items-center justify-center shrink-0">
                  <Scan className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-semibold text-stone-900">
                    High-Definition Intraoral 3D Scanning
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Say goodbye to gag-inducing impression putty. Our wand captures thousands of optical data points per second to create a hyper-accurate 3D digital model of your teeth.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#142328]/10 text-[#142328] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-semibold text-stone-900">
                    Ultra-Low Dose Digital Radiography
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Digital sensors produce crystal-clear diagnostic images with up to 85% less radiation than traditional film X-rays, providing instant chairside review.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#142328]/10 text-[#142328] flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-serif font-semibold text-stone-900">
                    Computer-Guided Implant Precision
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    Virtual surgical planning allows Dr. Witten to place dental implants with sub-millimeter anatomical precision, maximizing bone integration and longevity.
                  </p>
                </div>
              </div>
            </div>

            {/* Quiet verification footer */}
            <div className="pt-2 text-xs text-stone-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>All digital diagnostic data stored securely under HIPAA protocols.</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
