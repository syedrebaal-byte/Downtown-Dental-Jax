import React, { useState } from 'react';
import { FAQ_LIST } from '../data/clinicData';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F4EFEA] border-b border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#142328] font-semibold">
            Patient Questions & Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mt-2">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Everything you need to know about scheduling, parking, insurance, and what makes our Bay Street practice different.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {FAQ_LIST.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-stone-200/90 overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-stone-50/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-wider text-stone-600 font-semibold hidden sm:inline">
                      {faq.category} ·
                    </span>
                    <span className="font-serif text-base sm:text-lg font-medium text-stone-900">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-stone-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-stone-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <div className="font-semibold text-stone-900 text-sm">Have a specific clinical question?</div>
            <div className="text-stone-500 mt-0.5">Our dental coordinators are available Monday through Friday.</div>
          </div>
          <a
            href="tel:9043560072"
            className="px-4 py-2.5 rounded-xl bg-[#142328] hover:bg-[#1E363D] text-white font-semibold flex items-center gap-2 transition-all shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#88B0A8]" />
            <span>Call (904) 356-0072</span>
          </a>
        </div>

      </div>
    </section>
  );
};
