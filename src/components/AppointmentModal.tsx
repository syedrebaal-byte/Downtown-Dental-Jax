import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { CLINIC_INFO, DOCTORS, SERVICES } from '../data/clinicData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedDoctor?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preselectedService = '',
  preselectedDoctor = ''
}) => {
  const [dentist, setDentist] = useState<string>('Any First Available');
  const [service, setService] = useState<string>('Preventive Exam & Cleaning');
  const [preferredDate, setPreferredDate] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('Early Morning (7:00 AM – 9:00 AM)');
  const [patientName, setPatientName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [insurance, setInsurance] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    if (preselectedDoctor) setDentist(preselectedDoctor);
    if (preselectedService) setService(preselectedService);
  }, [preselectedDoctor, preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientName.trim()) {
      setErrorMessage('Please provide your full name.');
      return;
    }
    if (!phone.trim()) {
      setErrorMessage('Please provide a contact phone number.');
      return;
    }
    setErrorMessage('');
    setIsSubmitting(true);

    // Simulate reliable appointment reservation request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] rounded-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-stone-200 shadow-2xl relative p-6 sm:p-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-200/70 hover:bg-stone-300 text-stone-700 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="pr-10 mb-6">
              <span className="text-xs uppercase tracking-widest text-[#142328] font-semibold">
                Downtown Jacksonville Clinic
              </span>
              <h3 className="text-2xl font-serif font-medium text-stone-900 mt-1">
                Request Your Appointment
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Located at 6 E Bay St, Suite 101. Our team will contact you promptly to confirm your scheduled time.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Doctor Selection */}
              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Preferred Dentist
                </label>
                <select
                  value={dentist}
                  onChange={(e) => setDentist(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-hidden focus:border-[#142328]"
                >
                  <option value="Any First Available">First Available Dentist (Fastest)</option>
                  {DOCTORS.map((doc) => (
                    <option key={doc.id} value={doc.name}>
                      {doc.name} ({doc.title.split('&')[0]})
                    </option>
                  ))}
                </select>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block font-semibold text-stone-800 mb-1">
                  Treatment or Reason for Visit
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-hidden focus:border-[#142328]"
                >
                  <option value="Comprehensive Exam & Cleaning">Preventive Exam & Cleaning</option>
                  <option value="Invisalign Consultation">Invisalign® Clear Aligners Consult</option>
                  <option value="Dental Implants & Restorative">Dental Implants / Broken Tooth</option>
                  <option value="Cosmetic Veneers & Whitening">Porcelain Veneers / Smile Makeover</option>
                  <option value="Same-Day Emergency Relief">Same-Day Emergency Care / Acute Pain</option>
                  <option value="General Consultation & Second Opinion">General Consultation / Second Opinion</option>
                </select>
              </div>

              {/* Time Window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-stone-800 mb-1">
                    Preferred Time of Day
                  </label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-hidden focus:border-[#142328]"
                  >
                    <option value="Early Morning (7:00 AM – 9:00 AM)">Early Morning (7:00 AM – 9:00 AM)</option>
                    <option value="Mid-Morning (9:30 AM – 11:30 AM)">Mid-Morning (9:30 AM – 11:30 AM)</option>
                    <option value="Midday Lunch Break (12:00 PM – 2:00 PM)">Midday Lunch Break (12:00 PM – 2:00 PM)</option>
                    <option value="Afternoon (2:30 PM – 4:30 PM)">Afternoon (2:30 PM – 4:30 PM)</option>
                    <option value="Tuesday Evening (5:00 PM – 6:00 PM)">Tuesday Evening (5:00 PM – 6:00 PM)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-stone-800 mb-1">
                    Ideal Date (Optional)
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-hidden focus:border-[#142328]"
                  />
                </div>
              </div>

              {/* Patient Contact Info */}
              <div className="pt-2 border-t border-stone-200/60 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-800 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g., Jennifer Taylor"
                      value={patientName}
                      onChange={(e) => setPatientName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-[#142328]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-800 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(904) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-[#142328]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-stone-800 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="jennifer@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-[#142328]"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-stone-800 mb-1">
                      Dental Insurance (or Self-Pay)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., Delta Dental, Aetna, or No Insurance"
                      value={insurance}
                      onChange={(e) => setInsurance(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-[#142328]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-stone-800 mb-1">
                    Special Requests or Dental Anxiety Notes (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Tell us if you have sensitive teeth, dental anxiety, or specific goals..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-[#142328]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-[#142328] hover:bg-[#1E363D] text-white font-semibold text-xs tracking-wide transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#88B0A8]" />
                  <span>{isSubmitting ? 'Submitting Request...' : 'Confirm Appointment Request'}</span>
                </button>
              </div>

              <div className="text-[11px] text-stone-500 text-center">
                Need immediate emergency care? Call us directly at{' '}
                <a href="tel:9043560072" className="text-stone-900 font-semibold underline">
                  (904) 356-0072
                </a>
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="py-6 text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
                Request Received
              </span>
              <h3 className="text-2xl font-serif font-medium text-stone-900 mt-1">
                Thank you, {patientName}!
              </h3>
              <p className="text-xs text-stone-600 mt-2 max-w-md mx-auto leading-relaxed">
                We have received your appointment request for <strong>{service}</strong> with <strong>{dentist}</strong> ({timeSlot}).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#F4EFEA] border border-stone-200 text-left text-xs text-stone-700 space-y-2 max-w-md mx-auto">
              <div className="font-semibold text-stone-900">What happens next:</div>
              <ul className="space-y-1.5 text-stone-600 text-[11px]">
                <li>• Our Jacksonville concierge team will call or text {phone} to lock in your exact calendar time.</li>
                <li>• If you provided insurance, we will run a complimentary benefits check ahead of your visit.</li>
                <li>• Free visitor parking is located right across 6 E Bay Street Suite 101.</li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-xl bg-[#142328] hover:bg-[#1E363D] text-white text-xs font-semibold transition-all shadow-xs"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
