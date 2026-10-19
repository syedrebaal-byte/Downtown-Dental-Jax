import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  return (
    <footer className="bg-[#101C20] text-stone-300 text-xs border-t border-[#1C2F36]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Top 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-[#21373F]">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white text-[#101C20] flex items-center justify-center font-serif text-base font-bold shadow-xs">
                DD
              </div>
              <div>
                <div className="text-base font-serif font-semibold text-white tracking-tight">
                  Downtown Dental Jax
                </div>
                <div className="text-[10px] uppercase tracking-wider text-stone-400">
                  Jacksonville, Florida
                </div>
              </div>
            </div>

            <p className="text-stone-400 leading-relaxed text-xs">
              Dedicated to compassionate, architecturally meticulous dentistry in Downtown Jacksonville.
              Unhurried appointments, state-of-the-art 3D digital imaging, and early 7:00 AM hours tailored to your life.
            </p>

            <div className="pt-2 text-stone-400 text-[11px] space-y-1">
              <div>Dr. Andrew L. Witten, DMD · Lead Dentist</div>
              <div>Dr. Eric Portalatin, DMD · Associate Dentist</div>
              <div>Dr. Maria Al Chammas, DMD · Associate Dentist</div>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-stone-100 font-semibold uppercase tracking-wider text-[11px]">
              Clinical Services
            </div>
            <ul className="space-y-2 text-stone-400 text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Preventive Care & Hygiene
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Invisalign® Clear Aligners
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Dental Implants & Restorative Crowns
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Porcelain Veneers & Smile Makeovers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Same-Day Emergency Dentistry
                </a>
              </li>
              <li>
                <a href="#technology" className="hover:text-white transition-colors">
                  3D Intraoral Digital Imaging
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours & Schedule */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-stone-100 font-semibold uppercase tracking-wider text-[11px]">
              Office Hours
            </div>
            <div className="space-y-1.5 text-stone-400 text-xs">
              <div>Mon & Wed: 7:00 AM – 5:00 PM</div>
              <div className="text-white font-medium">Tue: 7:00 AM – 6:00 PM</div>
              <div>Thu: 7:30 AM – 5:00 PM</div>
              <div>Fri: 7:30 AM – 4:00 PM</div>
              <div className="text-stone-500">Sat & Sun: Closed</div>
            </div>
            <div className="pt-2">
              <button
                onClick={onBook}
                className="px-3.5 py-1.5 rounded-lg bg-[#1C333A] hover:bg-[#274852] text-white text-[11px] font-semibold transition-colors"
              >
                Schedule Visit
              </button>
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-stone-100 font-semibold uppercase tracking-wider text-[11px]">
              Location & Contact
            </div>
            <div className="space-y-2 text-stone-400 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#88B0A8] shrink-0 mt-0.5" />
                <span>
                  {CLINIC_INFO.address.street}<br />
                  {CLINIC_INFO.address.city}, {CLINIC_INFO.address.state} {CLINIC_INFO.address.zip}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#88B0A8] shrink-0" />
                <a href="tel:9043560072" className="hover:text-white text-stone-200 font-medium">
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#88B0A8] shrink-0" />
                <a href="tel:9047346837" className="hover:text-white">
                  {CLINIC_INFO.altPhone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#88B0A8] shrink-0" />
                <span>{CLINIC_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Emergency Notice */}
        <div className="py-6 border-b border-[#21373F] text-[11px] text-stone-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <strong className="text-stone-200 font-semibold">Dental Emergency Protocol:</strong>{' '}
            If you are experiencing severe oral pain, bleeding, or dental trauma, call{' '}
            <a href="tel:9043560072" className="text-stone-200 underline font-medium">
              (904) 356-0072
            </a>{' '}
            for same-day priority triage. In life-threatening emergencies, dial 911.
          </div>
          <div className="shrink-0 flex items-center gap-2 text-stone-300">
            <ShieldCheck className="w-4 h-4 text-[#88B0A8]" />
            <span>HIPAA Compliant Care</span>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} Downtown Dental Jax. All rights reserved. 6 E Bay St, Suite 101, Jacksonville, FL 32202.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-stone-300 cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-stone-300 cursor-pointer">Accessibility Statement</span>
            <span>·</span>
            <span className="hover:text-stone-300 cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
