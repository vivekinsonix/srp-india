// components/PurposeContent.js
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import HeroSection from '@/components/subheader/AppHeroSection';


const topics = [
  {
    id: 'opportunity',
    title: 'Opportunity',
    description:
      'SRP is committed to making retail a place of inclusive and equitable opportunity for our associates and across related sectors...',
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    description:
      'Our focus on climate, nature, waste and people in supply chains has strengthened our business and communities in measurable ways...',
  },
  {
    id: 'community',
    title: 'Community',
    description:
      'We aim to help our neighbors live better by strengthening the local communities where our associates and customers live...',
  },
  {
    id: 'ethics',
    title: 'Ethics & Integrity',
    description:
      'Our commitment to ethics and integrity is reflected in our actions—from ensuring the food and products we sell are safe...',
  },
  // Add more topics (Belonging, Philanthropy, ESG, Health & Wellness) similarly
];

export default function PurposeContent() {
  return (

        <div className="min-h-screen bg-white text-slate-900">
       <Header />
       <HeroSection
        backgroundImage="/hero-bg.jpg"
        eyebrow="Our Purpose"
        title="Helping people"
        highlight="live better"
        description="Through innovation, sustainability, and a focus on our communities, we aim to improve lives around the world."
        primaryAction={{ label: "Learn More", href: "/about" }}
        secondaryAction={{ label: "Contact Us", href: "/contact" }}
      />
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          We aim to build a better world — helping people live better and renew the planet while building thriving, resilient communities.
        </h1>
        <p className="text-lg text-gray-700">
          For us, this means working to create opportunity, build a more sustainable future, advance belonging and bring communities closer together...
        </p>
      </div>

      {/* Topic Cards */}
      <div className="grid grid-col-1 lg:grid-cols-2 gap-8">
        {topics.map(({ id, title, description }) => (
          <div
            key={id}
            id={id}
            className="p-6 border rounded-lg hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-700">{description}</p>
          </div>
        ))}
      </div>
      
    </section>
    <Footer/>
    </div>
  );
}
