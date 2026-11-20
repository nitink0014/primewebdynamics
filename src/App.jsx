
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import CareerGuidance from "./pages/CareerGuidance";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";

import Reviews from "./pages/Reviews";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

function App() {
  const location = useLocation();

  const isCareerPage = location.pathname === "/career-guidance";

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/registration" element={<Registration />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/about" element={<About />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />

        <Route path="/career-guidance" element={<CareerGuidance />} />

        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetail />} />

        {/* Reviews Page */}
        <Route path="/reviews" element={<Reviews />} />

        {/* Policy Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route
          path="/terms-conditions"
          element={<TermsAndConditions />}
        />
      </Routes>

      {!isCareerPage && <Footer />}
    </>
  );
}

export default App;
