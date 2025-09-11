import HeroSection from '@/app/components/subheader/AppHeroSection';
import Header from '../../../components/header/Header';

export default function CommunitiesPage() {
  return (
    <>
      <div className="min-h-screen bg-white text-slate-800">
        <Header />
        <HeroSection
          backgroundImage="/hero-bg.jpg"
          eyebrow="SRP"
          title="Improving"
          highlight="Communities"
          description=" Our growth must uplift the communities around us. We invest in youth
        readiness, campus events, and local CSR that creates pathways into
        meaningful work."
          primaryAction={{ label: 'Learn More', href: '/about' }}
          secondaryAction={{ label: 'Contact Us', href: '/contact' }}
        />
        <main className=" mx-auto max-w-7xl px-4 py-10">
          <div className="prose mt-6 max-w-none">
            <h2>Programs</h2>
            <ul>
              <li>Youth talks: demystifying BPO and logistics careers.</li>
              <li>Interview prep and English communication workshops.</li>
              <li>Scholarships and certification support for promising candidates.</li>
            </ul>
          </div>
          <div className="prose mt-6 max-w-none">
            <h2>Impact</h2>
            <p>Dozens of first-time professionals start their careers with us each year. We celebrate promotions, skill milestones, and community contributions publicly.</p>
          </div>
        </main>
      </div>
    </>
  );
}
