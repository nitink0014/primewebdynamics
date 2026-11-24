
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setOthersOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `relative whitespace-nowrap py-2 text-[14px] font-semibold transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:bg-[#f47b43] after:transition-all after:duration-300 ${
      isActive
        ? "text-[#1765c0] after:w-full"
        : "text-[#596579] after:w-0 hover:text-[#1765c0] hover:after:w-full"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `flex items-center rounded-xl px-4 py-3 text-[15px] font-semibold transition-colors duration-200 ${
      isActive
        ? "bg-blue-50 text-[#1765c0]"
        : "text-[#475569] hover:bg-blue-50 hover:text-[#1765c0]"
    }`;

  const dropdownLinkClass =
    "group flex items-center justify-between rounded-xl px-4 py-3 text-[14px] font-semibold text-[#596579] transition-colors duration-200 hover:bg-[#edf5ff] hover:text-[#1765c0]";

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 shadow-[0_3px_15px_rgba(15,35,75,0.04)] backdrop-blur-xl">

      <div className="mx-auto flex min-h-[76px] w-full max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-[5%]">

        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center"
        >
          <img
            src="/PrimeWebdynamicsLogo.png"
            alt="Prime Webdynamics"
            className="h-12 w-auto object-contain sm:h-[58px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 xl:flex 2xl:gap-8">

          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/courses" className={navLinkClass}>
            Courses
          </NavLink>

          <NavLink to="/registration" className={navLinkClass}>
            Registration
          </NavLink>

          <NavLink to="/career-guidance" className={navLinkClass}>
            Career Guidance
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact Us
          </NavLink>

          {/* Others Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOthersOpen(true)}
            onMouseLeave={() => setOthersOpen(false)}
          >
            <button
              type="button"
              onClick={() => setOthersOpen((current) => !current)}
              aria-expanded={othersOpen}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 py-2 text-[14px] font-semibold transition-colors duration-200 ${
                othersOpen
                  ? "text-[#1765c0]"
                  : "text-[#596579] hover:text-[#1765c0]"
              }`}
            >
              Others

              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  othersOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {othersOpen && (
              <div className="absolute right-0 top-full z-50 w-56 pt-3">
                <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_15px_40px_rgba(15,35,75,0.13)]">

                  <Link
                    to="/about"
                    onClick={closeMenu}
                    className={dropdownLinkClass}
                  >
                    <span>About Us</span>
                    <ArrowUpRight
                      size={16}
                      className="text-slate-400 transition-colors duration-200 group-hover:text-[#f47b43]"
                    />
                  </Link>

                  <Link
                    to="/blogs"
                    onClick={closeMenu}
                    className={dropdownLinkClass}
                  >
                    <span>Blogs</span>
                    <ArrowUpRight
                      size={16}
                      className="text-slate-400 transition-colors duration-200 group-hover:text-[#f47b43]"
                    />
                  </Link>

                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => {
            setIsOpen((current) => !current);
            setOthersOpen(false);
          }}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 xl:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-slate-100 bg-white px-5 py-4 shadow-lg xl:hidden sm:px-8"
        >
          <div className="mx-auto flex max-w-[1500px] flex-col gap-1">

            <NavLink to="/" end onClick={closeMenu} className={mobileLinkClass}>
              Home
            </NavLink>

            <NavLink to="/courses" onClick={closeMenu} className={mobileLinkClass}>
              Courses
            </NavLink>

            <NavLink to="/registration" onClick={closeMenu} className={mobileLinkClass}>
              Registration
            </NavLink>

            <NavLink to="/career-guidance" onClick={closeMenu} className={mobileLinkClass}>
              Career Guidance
            </NavLink>

            <NavLink to="/contact" onClick={closeMenu} className={mobileLinkClass}>
              Contact Us
            </NavLink>

            {/* Mobile Others */}
            <button
              type="button"
              onClick={() => setOthersOpen((current) => !current)}
              aria-expanded={othersOpen}
              className="flex items-center justify-between rounded-xl px-4 py-3 text-left text-[15px] font-semibold text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              Others

              <ChevronDown
                size={17}
                className={`transition-transform duration-200 ${
                  othersOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {othersOpen && (
              <div className="ml-4 space-y-1 border-l-2 border-blue-100 py-1 pl-3">

                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="group flex items-center justify-between rounded-lg px-4 py-3 text-[14px] font-semibold text-[#596579] transition-colors duration-200 hover:bg-[#edf5ff] hover:text-[#1765c0]"
                >
                  About Us
                  <ArrowUpRight size={15} className="text-slate-400 group-hover:text-[#f47b43]" />
                </Link>

                <Link
                  to="/blogs"
                  onClick={closeMenu}
                  className="group flex items-center justify-between rounded-lg px-4 py-3 text-[14px] font-semibold text-[#596579] transition-colors duration-200 hover:bg-[#edf5ff] hover:text-[#1765c0]"
                >
                  Blogs
                  <ArrowUpRight size={15} className="text-slate-400 group-hover:text-[#f47b43]" />
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
