import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass =
    "rounded-xl px-4 py-2 text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-blue-700 hover:shadow-[0_8px_25px_rgba(59,130,246,0.25)]";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <div className="flex items-center gap-1.5">
          <img
            src={logo}
            alt="eLife IT Solutions Logo"
            className="h-12 w-auto object-contain"
          />

          <div className="text-sm font-bold leading-tight text-slate-900">
            eLife IT Solutions
            <div className="text-[10px] font-medium tracking-[0.2em] text-blue-700">
              IRELAND · CONSULTING
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-2 text-sm font-medium md:flex">
          <Link to="/" className={navLinkClass}>
            Home
          </Link>
          <Link to="/about" className={navLinkClass}>
            About Us
          </Link>
          <Link to="/services" className={navLinkClass}>
            Services
          </Link>
          <Link to="/careers" className={navLinkClass}>
            Careers
          </Link>
          <Link to="/contact" className={navLinkClass}>
            Contact
          </Link>
        </div>

        <Link
          to="/contact"
          className="mt-3 rounded-lg bg-blue-900 px-6 py-3 text-center text-sm font-semibold !text-white transition-all duration-300 hover:bg-blue-800"
        >
          Talk to an Expert
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg px-3 py-2 text-2xl text-slate-900 md:hidden"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium">
            <a href="#" className={navLinkClass}>Home</a>
            <a href="#" className={navLinkClass}>About Us</a>
            <a href="#" className={navLinkClass}>Services</a>
            <a href="#" className={navLinkClass}>Careers</a>
            <a href="#" className={navLinkClass}>Contact</a>

            <a
              href="/contact"
              className="mt-3 rounded-lg bg-blue-900 px-6 py-3 text-center text-sm font-semibold !text-white transition-all duration-300 hover:bg-blue-800"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;