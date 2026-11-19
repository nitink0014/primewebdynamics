
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CounsellingModal from "./components/CounsellingModal";

import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import CareerGuidance from "./pages/CareerGuidance";
import Courses from "./pages/Courses";
import HomePage from "./pages/HomePage";

function App() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(false);

    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const isCareerPage = location.pathname === "/career-guidance";

  const courses = [
    "Full Stack Development",
    "MERN Stack Development",
    "Java Programming",
    "Python Programming",
    "Data Analytics",
    "Data Science",
  ];

  const branches = [
    "Noida",
    "Delhi",
    "Gurugram",
    "Ghaziabad",
    "Dehradun",
  ];

  const handleCounsellingSubmit = (formData) => {
    console.log("Counselling Form Data:", formData);
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/career-guidance" element={<CareerGuidance />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>

      {!isCareerPage && <Footer />}

      <CounsellingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCounsellingSubmit}
        courses={courses}
        branches={branches}
      />
    </>
  );
}

export default App;
