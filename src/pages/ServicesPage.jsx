import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import mesImg from "../assets/images/service/mes.jpg";
import integrationImg from "../assets/images/service/integration.jpg";

import csvImg from "../assets/images/service/csv.png";
import trainingImg from "../assets/images/service/training.png";
import vendorImg from "../assets/images/service/vendor.png";

const services = [
    {
        id: "mes",
        image: mesImg,
        title: "Manufacturing Execution Systems (MES)",
        imageLabel: "MES / Manufacturing Visual",
        description:
            "We support end-to-end MES implementation programs, helping manufacturers define business requirements, perform vendor evaluations, execute FIT-GAP assessments, design recipes and master batch records, manage master data, support testing, and transition successfully through go-live and post-implementation phases.",
        points: [
            "Business Process Analysis",
            "Vendor Selection Support",
            "Support to FIT-GAP Analysis",
            "MBR / ESP / GMBR Recipe Designing & Qualification",
            "Support to Global Rollout & Harmonization",
            "MBR Template / Library Designing",
            "Master Data Management",
            "Pre-Testing Support",
            "Go-Live & Hypercare Support",
            "Post-Implementation Support",
            "Migration Support",
        ],
    },

    {
        id: "csv",
        image: csvImg,
        title: "Computer System Validation (CSV)",
        imageLabel: "CSV / Compliance Visual",
        description:
            "Our CSV consulting services help organizations maintain compliance and quality throughout the system lifecycle. We support validation planning, documentation, risk assessments, testing, and execution activities aligned with industry expectations.",
        points: [
            "URS Support",
            "FS Support",
            "FAT Support",
            "SAT Support",
            "IQ Support",
            "OQ Support",
            "PQ Support",
            "Test Specification",
            "Functional Risk Impact Assessment",
            "Test Execution",
        ],
    },

    {
        id: "integration",
        image: integrationImg,
        title: "System Integration Services",
        imageLabel: "Integration / Automation Visual",
        description:
            "We help organizations connect manufacturing systems across different operational levels, ensuring reliable data flow and improved visibility throughout production processes.",
        points: [
            "Level 2 Integration Support",
            "Level 3 Integration Support",
            "Level 4 Integration Support",
            "Manufacturing Data Flow",
            "Level 2 MBR Designing",
        ],
    },

    {
        id: "training",
        image: trainingImg,
        title: "Training & Operational Support",
        imageLabel: "Training / Shop Floor Visual",
        description:
            "We provide structured training programs that enable teams to confidently manage MES environments, master data, system administration activities, and manufacturing operations.",
        points: [
            "MBR / Recipe Designing",
            "Master Data Management",
            "System Administration",
            "Level 2 Integration with MES",
            "Shop Floor Resource Training",
        ],
    },

    {
        id: "vendor",
        image: vendorImg,
        title: "Third-Party Vendor & Resource Support",
        imageLabel: "Vendor / Resource Support Visual",
        description:
            "We support organizations with flexible staffing and specialist resource solutions for short-term projects, contract engagements, and long-term delivery initiatives.",
        points: [
            "Employment Agency Support",
            "Contract Role Support",
            "Short-Term Project Support",
            "Time & Material Support",
        ],
    },
];

function ServicesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero */}
            <section className="relative overflow-hidden bg-slate-50 py-24">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-30"></div>

                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-4xl">
                        <p className="mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-sm font-semibold uppercase tracking-[0.2em] text-transparent">
                            Services
                        </p>

                        <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                            Services that support{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                                manufacturing excellence.
                            </span>
                        </h1>

                        <p className="max-w-3xl text-lg leading-8 text-slate-600">
                            From MES implementation and validation support to integration,
                            training, and specialist staffing, we help Life Sciences
                            organizations deliver digital transformation initiatives with
                            confidence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="space-y-24">
                        {services.map((service, index) => {
                            const reverse = index % 2 !== 0;

                            return (
                                <div
                                    key={service.title}
                                    id={service.id}
                                    className="scroll-mt-28 grid items-center gap-12 lg:grid-cols-2"
                                >
                                    <div className={reverse ? "lg:order-2" : ""}>
                                        <p className="mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-sm font-semibold uppercase tracking-[0.2em] text-transparent">
                                            {String(index + 1).padStart(2, "0")}/05
                                        </p>

                                        <h2 className="mb-5 text-3xl font-bold leading-tight text-slate-900 md:text-4xl">
                                            {service.title}
                                        </h2>

                                        <p className="mb-8 text-lg leading-8 text-slate-600">
                                            {service.description}
                                        </p>

                                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                            {service.points.map((point) => (
                                                <div
                                                    key={point}
                                                    className="rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-800 hover:shadow-[0_10px_25px_rgba(59,130,246,0.12)]"
                                                >
                                                    {point}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className={reverse ? "lg:order-1" : ""}>
                                        <div className="relative">
                                            <div className="absolute -inset-6 rounded-3xl bg-blue-500/10 blur-3xl"></div>

                                            <img
                                                src={service.image}
                                                alt={service.title}
                                                className="relative h-[360px] w-full rounded-2xl object-cover shadow-xl transition-all duration-500 hover:scale-[1.02]"
                                            />

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-slate-900 py-24">

                <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
                    <p className="mb-4 bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-300 bg-clip-text text-sm font-semibold uppercase tracking-[0.2em] text-transparent">
                        Request Support
                    </p>

                    <h2 className="mb-6 text-4xl font-bold !text-white md:text-5xl">
                        Have a system, a deadline, and a compliance brief?
                    </h2>

                    <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-slate-300">
                        We can scope a tailored engagement — fixed-bid, T&amp;M or managed
                        service.
                    </p>

                    <a
                        href="/contact"
                        className="inline-flex rounded-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,197,94,0.35)]"
                    >
                        Request a Proposal
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default ServicesPage;