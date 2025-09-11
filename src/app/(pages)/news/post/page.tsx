// app/posts/page.tsx
'use client';
import HeroSection from '@/app/components/subheader/AppHeroSection';
export default function PostsPage() {
  const posts = [
    {
      title: 'Founder Spotlight: Community Initiatives',
      meta: 'Aug 28, 2025 • SRP Editorial',
      desc: 'Highlights from recent outreach in Mohali—career pathways and dignitary visits.',
      link: '../careers/openings/opening-senior-bpo-agent',
      cta: 'Open →',
    },
    {
      title: 'Careers in US Logistics BPO',
      meta: 'Aug 26, 2025 • People Ops',
      desc: 'We’re expanding and hiring across night-shift US logistics processes.',
      link: '../careers/openings/opening-senior-bpo-agent',
      cta: 'Open →',
    },
    {
      title: 'Media Kit Updated',
      meta: 'Aug 15, 2025 • Media Team',
      desc: 'Fresh headshots, campus images, and logos available for download.',
      link: 'post/media-library',
      cta: 'Media Library →',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-slate-800">
        <HeroSection backgroundImage="/hero-bg.jpg" eyebrow="Posts" title="Posts" highlight="" description="Company posts, event recaps, a downloadable media library, and a media relations contact point for interviews and campus visits." primaryAction={{ label: 'Learn More', href: '/about' }} secondaryAction={{ label: 'Contact Us', href: '/contact' }} />
        <main className="container mx-auto max-w-7xl px-4 py-10">
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {posts.map((post, idx) => (
              <article key={idx} className="rounded-xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md">
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <p className="mt-1 text-xs text-slate-500">{post.meta}</p>
                <p className="mt-2 text-slate-700">{post.desc}</p>
                <a href={post.link} className="mt-3 inline-block font-semibold text-teal-700 hover:underline">
                  {post.cta}
                </a>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
