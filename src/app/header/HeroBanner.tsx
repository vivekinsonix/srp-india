export default function HeroSection() {
  return (
    <section className="relative bg-slate-900 text-white z-0 h-80vh border-teal-600 md:border-b-16 py-10 shadow-2xl lg:rounded-b-[45%]">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center  z-0 rounded-b-[40%]"
        style={{ backgroundImage: "url('/hero-bg-new.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/70 z-0 rounded-b-[40%]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-24">
      <div className=" grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Not just loads — <span className="text-teal-400">we deliver careers & impact across industries</span>
          </h1>
          <p className="mt-5 text-slate-200">
            US trucking & brokerage backbone operated from Mohali. We hire experienced BPO/logistics talent and continue to amplify our success for processes outside logistics and supply chain under the aegis of our founder, <strong> Mr. Rajwinder Singh Boparai</strong>.
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
   
        </div>
        <div className="rounded-2xl  bg-gradient-to-br from-teal-400 to-teal-800 p-6 shadow-2xl min-h-[280px] flex items-center justify-center text-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-teal-200">AI-enabled process improvements</p>
            <h3 className="mt-2 text-xl ">
             Check now if your business process qualifies for our newly launched <strong>Automation-first BPO operations that use AI + Human Hybrid Models</strong>
            </h3>
            <p className="mt-3 text-teal-200"> logistics, Healthcare, Retail, Legal and Compliance</p>
          </div>
        </div>

      </div>
              <div className="relative mx-auto max-w-7xl px-4 py-16 grid md:grid-cols-1  gap-12 items-center">
             <div className="mt-10 grid grid-col-3 lg:grid-cols-4 grid-col-2 gap-6 text-center md:text-left">
            <div className="rounded-2xl bg-slate-800/60 p-4 text-center">
              <div className="text-2xl font-bold">80000+</div>
              <div className="text-xs text-slate-300">Carrier support to deliver loads
round-the-clock</div>
            </div>
            <div className="rounded-2xl bg-slate-800/60 p-4 text-center">
              <div className="text-2xl font-bold">32500+</div>
              <div className="text-xs text-slate-300">Logistics managed with utmost care and affection</div>
            </div>
            <div className="rounded-2xl bg-slate-800/60 p-4 text-center">
              <div className="text-2xl font-bold">550+</div>
              <div className="text-xs text-slate-300">Team strength to ensure 100% customer satisfaction</div>
            </div>
               <div className="rounded-2xl bg-slate-800/60 p-4 text-center">
              <div className="text-2xl font-bold">99%</div>
              <div className="text-xs text-slate-300">Timely performance to upscale our services continuously</div>
            </div>
          </div>
        </div>
</div>
    </section>
  );
}
