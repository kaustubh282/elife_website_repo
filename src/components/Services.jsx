import {
  MonitorCog,
  ShieldCheck,
  Link2,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: MonitorCog,
    title: "MES Implementation",
    desc: "End-to-end Manufacturing Execution System implementation from strategy and design to deployment and post-go-live support.",
  },
  {
    icon: ShieldCheck,
    title: "CSV Consulting",
    desc: "Validation and compliance support including risk assessments, testing, qualification activities, and documentation services.",
  },
  {
    icon: Link2,
    title: "System Integration",
    desc: "Integration of Level 2, Level 3, and Level 4 systems to enable connected, data-driven manufacturing operations.",
  },
  {
    icon: GraduationCap,
    title: "Training & Vendor Support",
    desc: "Training programs and flexible resource support to strengthen teams, projects, and operational success.",
  },
];

function Services() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-30"></div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">

          {/* Left content */}
          <div>
            <p className="mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-sm font-semibold uppercase tracking-[0.2em] text-transparent">
              What We Do
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-slate-900">
              Core Services Driving Manufacturing Excellence
            </h2>

            <p className="text-lg leading-8 text-slate-600">
              eLife IT Solutions provides consulting, implementation,
              validation, integration, and training services that help life
              sciences manufacturers accelerate digital transformation while
              maintaining compliance and operational efficiency.
            </p>

            <a
              href="/services"
              className="mt-10 inline-flex rounded-lg bg-blue-900 px-8 py-4 text-sm font-semibold !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-[0_10px_30px_rgba(15,23,42,0.35)]"
            >
              Explore All Services
            </a>
          </div>

          {/* Cards */}
          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-blue-100 bg-blue-50/50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:bg-blue-50 hover:shadow-[0_12px_30px_rgba(59,130,246,0.15)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-all duration-300 group-hover:bg-blue-200">
                  <service.icon size={28} />
                </div>

                <h3 className="mb-3 text-xl font-semibold text-slate-900 transition-colors group-hover:text-blue-800">
                  {service.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Services;