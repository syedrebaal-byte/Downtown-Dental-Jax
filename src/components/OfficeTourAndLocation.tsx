import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, Navigation, Car, ShieldCheck } from 'lucide-react';

export const OfficeTourAndLocation: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  return (
    <section id="location" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-widest text-[#142328] font-semibold">
            Visit Our Practice
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight mt-2 leading-tight">
            A serene sanctuary in Downtown Jacksonville.
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            Located on the ground floor of 6 E Bay Street. Designed with warm architectural elements,
            plush seating, and quiet private treatment suites overlooking historic Bay Street.
          </p>
        </div>

        {/* Office Photo Walkthrough */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          <div className="rounded-2xl overflow-hidden border border-stone-200/90 bg-white shadow-xs group">
            <div className="aspect-[16/10] overflow-hidden bg-stone-100">
              <img
                src="/assets/images/lounge.jpg"
                alt="Downtown Dental Jax reception and patient lounge at 6 E Bay St"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Welcome Lounge · Suite 101
              </span>
              <h3 className="text-lg font-serif font-medium text-stone-900 mt-1">
                Curated Comfort & Refreshment
              </h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Enjoy complimentary sparkling water, espresso, and high-speed Wi-Fi in our peaceful, noise-insulated reception lounge.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-stone-200/90 bg-white shadow-xs group">
            <div className="aspect-[16/10] overflow-hidden bg-stone-100">
              <img
                src="/assets/images/hero.jpg"
                alt="Modern dental operatory suite with natural daylight"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Treatment Suites
              </span>
              <h3 className="text-lg font-serif font-medium text-stone-900 mt-1">
                Sunlit Operatories & Ergonomic Chairs
              </h3>
              <p className="text-xs text-stone-600 mt-2 leading-relaxed">
                Expansive arched windows provide natural Florida daylight, paired with ergonomic memory-foam dental chairs and ceiling entertainment.
              </p>
            </div>
          </div>

        </div>

        {/* Location & Operating Hours Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Operating Hours Table */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-2.5">
              <Clock className="w-5 h-5 text-[#142328]" />
              <h3 className="text-xl font-serif font-semibold text-stone-900">
                Office Operating Hours
              </h3>
            </div>

            <div className="space-y-3 divide-y divide-stone-100 text-xs">
              {CLINIC_INFO.hours.map((h, idx) => (
                <div key={idx} className="pt-3 first:pt-0 flex items-start justify-between gap-4">
                  <div>
                    <span className="font-semibold text-stone-900">{h.day}</span>
                    <div className="text-[11px] text-stone-500 mt-0.5">{h.note}</div>
                  </div>
                  <span
                    className={`font-medium text-right ${
                      h.hours === 'Closed' ? 'text-stone-400' : 'text-stone-800'
                    }`}
                  >
                    {h.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200/70 text-xs text-stone-600 space-y-1">
              <strong className="text-stone-900 font-semibold block">Need early or late visits?</strong>
              <p>
                Take advantage of our 7:00 AM Monday–Wednesday slots or Tuesday evenings until 6:00 PM without taking time off work.
              </p>
            </div>
          </div>

          {/* Address & Parking Details */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#142328]" />
                <h3 className="text-xl font-serif font-semibold text-stone-900">
                  Location & Contact
                </h3>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <div className="text-stone-500 uppercase tracking-wider text-[10px] font-semibold">Address</div>
                  <div className="text-sm font-medium text-stone-900 mt-0.5">
                    {CLINIC_INFO.address.street}
                  </div>
                  <div className="text-stone-600">
                    {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}
                  </div>
                  <div className="text-stone-500 text-[11px] mt-1">
                    {CLINIC_INFO.address.landmarks}
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100 flex flex-wrap gap-4">
                  <div>
                    <div className="text-stone-500 uppercase tracking-wider text-[10px] font-semibold">Main Phone</div>
                    <a
                      href="tel:9043560072"
                      className="text-sm font-semibold text-[#142328] hover:underline mt-0.5 block"
                    >
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-stone-500 uppercase tracking-wider text-[10px] font-semibold">Secondary Line</div>
                    <a
                      href="tel:9047346837"
                      className="text-sm font-semibold text-[#142328] hover:underline mt-0.5 block"
                    >
                      {CLINIC_INFO.altPhone}
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center gap-3">
                  <Car className="w-4 h-4 text-stone-400 shrink-0" />
                  <span className="text-stone-600 text-[11px]">
                    Convenient street parking directly on Bay St & Main St, plus adjacent covered garage parking.
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={CLINIC_INFO.address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl border border-stone-300 hover:border-stone-900 text-stone-900 text-xs font-semibold text-center transition-all flex items-center justify-center gap-2"
                >
                  <Navigation className="w-3.5 h-3.5 text-stone-600" />
                  <span>Get Driving Directions</span>
                </a>

                <button
                  onClick={onBook}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#142328] hover:bg-[#1E363D] text-white text-xs font-semibold text-center transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Request Visit</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
