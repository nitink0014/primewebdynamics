
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Registration from "./pages/Registration";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import CareerGuidance from "./pages/CareerGuidance";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/career-guidance" element={<CareerGuidance />} />
      </Routes>
    </>
  );
}

export default App;
