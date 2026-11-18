
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Registration", path: "/registration" },
    { name: "Career Guidance", path: "/career-guidance" },
    { name: "Contact Us", path: "/contact" },
  ];

  const closeMenu = () => {
    setIsOpen(false);
    setOthersOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-extrabold tracking-tight text-blue-700"
        >
          Prime<span className="text-slate-800">web</span>
          <span className="text-blue-500">dynamics</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-semibold text-slate-700 transition hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}

          {/* Others Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOthersOpen(!othersOpen)}
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-blue-600"
              aria-expanded={othersOpen}
            >
              Others
              <span
                className={`transition-transform ${
                  othersOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {othersOpen && (
              <div className="absolute right-0 top-10 w-48 rounded-lg border border-slate-100 bg-white py-2 shadow-xl">
                <Link
                  to="/about"
                  onClick={() => setOthersOpen(false)}
                  className="block px-5 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  About Us
                </Link>

                <Link
                  to="/blogs"
                  onClick={() => setOthersOpen(false)}
                  className="block px-5 py-3 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Blogs
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-slate-800 lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              >
                {link.name}
              </Link>
            ))}

            <button
              onClick={() => setOthersOpen(!othersOpen)}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-left font-medium text-slate-700 hover:bg-blue-50"
            >
              Others
              <span>{othersOpen ? "▲" : "▼"}</span>
            </button>

            {othersOpen && (
              <div className="ml-4 border-l-2 border-blue-500 pl-3">
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="block px-3 py-3 text-sm text-slate-600 hover:text-blue-600"
                >
                  About Us
                </Link>

                <Link
                  to="/blogs"
                  onClick={closeMenu}
                  className="block px-3 py-3 text-sm text-slate-600 hover:text-blue-600"
                >
                  Blogs
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
