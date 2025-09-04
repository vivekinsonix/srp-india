import Link from "next/link";
import Header from "../header/page";
import Footer from "../footer/page";
import HeroSection from "../subheader/page";

export default function Blogs() {
const posts = [
    {
      title: "Founder Spotlight: Rajwinder Singh Boparai",
      meta: "Aug 28, 2025 • SRP Editorial",
      desc: "From trucks to a multi-business logistics brand—impact in Punjab.",
      link: "blogs/post-founder-spotlight",
    },
    {
      title: "Careers in US Logistics BPO – Mohali",
      meta: "Aug 26, 2025 • People Ops",
      desc: "We’re hiring experienced agents who’ve handled TMS/CRM and US voice processes.",
      link: "blogs/post-careers-bpo",
    },
    {
      title: "Life on the Night Shift",
      meta: "Aug 10, 2025 • Team SRP",
      desc: "How we make US time zones sustainable—routines, safety, and wellbeing.",
      link: "#",
    },
  ];

  return (
    <>
     <div className="min-h-screen bg-white text-slate-800">
        <Header />
               <HeroSection
                backgroundImage="/hero-bg.jpg"
                eyebrow="Our Blogs"
                title="Our "
                highlight="Blogs"
                description="Stories about careers, operations, and our journey."
                primaryAction={{ label: "Learn More", href: "/about" }}
                secondaryAction={{ label: "Contact Us", href: "/contact" }}
              />
    <main className="container mx-auto max-w-7xl  px-4 py-10">

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md "
          >
            <h2 className="text-lg font-semibold text-gray-900 ">
              {post.title}
            </h2>
            <p className="text-xs text-slate-500 ">{post.meta}</p>
            <p className="mt-2 text-gray-700 ">{post.desc}</p>
            <Link
              href={post.link}
              className="mt-3 inline-block font-semibold text-teal-700 hover:underline dark:text-teal-400"
            >
              Open →
            </Link>
          </article>
        ))}
      </div>
    </main>
    </div>
      <Footer />
      </>
  );
}
