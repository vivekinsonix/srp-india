import Link from 'next/link';
import Header from '../../components/header/Header';
import HeroSection from '../../components/subheader/AppHeroSection';

export default function AboutSRP() {
  const cards = [
    {
      title: 'Purpose',
      desc: 'The why behind SRP: reliable logistics for the US, meaningful careers for India.',
      link: '/about/purpose',
    },
    {
      title: 'Improving Communities',
      desc: 'Programs that upskill youth and support local initiatives in Mohali & Punjab.',
      link: '/about/improving-communities',
    },
    {
      title: 'Founder',
      desc: 'Mr. Rajwinder Singh Boparai—entrepreneurship, philanthropy, and growth.',
      link: '/about/founder',
    },
    {
      title: 'Working at SRP',
      desc: 'Culture, growth, and expectations for high-performance BPO teams.',
      link: '/about/working-at-srp',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-slate-800">
        <Header />
        <HeroSection
          backgroundImage="/hero-bg.jpg"
          eyebrow="SRP"
          title="About"
          highlight="SRP"
          description="We connect US logistics demand with India’s talent. Our Mohali center supports brokerage,
        dispatch, accounting, QA, HR, and IT for a solid US trucking & brokerage network."
          primaryAction={{ label: 'Learn More', href: '/about' }}
          secondaryAction={{ label: 'Contact Us', href: '/contact' }}
        />
        <main className="container mx-auto max-w-7xl  px-4 py-10">
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {cards.map((card) => (
              <Link key={card.link} href={card.link} className="block rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 ">{card.title}</h2>
                <p className="mt-2 text-gray-600 ">{card.desc}</p>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
