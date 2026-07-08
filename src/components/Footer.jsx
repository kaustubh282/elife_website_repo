import { FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    <div>
                        <div className="mb-5 flex items-center gap-1.5">
                            <img
                                src={logo}
                                alt="eLife IT Solutions Logo"
                                className="h-10 w-auto object-contain"
                            />

                            <h3 className="text-xl font-bold text-slate-900">
                                eLife IT Solutions
                            </h3>
                        </div>

                        <p className="max-w-sm text-sm leading-7 text-slate-600">
                            eLife IT Solutions provides MES consulting,
                            CSV services, system integration, training,
                            and digital transformation solutions for
                            regulated manufacturing industries.
                        </p>

                        <div className="mt-8 flex gap-3">

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/frontwell-solutions-ireland/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A66C2] hover:text-[#0A66C2] hover:shadow-[0_8px_25px_rgba(10,102,194,0.35)]"
                            >
                                <FaLinkedinIn size={18} />
                            </a>

                            {/* X / Twitter */}
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:text-black hover:shadow-[0_8px_25px_rgba(0,0,0,0.35)]"
                            >
                                <FaXTwitter size={18} />
                            </a>

                            {/* Instagram */}
                            <a
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-pink-500 hover:text-pink-600 hover:shadow-[0_8px_25px_rgba(225,48,108,0.35)]"
                            >
                                <FaInstagram size={18} />
                            </a>

                        </div>
                    </div>

                    <div>
                        <h4 className="mb-5 text-sm font-bold uppercase tracking-wide text-slate-900">
                            Company
                        </h4>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/services"
                                    className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent transition-all duration-300 hover:-translate-y-1"
                                >
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/careers"
                                    className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Careers
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/privacy-policy"
                                    className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-5 text-sm font-bold uppercase tracking-wide text-slate-900">
                            Services
                        </h4>

                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/services#mes"
                                    className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent transition-all duration-300 hover:-translate-y-1"
                                >
                                    MES Implementation Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/services#csv"
                                    className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent transition-all duration-300 hover:-translate-y-1"
                                >
                                    CSV Consulting
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/services#integration"
                                    className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent transition-all duration-300 hover:-translate-y-1"
                                >
                                    System Integration
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/services#training"
                                    className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent transition-all duration-300 hover:-translate-y-1"
                                >
                                    Training & Support
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/services#vendor"
                                    className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent transition-all duration-300 hover:-translate-y-1"
                                >
                                    Third-Party Vendor Services
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-5 text-sm font-bold uppercase tracking-wide text-slate-900">
                            Contact
                        </h4>

                        <ul className="space-y-4 text-slate-600">
                            <li>
                                Pennycress, Sandwood
                                <br />
                                Portlaoise, Co. Laois
                                <br />
                                Ireland
                            </li>

                            <li>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@elifeitsolutions.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors duration-300 hover:text-blue-700"
                                >
                                    sales@elifeitsolutions.com
                                </a>
                            </li>

                            <li>
                                <a
                                    href="tel:+353894354361"
                                    className="transition-colors duration-300 hover:text-blue-700"
                                >
                                    +353 894354361
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">

                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                        © 2026 eLife IT Solutions
                        <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                    </span>

                    <div className="flex flex-wrap gap-4">

                        <Link
                            to="/privacy-policy"
                            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(239,68,68,0.25)]"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
                            </span>
                            Privacy Policy
                        </Link>

                        <span className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                            Registered in Ireland
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
                        </span>

                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;