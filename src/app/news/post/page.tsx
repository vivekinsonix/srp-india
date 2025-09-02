// app/posts/page.tsx
"use client";
import Header from "../../header/page";
import Footer from "../../footer/page";
export default function PostsPage() {
  const posts = [
    {
      title: "Founder Spotlight: Community Initiatives",
      meta: "Aug 28, 2025 • SRP Editorial",
      desc: "Highlights from recent outreach in Mohali—career pathways and dignitary visits.",
      link: "../careers/openings/opening-senior-bpo-agent",
      cta: "Open →",
    },
    {
      title: "Careers in US Logistics BPO",
      meta: "Aug 26, 2025 • People Ops",
      desc: "We’re expanding and hiring across night-shift US logistics processes.",
      link: "../careers/openings/opening-senior-bpo-agent",
      cta: "Open →",
    },
    {
      title: "Media Kit Updated",
      meta: "Aug 15, 2025 • Media Team",
      desc: "Fresh headshots, campus images, and logos available for download.",
      link: "post/media-library",
      cta: "Media Library →",
    },
  ];

  return (
          <>
           <div className="min-h-screen bg-white text-slate-800">
              <Header />
      <main className="container mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-semibold">Posts</h1>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {posts.map((post, idx) => (
          <article
            key={idx}
            className="rounded-xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="mt-1 text-xs text-slate-500">{post.meta}</p>
            <p className="mt-2 text-slate-700">{post.desc}</p>
            <a
              href={post.link}
              className="mt-3 inline-block font-semibold text-teal-700 hover:underline"
            >
              {post.cta}
            </a>
          </article>
        ))}
      </div>
   </main>
           </div>
             <Footer />
             </>
  );
}
