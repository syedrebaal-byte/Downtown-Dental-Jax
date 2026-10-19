import React from 'react';
import { Phone, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface StickyMobileBarProps {
  onOpenAppointment: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenAppointment }) => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-md border-t border-stone-200/90 px-4 py-2.5 shadow-lg"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <a
          href="tel:9043560072"
          className="flex-1 py-3 px-3 rounded-xl bg-white border border-stone-300 text-stone-900 text-xs font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-xs"
        >
          <Phone className="w-4 h-4 text-[#142328]" />
          <span>Call Office</span>
        </a>

        <button
          onClick={onOpenAppointment}
          className="flex-1 py-3 px-3 rounded-xl bg-[#142328] text-white text-xs font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-sm"
        >
          <Calendar className="w-4 h-4 text-[#88B0A8]" />
          <span>Book Visit</span>
        </button>
      </div>
    </aside>
  );
};
