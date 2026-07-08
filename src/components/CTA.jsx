function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24">
      
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl"></div>
      
      {/* Gradient Glow */}

      <div className="relative mx-auto max-w-4xl px-6 text-center">

        <p className="mb-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 bg-clip-text text-sm font-semibold uppercase tracking-[0.2em] text-transparent">
          Ready To Get Started?
        </p>

        <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
          Ready to advance your manufacturing systems?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300">
          Let's discuss your roadmap. Our team typically responds
          within one business day.
        </p>

        <a
          href="/contact"
          className="inline-flex rounded-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(34,197,94,0.35)]"
        >
          Get In Touch
        </a>

      </div>
    </section>
  );
}

export default CTA;