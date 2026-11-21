
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

  // Automatically open popup after every 15 seconds
 useEffect(() => {
  const timeout = setTimeout(() => {
    setIsPopupOpen(true);
  }, 15000);

  return () => clearTimeout(timeout);
}, []);

  return (
    <>
      <HeroCarousel onEnroll={() => setIsPopupOpen(true)} />

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
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}

export default HomePage;
