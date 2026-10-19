import React, { useState } from 'react';
import { DOCTORS, Doctor } from '../data/clinicData';
import { Calendar, GraduationCap, Award, CheckCircle2 } from 'lucide-react';

interface DoctorsSectionProps {
  onSelectDoctor: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onSelectDoctor }) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(DOCTORS[0]);

  return (
    <section id="doctors" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs uppercase tracking-widest text-[#142328] font-semibold mb-2">
            Clinical Leadership & Artistry
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight leading-tight">
            Meet the dentists behind Downtown Jacksonville's smiles.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            Our practice unites board-certified dentists with advanced training in restorative dentistry,
            clear aligner therapy, and gentle preventive care. We take the time to listen before we recommend.
          </p>
        </div>

        {/* Doctor Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS.map((doc) => {
            const isSelected = selectedDoctor.id === doc.id;
            return (
              <div
                key={doc.id}
                onClick={() => setSelectedDoctor(doc)}
                className={`group cursor-pointer rounded-2xl bg-white border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#142328] shadow-md ring-1 ring-[#142328]/10'
                    : 'border-stone-200/90 hover:border-stone-400 hover:shadow-xs'
                }`}
              >
                {/* Doctor Portrait Container */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-stone-100">
                  <img
                    src={doc.image}
                    alt={`${doc.name} - Downtown Dental Jax`}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs uppercase tracking-widest text-[#B5D4CC] font-medium">
                      {doc.role}
                    </div>
                    <h3 className="text-xl font-serif font-medium leading-snug">
                      {doc.name}
                    </h3>
                    <p className="text-xs text-stone-200 mt-0.5">{doc.title}</p>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {doc.bio}
                  </p>

                  <div className="pt-3 border-t border-stone-100 space-y-2">
                    <div className="flex items-start gap-2 text-xs text-stone-500">
                      <GraduationCap className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                      <span>{doc.education}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {doc.specialties.map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium text-stone-700 bg-stone-100 px-2 py-0.5 rounded"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Booking Trigger Button */}
                  <div className="pt-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectDoctor(doc.name);
                      }}
                      className="w-full py-2.5 px-3 rounded-xl border border-stone-200 hover:border-stone-900 hover:bg-[#142328] hover:text-white text-stone-800 text-xs font-semibold transition-all flex items-center justify-center gap-2 group/btn"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book with {doc.name.split(' ')[1]}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Doctor Philosophy Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#F4EFEA] border border-stone-200/80">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                Clinical Philosophy · {selectedDoctor.name}
              </span>
              <p className="font-serif italic text-lg sm:text-xl text-stone-800 leading-relaxed">
                "{selectedDoctor.quote}"
              </p>
            </div>
            <button
              onClick={() => onSelectDoctor(selectedDoctor.name)}
              className="shrink-0 px-5 py-3 rounded-xl bg-[#142328] text-white text-xs font-semibold hover:bg-[#1D353C] transition-all flex items-center gap-2 shadow-xs"
            >
              <Calendar className="w-4 h-4 text-[#88B0A8]" />
              <span>Schedule with {selectedDoctor.name.split(',')[0]}</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
