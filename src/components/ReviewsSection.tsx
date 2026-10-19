import React, { useState } from 'react';
import { TESTIMONIALS, CLINIC_INFO } from '../data/clinicData';
import { Star, CheckCircle2, Quote } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [filterTreatment, setFilterTreatment] = useState<string>('All');

  const treatments = ['All', 'Invisalign', 'Implants & Crowns', 'Veneers', 'Preventive'];

  const filteredReviews = TESTIMONIALS.filter((rev) => {
    if (filterTreatment === 'All') return true;
    if (filterTreatment === 'Invisalign') return rev.treatment.includes('Invisalign');
    if (filterTreatment === 'Implants & Crowns') return rev.treatment.includes('Crown') || rev.treatment.includes('Implant');
    if (filterTreatment === 'Veneers') return rev.treatment.includes('Veneers');
    if (filterTreatment === 'Preventive') return rev.treatment.includes('Hygiene') || rev.treatment.includes('Routine');
    return true;
  });

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Overall Rating Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <span className="text-xs uppercase tracking-widest text-[#142328] font-semibold">
              Verified Patient Experiences
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight mt-2 leading-tight">
              Trusted by over {CLINIC_INFO.totalReviews.toLocaleString()} patients across Jacksonville.
            </h2>
            <p className="mt-3 text-stone-600 text-base sm:text-lg">
              Read authentic feedback from working professionals, downtown residents, and families who rely on our Bay Street practice for gentle, unhurried care.
            </p>
          </div>

          {/* Rating Summary Box */}
          <div className="lg:col-span-4 p-5 rounded-2xl bg-white border border-stone-200/80 shadow-xs flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-2xl font-serif font-bold text-stone-900 mt-1">
                {CLINIC_INFO.rating} / 5.0 Rating
              </div>
              <div className="text-xs text-stone-500">
                Based on {CLINIC_INFO.totalReviews.toLocaleString()}+ verified reviews
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center font-serif font-bold text-stone-800 text-sm">
              DDJ
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-1.5 pb-8 overflow-x-auto">
          {treatments.map((t) => (
            <button
              key={t}
              onClick={() => setFilterTreatment(t)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                filterTreatment === t
                  ? 'bg-[#142328] text-white shadow-xs'
                  : 'bg-white text-stone-600 border border-stone-200/80 hover:border-stone-400'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    {rev.date}
                  </span>
                </div>

                <p className="text-sm text-stone-700 leading-relaxed font-normal italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-semibold text-stone-900">{rev.name}</div>
                  <div className="text-stone-500 text-[11px]">{rev.location}</div>
                </div>
                <div className="text-[11px] font-medium text-stone-600 bg-stone-100 px-2.5 py-1 rounded-md">
                  {rev.treatment}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
