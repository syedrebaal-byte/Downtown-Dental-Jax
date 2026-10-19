import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Clock, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface NavbarProps {
  onOpenAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-[#142328] text-[#E0E8E7] text-xs font-normal border-b border-[#223940]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#88B0A8]" />
              <span className="hidden sm:inline">6 E Bay St, Suite 101 ·</span> Downtown Jacksonville, FL
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-stone-300">
              <Clock className="w-3.5 h-3.5 text-[#88B0A8]" />
              <span>Early 7:00 AM & Evening Hours Available</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:9043560072"
              className="flex items-center gap-1.5 hover:text-white transition-colors font-medium text-[#D1E2DE]"
            >
              <Phone className="w-3 h-3 text-[#88B0A8]" />
              <span>(904) 356-0072</span>
            </a>
            <span className="text-[#3F5B61] hidden sm:inline">|</span>
            <span className="hidden sm:inline text-[#88B0A8] font-medium">Accepting New Patients</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-stone-200/80 py-3.5'
            : 'bg-[#FAF8F5] border-b border-stone-200/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#142328] text-white flex items-center justify-center font-serif text-lg font-bold shadow-xs group-hover:bg-[#1C333A] transition-colors">
              DD
            </div>
            <div>
              <div className="text-lg font-serif font-semibold tracking-tight text-stone-900 leading-none">
                Downtown Dental
              </div>
              <div className="text-[10px] uppercase tracking-widest text-stone-500 font-medium mt-1">
                Jacksonville, Florida
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-stone-600">
            <a href="#services" className="hover:text-stone-950 transition-colors">
              Services
            </a>
            <a href="#doctors" className="hover:text-stone-950 transition-colors">
              Our Dentists
            </a>
            <a href="#technology" className="hover:text-stone-950 transition-colors">
              Technology
            </a>
            <a href="#assessment" className="hover:text-stone-950 transition-colors">
              Smile Assessment
            </a>
            <a href="#insurance" className="hover:text-stone-950 transition-colors">
              Insurance & Financing
            </a>
            <a href="#reviews" className="hover:text-stone-950 transition-colors">
              Reviews
            </a>
            <a href="#location" className="hover:text-stone-950 transition-colors">
              Hours & Location
            </a>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:9043560072"
              className="px-3.5 py-2 text-xs font-semibold text-stone-800 hover:text-stone-950 hover:bg-stone-200/60 rounded-xl transition-all"
            >
              Call (904) 356-0072
            </a>
            <button
              onClick={onOpenAppointment}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#142328] text-white text-xs font-semibold tracking-wide hover:bg-[#1F363E] transition-all shadow-sm active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 lg:hidden rounded-lg hover:bg-stone-100 text-stone-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-[#FAF8F5] px-4 pt-4 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-3 text-base font-medium text-stone-800 pb-4 border-b border-stone-200/70">
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 px-2 rounded-md hover:bg-stone-100"
              >
                Dental Services
              </a>
              <a
                href="#doctors"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 px-2 rounded-md hover:bg-stone-100"
              >
                Meet Our Dentists
              </a>
              <a
                href="#technology"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 px-2 rounded-md hover:bg-stone-100"
              >
                3D Digital Technology
              </a>
              <a
                href="#assessment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 px-2 rounded-md hover:bg-stone-100"
              >
                Smile Assessment Tool
              </a>
              <a
                href="#insurance"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 px-2 rounded-md hover:bg-stone-100"
              >
                Insurance & Payment
              </a>
              <a
                href="#reviews"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 px-2 rounded-md hover:bg-stone-100"
              >
                Patient Reviews (4.8★)
              </a>
              <a
                href="#location"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-1 px-2 rounded-md hover:bg-stone-100"
              >
                Contact & Directions
              </a>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full py-3 bg-[#142328] text-white rounded-xl font-medium text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Request Appointment</span>
              </button>
              <a
                href="tel:9043560072"
                className="w-full py-2.5 bg-stone-200/70 text-stone-900 rounded-xl font-medium text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (904) 356-0072</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
