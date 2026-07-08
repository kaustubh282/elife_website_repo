import mesHero from "../assets/images/mes-hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      <div className="absolute inset-0 -z-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:48px_48px] opacity-40"></div>
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          <div>
            <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm transition-all duration-300 hover:shadow-[0_8px_20px_rgba(34,197,94,0.18)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>

              <p className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-sm font-semibold tracking-[0.2em] text-transparent">
                eLife IT Solutions
              </p>
            </div>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Manufacturing Execution System{" "}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                (MES)
              </span>
            </h1>

            <p className="mb-8 text-lg text-slate-600">
              eLife IT Solutions is a professional consulting and project delivery firm supporting and executing manufacturing digitalisation for life sciences, pharmaceutical, and industrial organizations.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="rounded-lg bg-blue-900 px-8 py-4 text-center text-sm font-semibold !text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:shadow-[0_10px_30px_rgba(15,23,42,0.35)]"
              >
                Start a Conversation
              </Link>

              <Link
                to="/services"
                className="rounded-lg border border-slate-200 bg-white px-8 py-4 text-center text-sm font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:text-blue-700 hover:shadow-[0_8px_25px_rgba(59,130,246,0.25)]"
              >
                Explore Services
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -inset-6 rounded-3xl bg-blue-500/20 blur-3xl"></div>
            <img
              src={mesHero}
              alt="Manufacturing Execution System"
              className="relative h-[350px] w-full rounded-2xl object-cover shadow-xl lg:h-[500px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;