
import { useEffect, useState } from "react";

import HeroCarousel from "../components/home/HeroCarousel";
import StatsSection from "../components/home/StatsSection";
import CompaniesSection from "../components/home/CompaniesSection";
import CoursesSection from "../components/home/CoursesSection";
import FeaturesSection from "../components/home/FeaturesSection";
import LiveClassesSection from "../components/home/LiveClassesSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import SuccessStoriesSection from "../components/home/SuccessStoriesSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CareerTestimonialsSection from "../components/home/CareerTestimonialsSection";
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
      <CompaniesSection />
      <CoursesSection />
      <FeaturesSection />
      <LiveClassesSection />
      <HowItWorksSection />
      <SuccessStoriesSection />
      <TestimonialsSection />
      <CareerTestimonialsSection />
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
