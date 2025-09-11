// app/media-library/page.tsx
'use client';
export default function MediaLibraryPage() {
  const mediaItems = [
    {
      title: 'Logo pack',
      desc: 'PNG, SVG',
      link: '#',
    },
    {
      title: 'Founder headshots',
      desc: 'High-res JPG',
      link: '#',
    },
    {
      title: 'Campus images',
      desc: 'JPG set',
      link: '#',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white text-slate-800">
        <main className="container mx-auto max-w-7xl px-4 py-10">
          <h1 className="text-3xl font-semibold">Media Library</h1>
          <p className="mt-4 text-slate-700">Download logos, headshots, and campus photos for press coverage.</p>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {mediaItems.map((item, idx) => (
              <div key={idx} className="rounded-xl border border-slate-200 p-6 shadow-sm transition hover:shadow-md">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                <a href={item.link} className="mt-2 inline-block rounded-lg border border-teal-700 px-4 py-2 text-teal-700 font-semibold hover:bg-teal-700 hover:text-white transition">
                  Download
                </a>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
