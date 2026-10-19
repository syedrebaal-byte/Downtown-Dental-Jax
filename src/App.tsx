import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DoctorsSection } from './components/DoctorsSection';
import { ServicesSection } from './components/ServicesSection';
import { TechnologySection } from './components/TechnologySection';
import { SmileAssessment } from './components/SmileAssessment';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { InsuranceCalculator } from './components/InsuranceCalculator';
import { ReviewsSection } from './components/ReviewsSection';
import { OfficeTourAndLocation } from './components/OfficeTourAndLocation';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { StickyMobileBar } from './components/StickyMobileBar';
import { AppointmentModal } from './components/AppointmentModal';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState('');
  const [preselectedDoctor, setPreselectedDoctor] = useState('');

  const handleOpenAppointment = () => {
    setPreselectedDoctor('');
    setPreselectedService('');
    setIsAppointmentOpen(true);
  };

  const handleSelectDoctor = (doctorName: string) => {
    setPreselectedDoctor(doctorName);
    setPreselectedService('');
    setIsAppointmentOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    setPreselectedDoctor('');
    setIsAppointmentOpen(true);
  };

  const handleAssessmentComplete = (data: { goal: string; lastVisit: string; timePref: string }) => {
    setPreselectedService(data.goal);
    setIsAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 font-sans selection:bg-[#142328]/15 selection:text-[#101C20]">
      {/* Navigation */}
      <Navbar onOpenAppointment={handleOpenAppointment} />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 lg:pb-0">
        <Hero onOpenAppointment={handleOpenAppointment} />
        <ServicesSection onSelectService={handleSelectService} />
        <DoctorsSection onSelectDoctor={handleSelectDoctor} />
        <TechnologySection />
        <SmileAssessment onComplete={handleAssessmentComplete} />
        <BeforeAfterGallery onOpenAppointment={handleOpenAppointment} />
        <InsuranceCalculator onBook={handleOpenAppointment} />
        <ReviewsSection />
        <OfficeTourAndLocation onBook={handleOpenAppointment} />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onBook={handleOpenAppointment} />

      {/* Mobile Sticky Quick-Action Bar */}
      <StickyMobileBar onOpenAppointment={handleOpenAppointment} />

      {/* Interactive Appointment Scheduler Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preselectedDoctor={preselectedDoctor}
        preselectedService={preselectedService}
      />
    </div>
  );
}
