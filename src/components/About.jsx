import {
    MonitorCog,
    TrendingUp,
    ShieldCheck,
    Globe,
} from "lucide-react";

function About() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* Left Side */}
                    <div>
                        <p className="mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-sm font-semibold uppercase tracking-[0.2em] text-transparent">
                            About eLife IT Solutions
                        </p>

                        <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-900">
                            Driving digital transformation for life sciences manufacturing.
                        </h2>

                        <p className="text-lg leading-8 text-slate-600">
                            eLife IT Solutions is a consulting and project delivery partner
                            specializing in Manufacturing Execution Systems (MES), manufacturing
                            digitalisation, and system integration for the Life Sciences industry.
                            <br />
                            <br />
                            Based in Cork, Ireland, we help organizations build smarter,
                            compliant, and future-ready manufacturing operations.
                        </p>

                        <a
                            href="/about"
                            className="mt-8 inline-flex rounded-lg bg-blue-900 px-8 py-4 text-sm font-semibold !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-[0_10px_30px_rgba(15,23,42,0.35)]"
                        >
                            Learn More About Us
                        </a>
                    </div>

                    {/* Right Side */}
                    <div className="grid gap-6 sm:grid-cols-2">

                        <div className="group rounded-2xl border border-blue-100 bg-blue-50/50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-blue-50 hover:shadow-[0_12px_30px_rgba(59,130,246,0.15)]">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                                <MonitorCog size={28} />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-800">
                                MES Expertise
                            </h3>
                            <p className="text-slate-600">
                                Deep expertise in Manufacturing Execution Systems supporting
                                life sciences and regulated manufacturing environments.
                            </p>
                        </div>

                        <div className="group rounded-2xl border border-blue-100 bg-blue-50/50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-blue-50 hover:shadow-[0_12px_30px_rgba(59,130,246,0.15)]">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-200">
                                <TrendingUp size={28} />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-800">
                                Digital Transformation
                            </h3>
                            <p className="text-slate-600">
                                Helping organizations build practical roadmaps for
                                manufacturing digitalisation and operational excellence.
                            </p>
                        </div>

                        <div className="group rounded-2xl border border-blue-100 bg-blue-50/50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-blue-50 hover:shadow-[0_12px_30px_rgba(59,130,246,0.15)]">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-200">
                                <ShieldCheck size={28} />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-800">
                                Compliance-Driven Delivery
                            </h3>
                            <p className="text-slate-600">
                                Focused on validation, compliance, and industry best
                                practices for successful project execution.
                            </p>
                        </div>

                        <div className="group rounded-2xl border border-blue-100 bg-blue-50/50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-blue-50 hover:shadow-[0_12px_30px_rgba(59,130,246,0.15)]">
                            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-200">
                                <Globe size={28} />
                            </div>
                            <h3 className="mb-3 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-800">
                                Global Consulting Reach
                            </h3>
                            <p className="text-slate-600">
                                Based in Cork, Ireland and supporting customers across
                                international manufacturing and life sciences markets.
                            </p>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;