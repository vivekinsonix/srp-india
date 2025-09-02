export default function HeroSection() {
  return (
    <section className="relative bg-slate-900 text-white z-0 h-80vh border-teal-600 md:border-b-16 py-10  md:rounded-b-[50%]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center  z-0 rounded-b-[50%]"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/90 z-0 rounded-b-[50%]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Not just loads — <span className="text-teal-400">we deliver careers & impact</span>
          </h1>
          <p className="mt-5 text-slate-200">
            US trucking & brokerage backbone operated from Mohali. We hire experienced BPO/logistics talent and
            amplify the story of our founder, <strong>Mr. Rajwinder Singh Boparai</strong>.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#careers" className="rounded-xl bg-teal-600 px-4 py-2 font-semibold">
              View Openings
            </a>
            <a href="#founder" className="rounded-xl border border-white/20 px-4 py-2">
              Founder Spotlight
            </a>
          </div>
          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-center md:text-left">
            <div className="rounded-2xl bg-slate-800/60 p-4 text-center">
              <div className="text-2xl font-bold">80k+</div>
              <div className="text-xs text-slate-300">Carrier support to deliver loads
round-the-clock</div>
            </div>
            <div className="rounded-2xl bg-slate-800/60 p-4 text-center">
              <div className="text-2xl font-bold">32k+</div>
              <div className="text-xs text-slate-300">Logistics managed with utmost care and affection</div>
            </div>
            <div className="rounded-2xl bg-slate-800/60 p-4 text-center">
              <div className="text-2xl font-bold">550+</div>
              <div className="text-xs text-slate-300">STeam strength to ensure 100% customer satisfaction</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl  bg-gradient-to-br from-teal-400 to-teal-800 p-6 shadow-2xl min-h-[280px] flex items-center justify-center text-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-teal-300">India Ops</p>
            <h3 className="mt-2 text-xl font-semibold">
              Freight Brokerage • US Accounting • IT/Admin • HR/Payroll
            </h3>
            <p className="mt-3 text-slate-300">Built on Zoho One, RingCentral, Turvo, DAT.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
