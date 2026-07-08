import Navbar from "../components/Navbar";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import aboutImage from "../assets/images/about-team.jpg";

const values = [
    {
        title: "Outcome-Focused Delivery",
        desc: "We measure success by the operational, compliance, and digital transformation outcomes we help our customers achieve.",
    },
    {
        title: "Practical MES Expertise",
        desc: "Our consulting is grounded in real MES, Level 2, Level 3, and Level 4 implementation experience across regulated manufacturing.",
    },
    {
        title: "Quality Without Compromise",
        desc: "We support structured, compliant delivery with strong focus on validation, documentation, and long-term system reliability.",
    },
    {
        title: "Ireland-Based, Global Mindset",
        desc: "Headquartered in Ireland, we support customers locally while building capabilities to serve manufacturing organizations globally.",
    },
];

function AboutPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            {/* Section 1: About Us */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid items-center gap-14 lg:grid-cols-2">
                        <div>
                            <p className="mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-sm font-semibold uppercase tracking-[0.2em] text-transparent">
                                About Us
                            </p>

                            <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
                                Helping manufacturers turn{" "}
                                <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                                    digital transformation
                                </span>{" "}
                                into real operational progress.
                            </h1>

                            <p className="text-lg leading-8 text-slate-600">
                                eLife IT Solutions is a professional consulting and project
                                delivery firm supporting manufacturing digitalisation across
                                the Life Sciences industry.
                                <br />
                                <br />
                                We offer consulting services with a core focus on Manufacturing
                                Execution Systems (MES), Level 2 and Level 4 system integration,
                                and manufacturing IT initiatives that help organizations define
                                the right strategy and execute with confidence.
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-6 rounded-3xl bg-blue-500/10 blur-3xl"></div>

                            <img
                                src={aboutImage}
                                alt="eLife IT Solutions consulting team"
                                className="relative h-[420px] w-full rounded-2xl object-cover shadow-xl transition-all duration-500 hover:scale-[1.02]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Mission */}
            <section className="relative overflow-hidden bg-slate-50 py-24">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-30"></div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-sm font-semibold uppercase tracking-[0.2em] text-transparent">
                            Our Mission
                        </p>

                        <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-900">
                            Enabling factories of the future through smart, compliant, and scalable systems.
                        </h2>

                        <p className="text-lg leading-8 text-slate-600">
                            Our mission is to help customers achieve their digital
                            transformation goals by solving real manufacturing problems,
                            implementing smart systems, and supporting successful MES and
                            integration programs from strategy through delivery.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 3: Values */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mb-14 max-w-3xl">
                        <p className="mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-sm font-semibold uppercase tracking-[0.2em] text-transparent">
                            Our Values
                        </p>

                        <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-900">
                            What we stand for.
                        </h2>

                        <p className="text-lg leading-8 text-slate-600">
                            Our work is shaped by practical experience, responsible delivery,
                            and a strong commitment to helping customers build better
                            manufacturing operations.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="group rounded-2xl border border-blue-100 bg-blue-50/50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-blue-50 hover:shadow-[0_12px_30px_rgba(59,130,246,0.15)]"
                            >
                                <h3 className="mb-3 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-800">
                                    {value.title}
                                </h3>

                                <p className="leading-7 text-slate-600">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 4: CTA */}
            <section className="bg-slate-900 py-24">
                <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

                    <p className="mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-sm font-semibold uppercase tracking-[0.2em] text-transparent">
                        Start a Conversation
                    </p>

                    <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
                        Let's talk about your next programme.
                    </h2>

                    <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-300">
                        Whether you're scoping an MES upgrade, planning a CSV remediation,
                        or building a long-term digital roadmap — we'd like to hear from you.
                    </p>

                    <a
                        href="/contact"
                        className="inline-flex rounded-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,197,94,0.35)]"
                    >
                        Contact Our Team
                    </a>

                </div>
            </section>

            {/* Section 5: Footer */}
            <Footer />
        </main>
    );
}

export default AboutPage;