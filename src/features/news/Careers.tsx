import Link from "next/link";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import HeroSection from "../../components/subheader/AppHeroSection";

export default function Careers() {
  const items = [
    {
      title: "Posts",
      desc: "Updates and announcements.",
      link: "/news/posts",
    },
    {
      title: "Events",
      desc: "Talks, visits, and community programs.",
      link: "/news/events",
    },
    {
      title: "Media Library",
      desc: "Logos, headshots, and campus imagery.",
      link: "/news/media-library",
    },
    {
      title: "Media Relations",
      desc: "Press requests & interviews.",
      link: "/news/media-relations",
    },
  ];

  return (
    <>
     <div className="min-h-screen bg-white text-slate-800">
        <Header />
         <HeroSection
                        backgroundImage="/hero-bg.jpg"
                        eyebrow="Our News"
                        title="Our "
                        highlight="Newsroom"
                        description="Company posts, event recaps, a downloadable media library, and a media relations contact point for interviews and campus visits."
                        primaryAction={{ label: "Learn More", href: "/about" }}
                        secondaryAction={{ label: "Contact Us", href: "/contact" }}
                      />
<main className="container  mx-auto max-w-7xl px-4 py-10">
 

      <ul className="mt-6 grid gap-4 md:grid-cols-4">
        {items.map((item) => (
          <li
            key={item.link}
            className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <Link
              href={item.link}
              className="text-teal-700 font-semibold hover:underline "
            >
              {item.title} →
            </Link>
            <p className="mt-2 text-sm text-gray-600 ">{item.desc}</p>
          </li>
        ))}
      </ul>
    </main>
    </div>
      <Footer />
      </>
  );
}
