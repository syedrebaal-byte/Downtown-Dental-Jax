import React from 'react';
import { Calendar, Phone, Star, ShieldCheck, Clock, Award, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface HeroProps {
  onOpenAppointment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAppointment }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Clean unboxed metadata banner */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-stone-600">
              <span className="text-[#1A3A34] font-semibold">Downtown Jacksonville</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="flex items-center gap-1 text-stone-800">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span className="font-semibold">4.8 Rating</span>
                <span className="text-stone-500">({CLINIC_INFO.totalReviews.toLocaleString()}+ Reviews)</span>
              </span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="text-emerald-800 bg-emerald-50/80 px-2 py-0.5 rounded text-[11px] font-medium">
                Accepting New Patients
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-normal text-stone-900 tracking-tight leading-[1.12]">
              Elevating the dental experience in the heart of{' '}
              <span className="italic font-serif text-[#142328]">Jacksonville.</span>
            </h1>

            {/* Subtitle Body */}
            <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed max-w-2xl">
              Experience gentle, architecturally precise dentistry at 6 E Bay Street. From early 7:00 AM cleanings
              to digital Invisalign® and implant restorations, we prioritize unhurried care and transparent guidance for your lifelong oral wellness.
            </p>

            {/* High-Converting CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3.5 rounded-xl bg-[#142328] hover:bg-[#1E363D] text-white text-sm font-medium tracking-wide transition-all shadow-sm flex items-center justify-center gap-2.5 active:scale-[0.99]"
              >
                <Calendar className="w-4 h-4 text-[#88B0A8]" />
                <span>Request Appointment</span>
              </button>

              <a
                href="tel:9043560072"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-900 border border-stone-300 text-sm font-medium transition-all flex items-center justify-center gap-2.5 shadow-xs"
              >
                <Phone className="w-4 h-4 text-stone-600" />
                <span>Call (904) 356-0072</span>
              </a>
            </div>

            {/* Quick 4 Proof Metrics */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-stone-200/80 text-xs">
              <div>
                <div className="text-stone-900 font-semibold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#142328]" />
                  <span>7:00 AM Hours</span>
                </div>
                <div className="text-stone-500 text-[11px] mt-0.5">Pre-work visits & Tuesdays until 6 PM</div>
              </div>

              <div>
                <div className="text-stone-900 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#142328]" />
                  <span>Most PPOs</span>
                </div>
                <div className="text-stone-500 text-[11px] mt-0.5">Aetna, BCBS, Cigna, MetLife & more</div>
              </div>

              <div>
                <div className="text-stone-900 font-semibold flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#142328]" />
                  <span>3 Board Dentists</span>
                </div>
                <div className="text-stone-500 text-[11px] mt-0.5">Dr. Witten, Dr. Portalatin, Dr. Chammas</div>
              </div>

              <div>
                <div className="text-stone-900 font-semibold flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[#142328]" />
                  <span>Bay & Main St</span>
                </div>
                <div className="text-stone-500 text-[11px] mt-0.5">Ground floor suite with easy parking</div>
              </div>
            </div>

          </div>

          {/* Right Visual Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200/80 bg-stone-100">
              <img
                src="/assets/images/hero.jpg"
                alt="Downtown Dental Jax modern clinic suite overlooking Bay Street Jacksonville"
                className="w-full h-[440px] sm:h-[500px] object-cover hover:scale-[1.02] transition-transform duration-700"
                loading="eager"
              />
              
              {/* Subtle architectural overlay card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-stone-200/70 shadow-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-stone-500 font-medium">
                      Clinic Suite 101
                    </div>
                    <div className="text-sm font-serif font-semibold text-stone-900">
                      6 E Bay Street, Jacksonville, FL
                    </div>
                  </div>
                  <a
                    href="#location"
                    className="p-2 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
                    aria-label="View location details"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative background element */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#E2EBE8] rounded-full blur-3xl -z-10 pointer-events-none opacity-60" />
          </div>

        </div>
      </div>
    </section>
  );
};
