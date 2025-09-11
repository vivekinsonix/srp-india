'use client';
import { BarChart3, Bot, Building2, CheckCircle2, ChevronRight, Cpu, HeartPulse, Layers, MailCheck, MapPin, MonitorSmartphone, Package, Rocket, ShieldCheck, Shirt, ShoppingCart, Sparkles, Users } from 'lucide-react';
import { useState } from 'react';

export default function RetailPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      <Hero />
      <InPageNav />

      <main className="relative container mx-auto max-w-7xl px-4 py-10">
        <Intro />
        <Outcomes />
        <UnlockExcellence />
        <CoreCapabilities />
        <RetailInsights />
        <Contact id="connect-with-us" />
      </main>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-5 ">
      <div className="absolute inset-0 -z-10">
        <img src="/hero-bg.jpg" alt="Retail hero" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-slate/90 to-slate/90" />
      </div>
      <div className="mx-auto max-w-7xl  px-4 py-20 md:py-28 text-white">
        <p className="text-xs uppercase tracking-wider/loose opacity-80">Industries / Retail</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
          Smarter Retail Starts Here: <span className="text-teal-400">AI-powered, Omnichannel, Seamless</span>
        </h1>
        <p className="mt-4 max-w-2xl text-white/90">Create smooth, satisfying journeys across every channel, from first click to final purchase.</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#connect-with-us" className="rounded-xl bg-teal-600 px-4 py-2 font-semibold">
            Talk to us
          </a>
          <a href="#insights" className="rounded-xl border border-white/20 px-4 py-2">
            Explore Insights
          </a>
        </div>
      </div>
    </section>
  );
}

function InPageNav() {
  return (
    <div className="sticky top-20 z-30 bg-white border-b border-slate-200">
      <div className="container mx-auto max-w-7xl px-4 overflow-auto">
        <div className="flex md:gap-6 gap-3 py-3 text-sm">
          {[
            ['Overview', '#overview'],
            ['Offerings', '#offerings'],
            ['Insights', '#insights'],
            ['Contact', '#connect-with-us'],
          ].map(([label, href]) => (
            <a key={href} href={href as string} className="inline-flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-100 border border-transparent focus:border-slate-300">
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function Intro() {
  return (
    <section id="overview" className="container mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Smarter experiences. Agile operations. We make it happen for retail.</h2>
        <p className="text-slate-600">In today’s retail environment, delivering exceptional, personalized experiences is critical amidst rising costs and shrinking margins. We go beyond providing technology; we’re a strategic partner committed to measurable outcomes.</p>
        <p className="text-slate-600">With proven experience across grocery, apparel, and e‑commerce (strengthened by our Ascensos acquisition), we help create seamless omnichannel journeys. By harnessing GenAI and intelligent automation, you’ll stay agile and elevate every interaction.</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Pill icon={<ShieldCheck className="size-4" />} label="Trust & compliance" />
          <Pill icon={<Rocket className="size-4" />} label="Rapid time‑to‑value" />
          <Pill icon={<Sparkles className="size-4" />} label="GenAI‑powered" />
        </div>
      </div>
      <img src="https://images.unsplash.com/photo-1515169273898-87e1e54f579b?q=80&w=1400&auto=format&fit=crop" alt="Retail collage" className="rounded-3xl shadow-lg" />
    </section>
  );
}

function Outcomes() {
  const items = [
    {
      kpi: '80%',
      title: 'Drop in support call volumes',
      text: 'For a prominent US homecare retailer, AI-enabled multi-lingual CX increased CSAT and reduced support calls.',
    },
    {
      kpi: '5★',
      title: 'Peak demand handled',
      text: 'For a leading UK grocer we seamlessly managed peak demand and transition while enhancing customer experience.',
    },
    {
      kpi: '3 wks',
      title: 'Omnichannel & CRM in record time',
      text: 'Enabled a fashion retailer with scalable CX and CRM, cleared backlogs and improved performance metrics.',
    },
    {
      kpi: '86%',
      title: 'CSAT with fraud‑resistant CX',
      text: 'For a health & beauty retailer, we delivered high‑performance CX and fraud controls with excellent service.',
    },
  ];
  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h3 className="text-xl md:text-2xl font-semibold">Outcomes Delivered</h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:shadow-md">
              <div className="text-3xl font-bold tracking-tight">{it.kpi}</div>
              <div className="mt-2 font-semibold">{it.title}</div>
              <p className="mt-2 text-sm text-slate-600">{it.text}</p>
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:underline">
                Learn More <ChevronRight className="size-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UnlockExcellence() {
  const tabs = [
    { key: 'grocery', icon: <ShoppingCart className="size-4" />, label: 'Grocery' },
    { key: 'gm', icon: <Package className="size-4" />, label: 'General Merchandise' },
    { key: 'fashion', icon: <Shirt className="size-4" />, label: 'Fashion & Accessories' },
    { key: 'beauty', icon: <HeartPulse className="size-4" />, label: 'Health & Beauty' },
    { key: 'ecom', icon: <Building2 className="size-4" />, label: 'E‑commerce' },
    { key: 'electronics', icon: <MonitorSmartphone className="size-4" />, label: 'Electronics & Tech' },
  ] as const;
  const [active, setActive] = useState<(typeof tabs)[number]['key']>('grocery');

  const content: Record<string, { img: string; text: string }[]> = {
    grocery: [
      {
        img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop',
        text: 'Seamless lifecycle support—from bill payments to product inquiries, order tracking, and delivery resolution.',
      },
      {
        img: 'https://images.unsplash.com/photo-1586201375761-83865001e31b?q=80&w=1200&auto=format&fit=crop',
        text: 'GenAI-powered personalization and streamlined back‑office for accuracy and efficiency.',
      },
    ],
    gm: [
      {
        img: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=1200&auto=format&fit=crop',
        text: 'Personalized recommendations, targeted offers, and loyalty optimization across channels.',
      },
      {
        img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302a?q=80&w=1200&auto=format&fit=crop',
        text: 'Scalable digital-first service and optimized billing, CS, and collections for peak demand.',
      },
    ],
    fashion: [
      {
        img: 'https://images.unsplash.com/photo-1520975922214-9dca5c5318c7?q=80&w=1200&auto=format&fit=crop',
        text: 'Curated experiences with sizing guidance, returns/exchanges, and GenAI-led personalization.',
      },
      {
        img: 'https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1200&auto=format&fit=crop',
        text: 'Agile models for peak seasons; merchandising & inventory optimized for service quality.',
      },
    ],
    beauty: [
      {
        img: 'https://images.unsplash.com/photo-1505575972945-280ac89f71f9?q=80&w=1200&auto=format&fit=crop',
        text: 'Hyper-personalized experiences across web & in-store; accurate product and medical guidance.',
      },
      {
        img: 'https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1200&auto=format&fit=crop',
        text: 'Agile back-office for stocking, returns, and exchanges—build trust and loyalty.',
      },
    ],
    ecom: [
      {
        img: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop',
        text: 'Frictionless journeys from order to post‑sale support with dynamic personalization.',
      },
      {
        img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
        text: 'Seamless merchant onboarding and quality‑led models ensure scale & consistency.',
      },
    ],
    electronics: [
      {
        img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1200&auto=format&fit=crop',
        text: 'Resolve complex inquiries, troubleshooting, and warranty claims with precision.',
      },
      {
        img: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
        text: 'AI-powered recommendations & proactive support; streamlined returns and inventory.',
      },
    ],
  };

  return (
    <section id="offerings" className="container mx-auto px-4 py-12 md:py-16">
      <h3 className="text-xl md:text-2xl font-semibold">Unlock Retail Excellence with Firstsource Solutions</h3>
      <p className="mt-3 max-w-3xl text-slate-600">
        Our CX platforms, Agentic AI solutions, and flexible services, powered by <span className="font-semibold">relAI™</span>, transform the way you operate—elevating experience, efficiency, and effectiveness for real outcomes.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button key={t.key} onClick={() => setActive(t.key)} className={'inline-flex items-center gap-2 px-4 py-2 rounded-2xl border text-sm ' + (active === t.key ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-900 border-slate-200 hover:bg-slate-50')} aria-pressed={active === t.key}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {content[active].map((c, i) => (
          <div key={i} className="rounded-3xl overflow-hidden ring-1 ring-slate-200 bg-white shadow-sm">
            <img src={c.img} alt="Industry" className="h-56 w-full object-cover" />
            <div className="p-6 text-slate-700">{c.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CoreCapabilities() {
  const features = [
    {
      icon: <Users className="size-5" />,
      title: 'Exceptional customer experiences',
      text: 'Reimagine omni-channel journeys—recruitment, field immersion, brand alignment, feedback loops, and measurable outcomes. Multilingual + AI insights for precision and empathy.',
    },
    {
      icon: <Cpu className="size-5" />,
      title: 'Digital transformation',
      text: 'Advanced technologies and analytics delivering integrated digital, predictive, and autonomous CX. GenAI transforms aftercare and field visits for high‑value products.',
    },
    {
      icon: <Layers className="size-5" />,
      title: 'Supplier management solutions',
      text: 'E2E coverage from customers to suppliers—verification, onboarding with cultural immersion, segmentation, and governance to reduce complaints.',
    },
    {
      icon: <Rocket className="size-5" />,
      title: 'Peak support & capacity',
      text: 'Decades of contact center expertise for rapid results—especially during high‑demand periods.',
    },
    {
      icon: <BarChart3 className="size-5" />,
      title: 'Customer insights & analytics',
      text: 'Audience-led analytics + modern data to create intelligent insights, collaboratively improving outcomes.',
    },
    {
      icon: <Bot className="size-5" />,
      title: 'Business agility with AI-enabled working',
      text: 'Embed AI across the agent lifecycle—from hiring to performance—with co‑pilot support for agility and efficiency.',
    },
  ];

  return (
    <section className="bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <h3 className="text-xl md:text-2xl font-semibold">Core Capabilities</h3>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
              <div className="inline-flex items-center justify-center rounded-2xl bg-slate-900 text-white p-2">{f.icon}</div>
              <h4 className="mt-4 font-semibold">{f.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RetailInsights() {
  const posts = [
    {
      tag: 'Case study',
      title: 'Retail e-commerce giant onboards 300 merchants in a quarter with a hybrid model',
    },
    {
      tag: 'Whitepaper',
      title: 'How we’re leaning into GenAI CX – an HFS market vision paper',
    },
    {
      tag: 'Whitepaper',
      title: 'Moments of delight: Translating operational excellence into CX',
    },
    {
      tag: 'Blog',
      title: 'Rethinking Debt Collections: AI, Personalization & Compliance',
    },
    {
      tag: 'Blog',
      title: 'The Complete Guide to Retail Transformation',
    },
  ];

  return (
    <section id="insights" className="container mx-auto px-4 py-12 md:py-16">
      <h3 className="text-xl md:text-2xl font-semibold">Retail Insights</h3>
      <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <article key={i} className="group rounded-3xl overflow-hidden ring-1 ring-slate-200 bg-white shadow-sm">
            <img src={`https://source.unsplash.com/collection/190727/${i + 1}`} alt="cover" className="h-40 w-full object-cover" />
            <div className="p-6">
              <div className="text-xs uppercase tracking-wide text-slate-500">{p.tag}</div>
              <h4 className="mt-2 font-semibold group-hover:underline">{p.title}</h4>
              <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium">
                Read more <ChevronRight className="size-4" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact({ id }: { id?: string }) {
  const [state, setState] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Wire this to your backend / form tool.
    setSubmitted(true);
  }

  return (
    <section id={id} className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold">Let’s Get Started</h3>
            <p className="mt-3 text-slate-600 max-w-xl">Tell us a bit about your challenge. Our retail specialists will get back within one business day.</p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="size-5 mt-0.5" />
                India HQ (Mohali)
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="size-5 mt-0.5" />
                Plot No. 605, Industrial Area Phase 9, SAS Nagar, Punjab 160062
              </li>
              <li className="flex items-start gap-3">
                <MailCheck className="size-5 mt-0.5" /> Email: info@srpuslogistics.com
              </li>
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl bg-white p-6 ring-1 ring-slate-200 shadow-sm">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="Full name" required>
                <input required value={state.name} onChange={(e) => setState({ ...state, name: e.target.value })} className="rounded-xl border px-3 w-full py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Vivek sharma" />
              </Field>
              <Field label="Work email" required>
                <input type="email" required value={state.email} onChange={(e) => setState({ ...state, email: e.target.value })} className="rounded-xl border px-3 w-full py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="vs@company.com" />
              </Field>
            </div>
            <div className="grid md:grid-cols-1 gap-4">
              <div className="mt-4">
                <Field label="Company">
                  <input value={state.company} onChange={(e) => setState({ ...state, company: e.target.value })} className="rounded-xl border px-3 w-full py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Acme Retail Co." />
                </Field>
              </div>
            </div>
            <div className="grid md:grid-cols-1 gap-4">
              <div className="mt-4">
                <Field label="How can we help?">
                  <textarea value={state.message} onChange={(e) => setState({ ...state, message: e.target.value })} className="rounded-xl border px-3 w-full py-2 min-h-32 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Briefly describe your goals or pain points" />
                </Field>
              </div>
            </div>
            {!submitted ? (
              <button type="submit" className="mt-6 w-full cursor-pointer rounded-2xl bg-teal-600 hover:bg-teal-700 text-white px-5 py-3 font-medium">
                Submit
              </button>
            ) : (
              <div className="mt-6 rounded-xl bg-green-50 text-green-900 p-4 text-sm">Thanks! We’ll be in touch shortly.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Pill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
      {icon}
      {label}
    </span>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-slate-700">
        {label} {required && <span className="text-rose-600">*</span>}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
