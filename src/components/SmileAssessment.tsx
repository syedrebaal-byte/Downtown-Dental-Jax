import React, { useState } from 'react';
import { Sparkles, Calendar, CheckCircle2, ArrowRight, RotateCcw, Clock, HeartHandshake } from 'lucide-react';

interface SmileAssessmentProps {
  onComplete: (summary: { goal: string; lastVisit: string; timePref: string }) => void;
}

export const SmileAssessment: React.FC<SmileAssessmentProps> = ({ onComplete }) => {
  const [step, setStep] = useState<number>(1);
  const [goal, setGoal] = useState<string>('');
  const [lastVisit, setLastVisit] = useState<string>('');
  const [timePref, setTimePref] = useState<string>('');
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const goals = [
    {
      id: 'invisalign',
      title: 'Discreetly straighten teeth or close gaps',
      desc: 'Interested in clear, removable Invisalign® aligners without metal brackets.',
      recommendation: 'Invisalign® 3D Digital Smile Simulation'
    },
    {
      id: 'implants',
      title: 'Replace a missing or damaged tooth',
      desc: 'Looking for a permanent titanium implant or natural-looking ceramic crown.',
      recommendation: 'Restorative Implant & Diagnostic Evaluation'
    },
    {
      id: 'cosmetic',
      title: 'Brighten color, fix chips, or transform my smile',
      desc: 'Interested in porcelain veneers, aesthetic bonding, or professional whitening.',
      recommendation: 'Aesthetic Smile Design Consultation'
    },
    {
      id: 'preventive',
      title: 'Overdue for a gentle cleaning & checkup',
      desc: 'Looking for an unhurried, anxiety-free routine dental hygiene visit.',
      recommendation: 'Comprehensive New Patient Wellness Exam'
    },
    {
      id: 'emergency',
      title: 'Toothache, broken tooth, or dental emergency',
      desc: 'Experiencing sudden pain, swelling, or a dislodged restoration.',
      recommendation: 'Same-Day Priority Emergency Exam'
    }
  ];

  const visitTimes = [
    'Within the past 6 months',
    '6–12 months ago',
    '1–3 years ago',
    '3+ years ago (No judgment, we welcome you back warmly)'
  ];

  const timeOptions = [
    'Early Morning (7:00 AM – 9:00 AM, before work)',
    'Midday Lunch Break (11:00 AM – 1:30 PM)',
    'Afternoon / Evening (up to 6:00 PM on Tuesdays)',
    'Flexible (any available slot this week)'
  ];

  const handleNext = () => {
    if (step === 1 && goal) setStep(2);
    else if (step === 2 && lastVisit) setStep(3);
    else if (step === 3 && timePref) {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setStep(1);
    setGoal('');
    setLastVisit('');
    setTimePref('');
    setIsFinished(false);
  };

  const matchedGoal = goals.find((g) => g.id === goal);

  return (
    <section id="assessment" className="py-20 lg:py-28 bg-[#FAF8F5] border-b border-stone-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-[#142328] font-semibold">
            Interactive Navigator
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-stone-900 mt-2">
            Personalized Smile & Care Assessment
          </h2>
          <p className="mt-2 text-sm sm:text-base text-stone-600">
            Tell us about your dental goals in 3 simple questions and receive tailored treatment recommendations.
          </p>
        </div>

        {/* Assessment Card */}
        <div className="bg-white rounded-2xl border border-stone-200/90 shadow-sm p-6 sm:p-10">
          
          {/* Progress Indicator */}
          {!isFinished && (
            <div className="mb-8 pb-6 border-b border-stone-100 flex items-center justify-between text-xs text-stone-500">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-stone-900">Step {step} of 3</span>
                <span>·</span>
                <span>
                  {step === 1 && 'Primary Oral Goal'}
                  {step === 2 && 'Dental History'}
                  {step === 3 && 'Convenient Scheduling'}
                </span>
              </div>
              <div className="w-24 h-1.5 bg-stone-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#142328] transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 1: Select Goal */}
          {!isFinished && step === 1 && (
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-medium text-stone-900 mb-2">
                What is your main focus for visiting Downtown Dental Jax?
              </h3>
              <div className="space-y-2.5">
                {goals.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setGoal(item.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      goal === item.id
                        ? 'border-[#142328] bg-stone-50 ring-1 ring-[#142328]/15'
                        : 'border-stone-200 hover:border-stone-400 hover:bg-stone-50/50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-stone-900">{item.title}</div>
                        <div className="text-xs text-stone-600 mt-1">{item.desc}</div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                          goal === item.id
                            ? 'border-[#142328] bg-[#142328] text-white'
                            : 'border-stone-300'
                        }`}
                      >
                        {goal === item.id && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Last Visit */}
          {!isFinished && step === 2 && (
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-medium text-stone-900 mb-2">
                Approximately when was your last professional dental checkup?
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                We pride ourselves on non-judgmental, gentle care regardless of how long it has been.
              </p>
              <div className="space-y-2.5">
                {visitTimes.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => setLastVisit(item)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      lastVisit === item
                        ? 'border-[#142328] bg-stone-50 ring-1 ring-[#142328]/15'
                        : 'border-stone-200 hover:border-stone-400 hover:bg-stone-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-stone-800">{item}</span>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          lastVisit === item
                            ? 'border-[#142328] bg-[#142328] text-white'
                            : 'border-stone-300'
                        }`}
                      >
                        {lastVisit === item && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Preferred Time */}
          {!isFinished && step === 3 && (
            <div className="space-y-4">
              <h3 className="text-lg font-serif font-medium text-stone-900 mb-2">
                What time window works best for your schedule?
              </h3>
              <p className="text-xs text-stone-500 mb-4">
                Our Bay Street office opens early at 7:00 AM on weekdays and stays open until 6:00 PM Tuesdays.
              </p>
              <div className="space-y-2.5">
                {timeOptions.map((time, idx) => (
                  <div
                    key={idx}
                    onClick={() => setTimePref(time)}
                    className={`p-4 rounded-xl border cursor-pointer transition-all ${
                      timePref === time
                        ? 'border-[#142328] bg-stone-50 ring-1 ring-[#142328]/15'
                        : 'border-stone-200 hover:border-stone-400 hover:bg-stone-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-stone-800">{time}</span>
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          timePref === time
                            ? 'border-[#142328] bg-[#142328] text-white'
                            : 'border-stone-300'
                        }`}
                      >
                        {timePref === time && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Results Screen */}
          {isFinished && matchedGoal && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="p-6 rounded-xl bg-[#F4EFEA] border border-stone-200/80">
                <span className="text-xs uppercase tracking-wider text-[#142328] font-semibold">
                  Personalized Care Plan
                </span>
                <h3 className="text-2xl font-serif text-stone-900 mt-1">
                  Recommended: {matchedGoal.recommendation}
                </h3>
                <p className="text-sm text-stone-700 mt-2 leading-relaxed">
                  Based on your preference for <strong className="font-semibold text-stone-900">{matchedGoal.title.toLowerCase()}</strong> and your preferred window (<span className="text-stone-800">{timePref}</span>), our clinical team will reserve an unhurried consultation suite for you.
                </p>

                <div className="mt-4 pt-4 border-t border-stone-200/70 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Includes 3D digital intraoral scan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Direct review with board-certified dentist</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Complimentary insurance benefits verification</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Zero pressure, transparent treatment pricing</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <button
                  onClick={handleReset}
                  className="text-xs text-stone-500 hover:text-stone-900 flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start over</span>
                </button>

                <button
                  onClick={() =>
                    onComplete({
                      goal: matchedGoal.title,
                      lastVisit,
                      timePref
                    })
                  }
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#142328] hover:bg-[#1E363D] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <Calendar className="w-4 h-4 text-[#88B0A8]" />
                  <span>Schedule This Consultation</span>
                </button>
              </div>
            </div>
          )}

          {/* Stepper Footer Controls */}
          {!isFinished && (
            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between">
              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="text-xs font-medium text-stone-600 hover:text-stone-900 px-3 py-1.5 rounded-lg hover:bg-stone-100 transition-colors"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              <button
                disabled={
                  (step === 1 && !goal) ||
                  (step === 2 && !lastVisit) ||
                  (step === 3 && !timePref)
                }
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-[#142328] hover:bg-[#1E363D] disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-semibold transition-all flex items-center gap-2"
              >
                <span>{step === 3 ? 'View Recommendation' : 'Next Step'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
