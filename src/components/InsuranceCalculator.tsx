import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { ShieldCheck, CheckCircle2, CreditCard, Search, ArrowRight, Heart } from 'lucide-react';

export const InsuranceCalculator: React.FC<{ onBook: () => void }> = ({ onBook }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'insurance' | 'membership'>('insurance');

  const filteredInsurances = CLINIC_INFO.insuranceAccepted.filter((ins) =>
    ins.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="insurance" className="py-20 lg:py-28 bg-[#F4EFEA] border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs uppercase tracking-widest text-[#142328] font-semibold">
            Transparent Investment
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-stone-900 tracking-tight mt-2 leading-tight">
            Clear financial guidance with zero surprise bills.
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg">
            We work directly with major dental PPOs and provide flexible in-house membership solutions
            so premium dental care remains accessible and predictable.
          </p>

          {/* Toggle Tab Buttons */}
          <div className="mt-6 flex items-center gap-2">
            <button
              onClick={() => setActiveTab('insurance')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeTab === 'insurance'
                  ? 'bg-[#142328] text-white shadow-xs'
                  : 'bg-white/80 text-stone-700 hover:bg-white border border-stone-200'
              }`}
            >
              Dental Insurance (PPO)
            </button>
            <button
              onClick={() => setActiveTab('membership')}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeTab === 'membership'
                  ? 'bg-[#142328] text-white shadow-xs'
                  : 'bg-white/80 text-stone-700 hover:bg-white border border-stone-200'
              }`}
            >
              No Insurance? In-House Wellness Plan
            </button>
          </div>
        </div>

        {/* Tab 1: Dental Insurance View */}
        {activeTab === 'insurance' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Search & Provider List */}
            <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between gap-4 mb-5">
                <h3 className="text-lg font-serif font-semibold text-stone-900">
                  Accepted Insurance Providers
                </h3>
                <span className="text-xs text-stone-500 font-medium">
                  {CLINIC_INFO.insuranceAccepted.length} Preferred Networks
                </span>
              </div>

              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search your insurance (e.g., Aetna, Cigna, Blue Cross)..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-[#142328] focus:ring-1 focus:ring-[#142328]"
                />
              </div>

              {/* Provider Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredInsurances.map((ins, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-stone-50 border border-stone-200/70 text-xs font-medium text-stone-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{ins}</span>
                  </div>
                ))}
              </div>

              {filteredInsurances.length === 0 && (
                <div className="p-4 rounded-xl bg-stone-50 text-xs text-stone-600 text-center">
                  Don't see your carrier? We process almost all out-of-network PPOs and will submit claims on your behalf.
                </div>
              )}

              <div className="mt-6 pt-5 border-t border-stone-100 text-xs text-stone-500 leading-relaxed">
                * Coverage varies depending on your employer's plan tier. We provide complimentary insurance benefit checks before any procedure is scheduled.
              </div>
            </div>

            {/* Right Guidance Box */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#142328] text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <ShieldCheck className="w-8 h-8 text-[#88B0A8]" />
                <h4 className="text-xl font-serif font-medium">
                  Complimentary Benefits Check
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Avoid confusing insurance co-pays. When you book an appointment, our insurance coordinator calls your carrier in advance to calculate your exact copay and deductible before you sit in the chair.
                </p>

                <div className="pt-2">
                  <button
                    onClick={onBook}
                    className="w-full py-3 rounded-xl bg-white text-stone-900 text-xs font-semibold hover:bg-stone-100 transition-colors shadow-xs flex items-center justify-center gap-2"
                  >
                    <span>Verify My Insurance Benefits</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-stone-200/90 p-6 space-y-3">
                <h5 className="text-sm font-semibold text-stone-900">
                  Flexible Financing & HSAs
                </h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  We accept CareCredit 0% promotional financing and all HSA / FSA debit cards. Phased treatment planning allows you to complete dental work comfortably within your yearly budget.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: In-House Wellness Membership Plan */}
        {activeTab === 'membership' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-10 shadow-xs">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#142328] font-semibold">
                Direct Dental Wellness · No Insurance Required
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-stone-900">
                Downtown Dental Wellness Membership Plan
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Designed specifically for our self-employed patients, retirees, and local downtown professionals without employer dental benefits. Simple annual fee with zero claim forms, no waiting periods, and no annual maximums.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>2 Comprehensive Exams & Screenings</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>2 Professional Dental Cleanings</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>All Routine Digital X-Rays & 3D Scans</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>1 Emergency Exam with X-Ray included</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>15% Savings on Restorative & Cosmetic Care</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Immediate enrollment, no pre-authorizations</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#F4EFEA] border border-stone-200 text-center space-y-4">
              <span className="text-xs uppercase tracking-wider text-stone-500 font-semibold">
                Adult Wellness Membership
              </span>
              <div className="text-4xl font-serif font-bold text-stone-900">
                $329 <span className="text-sm font-sans font-normal text-stone-500">/ year</span>
              </div>
              <p className="text-xs text-stone-600">
                Pays for itself on your very first routine cleaning and exam visit. Includes full year of dental protection.
              </p>
              <button
                onClick={onBook}
                className="w-full py-3 rounded-xl bg-[#142328] hover:bg-[#1E363D] text-white text-xs font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Enroll in Wellness Plan</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
