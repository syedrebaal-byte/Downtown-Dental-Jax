import React, { useState } from 'react';
import { SERVICES, ServiceDetail } from '../data/clinicData';
import { ArrowRight, Clock, CheckCircle2, ChevronRight, X, Calendar, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeModalService, setActiveModalService] = useState<ServiceDetail | null>(null);

  const categories = ['All', 'General', 'Orthodontics', 'Restorative', 'Cosmetic', 'Emergency'];

  const filteredServices =
    activeCategory === 'All'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#142328] font-semibold">
              Comprehensive Care
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight mt-2 leading-tight">
              Clinical precision tailored to your lifelong health.
            </h2>
            <p className="mt-3 text-stone-600 text-base sm:text-lg">
              From everyday wellness exams to transformative smile restorations, every treatment is delivered with
              gentle techniques and digital accuracy.
            </p>
          </div>

          {/* Category Tabs (Functional buttons as per frontend-design skill) */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/60 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                  activeCategory === cat
                    ? 'bg-white text-stone-900 shadow-xs'
                    : 'text-stone-600 hover:text-stone-900 hover:bg-white/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden hover:border-stone-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              {/* Service Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#142328]/85 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                  {service.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif font-medium text-stone-900 leading-snug group-hover:text-[#142328] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-500 italic mt-1">{service.tagline}</p>
                  <p className="text-sm text-stone-600 mt-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-stone-500">
                    <Clock className="w-3.5 h-3.5 text-stone-400" />
                    <span>Typical visit: {service.duration}</span>
                  </div>

                  <div className="flex items-center justify-between gap-3 pt-1">
                    <button
                      onClick={() => setActiveModalService(service)}
                      className="text-xs font-semibold text-stone-900 hover:text-[#142328] flex items-center gap-1 transition-colors"
                    >
                      <span>Explore details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => onSelectService(service.title)}
                      className="px-3.5 py-1.5 rounded-lg bg-stone-100 hover:bg-[#142328] text-stone-800 hover:text-white text-xs font-semibold transition-all flex items-center gap-1.5"
                    >
                      <Calendar className="w-3.5 h-3.5" />
                      <span>Book</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Treatment Detail Modal */}
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-[#FAF8F5] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-stone-200 shadow-2xl relative p-6 sm:p-8">
              
              {/* Close Button */}
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-stone-200/70 hover:bg-stone-300 text-stone-700 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="pr-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#142328]">
                  {activeModalService.category} Dentistry
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-stone-900 mt-1">
                  {activeModalService.title}
                </h3>
                <p className="text-sm text-stone-600 italic mt-1">
                  {activeModalService.tagline}
                </p>
              </div>

              {/* Modal Hero Image */}
              <div className="mt-6 aspect-[16/9] rounded-xl overflow-hidden bg-stone-200">
                <img
                  src={activeModalService.image}
                  alt={activeModalService.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Full Description */}
              <div className="mt-6 space-y-4 text-sm text-stone-700 leading-relaxed">
                <p>{activeModalService.fullDesc}</p>
              </div>

              {/* Key Benefits */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-900 mb-3">
                  Key Patient Benefits
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <div className="mt-6 pt-6 border-t border-stone-200">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-900 mb-3">
                  What To Expect During Treatment
                </h4>
                <ol className="space-y-2.5 text-xs text-stone-700">
                  {activeModalService.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-stone-200 text-stone-900 font-semibold flex items-center justify-center shrink-0 text-[11px]">
                        {idx + 1}
                      </span>
                      <span className="mt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* FAQs */}
              <div className="mt-6 pt-6 border-t border-stone-200">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-stone-900 mb-3">
                  Frequently Asked Questions
                </h4>
                <div className="space-y-3">
                  {activeModalService.faqs.map((faq, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-white border border-stone-200/80">
                      <div className="text-xs font-semibold text-stone-900">
                        {faq.question}
                      </div>
                      <div className="text-xs text-stone-600 mt-1 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-stone-500">
                  Questions? Call our Bay St office at{' '}
                  <a href="tel:9043560072" className="text-stone-900 font-semibold underline">
                    (904) 356-0072
                  </a>
                </div>

                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onSelectService(title);
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#142328] hover:bg-[#1E363D] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-[#88B0A8]" />
                  <span>Book {activeModalService.category} Appointment</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
