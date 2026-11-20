
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
    setOthersOpen(false);
  };

  const navLinkClass = ({ isActive }) =>
    `whitespace-nowrap text-[18px] font-normal transition-colors duration-200 ${
      isActive
        ? "text-[#087bff]"
        : "text-[#777777] hover:text-[#1760a4]"
    }`;

  const dropdownButtonClass =
    "flex items-center gap-2 whitespace-nowrap text-[18px] font-normal text-[#777777] transition hover:text-[#1760a4]";

  const dropdownMenuClass =
    "absolute right-0 top-full z-50 w-48 rounded-md border border-gray-100 bg-white py-2 shadow-lg";

  return (
    <nav className="sticky top-0 z-50 w-full bg-white">

      <div className="mx-auto flex min-h-[78px] items-center justify-between px-[4%]">

      
{/* Primewebdynamics Logo */}
{/* Primewebdynamics Logo */}
<Link
  to="/"
  onClick={closeMenu}
  className="flex shrink-0 items-center"
>
  <img
    src="/PrimeWebdynamicsLogo.png"
    alt="Primeweb Dynamics"
    className="h-14 w-auto object-contain sm:h-16"
  />
</Link>


        {/* Desktop Navigation */}
        <div className="hidden items-center gap-[25px] xl:flex">

          {/* Home */}
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          {/* Courses - Direct Navigation */}
          <NavLink to="/courses" className={navLinkClass}>
            Courses
          </NavLink>

          {/* Registration */}
          <NavLink to="/registration" className={navLinkClass}>
            Registration
          </NavLink>

          {/* Career Guidance */}
          <div className="relative flex items-center gap-2">

           <NavLink
  to="/career-guidance"
  className={navLinkClass}
>
  Career Guidance
</NavLink>

          </div>

          {/* Contact Us */}
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
              onClick={() => setOthersOpen(!othersOpen)}
              aria-expanded={othersOpen}
              className={dropdownButtonClass}
            >
              Others

              <span
                className={`text-[12px] transition-transform ${
                  othersOpen ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>

            {othersOpen && (
              <div className={dropdownMenuClass}>

                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  About Us
                </Link>

                <Link
                  to="/blogs"
                  onClick={closeMenu}
                  className="block px-4 py-3 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                >
                  Blogs
                </Link>

              </div>
            )}
          </div>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-700 xl:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-4 shadow-md xl:hidden">

          <div className="flex flex-col gap-1">

            {/* Home */}
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-[16px] ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-blue-50"
                }`
              }
            >
              Home
            </NavLink>

            {/* Mobile Courses - Direct Navigation */}
            <NavLink
              to="/courses"
              onClick={closeMenu}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 text-[16px] ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-blue-50"
                }`
              }
            >
              Courses
            </NavLink>

            {/* Registration */}
            <NavLink
              to="/registration"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-[16px] text-gray-700 hover:bg-blue-50"
            >
              Registration
            </NavLink>

            {/* Career Guidance */}
           <NavLink
  to="/career-guidance"
  onClick={closeMenu}
  className={({ isActive }) =>
    `rounded-lg px-4 py-3 text-[16px] transition-colors duration-200 ${
      isActive
        ? "bg-blue-50 text-blue-600"
        : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
    }`
  }
>
  Career Guidance
</NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className="rounded-lg px-4 py-3 text-[16px] text-gray-700 hover:bg-blue-50"
            >
              Contact Us
            </NavLink>

            {/* Mobile Others */}
            <button
              type="button"
              onClick={() => setOthersOpen(!othersOpen)}
              className="flex justify-between rounded-lg px-4 py-3 text-left text-gray-700 hover:bg-blue-50"
            >
              Others
              <span>{othersOpen ? "▲" : "▼"}</span>
            </button>

            {othersOpen && (
              <div className="ml-5 border-l-2 border-blue-500 pl-3">

                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="block px-3 py-3 text-sm text-gray-600 hover:text-blue-600"
                >
                  About Us
                </Link>

                <Link
                  to="/blogs"
                  onClick={closeMenu}
                  className="block px-3 py-3 text-sm text-gray-600 hover:text-blue-600"
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
