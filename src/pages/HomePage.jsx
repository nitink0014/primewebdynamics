
import { useEffect, useState } from "react";

import HeroCarousel from "../components/home/HeroCarousel";
import StatsSection from "../components/home/StatsSection";
import ChooseUs from "../components/home/ChooseUs";
import CoursesSection from "../components/home/CoursesSection";
import FeaturesSection from "../components/home/FeaturesSection";
import LiveClassesSection from "../components/home/LiveClassesSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import CareerDevelopment from "../components/home/CareerDevelopment";
import LearningOutcome from "../components/home/LearningOutcome";
import LearningApproach from "../components/home/LearningApproach";
import EnquirySection from "../components/home/EnquirySection";
import BlogsSection from "../components/home/BlogsSection";
import FAQSection from "../components/home/FAQSection";
import CareerContactSection from "../components/home/CareerContactSection";
import CareerCta from "../components/home/CareerCta";
import AutoPopupForm from "../components/home/AutoPopupForm";

function HomePage() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Open enquiry popup once after 15 seconds
  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setIsPopupOpen(true);
    }, 15000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <HeroCarousel onEnroll={openPopup} />

      <StatsSection />
      <ChooseUs />
      <CoursesSection />
      <FeaturesSection />
      <LiveClassesSection />
      <HowItWorksSection />
      <CareerDevelopment />
      <LearningOutcome />
      <LearningApproach />
      <EnquirySection />
      <BlogsSection />
      <FAQSection />
      <CareerContactSection />
      <CareerCta />

      <AutoPopupForm
        isOpen={isPopupOpen}
        onClose={closePopup}
      />
    </>
  );
}

export default HomePage;
