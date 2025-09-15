// app/careers/opening-qa-voice/page.tsx

import RichTextRenderer from '@/app/components/RichText/RichTextHandler';
import { getOpeningBySlug, getOpenings } from '@/app/services';
import { truncateContent } from '@/app/utils/utility';
import Head from 'next/head';

export async function generateStaticParams() {
  const openings = await getOpenings();
  return openings?.data?.map((b: any) => ({
    id: b.attributes?.slug || b.slug,
  }));
}
export default async function QASeniorBpoAgent({ params }: { params: { id: string } }) {
  const opening = await getOpeningBySlug(params?.id);
  if (!opening) {
    return <div>Opening not found </div>;
  }

  const seo = opening?.Seo;

  return (
    <>
      {seo && (
        <Head>
          <title>{seo.metaTitle}</title>
          <meta name="description" content={seo.metaDescription} />
          {seo.keywords && <meta name="keywords" content={seo.keywords} />}
          {seo.metaRobots && <meta name="robots" content={seo.metaRobots} />}
          {seo.canonicalURL && <link rel="canonical" href={seo.canonicalURL} />}
          {seo.structuredData && <script type="application/ld+json">{seo.structuredData}</script>}
        </Head>
      )}
      <div className="min-h-screen bg-white text-slate-800">
        <main className="container mx-auto max-w-7xl px-4 py-10">
          <h1 className="text-3xl font-semibold">{opening.title}</h1>
          <p className="mt-1 text-sm text-slate-600">
            {opening.location} • {opening.experience}
          </p>

          <div className="mt-6 grid gap-8 md:grid-cols-2">
            {/* Job Details */}
            <div className="prose max-w-none">
              <h2>Responsibilities</h2>
              <RichTextRenderer content={opening.responsibilities} />

              <h2>Requirements</h2>
              <RichTextRenderer content={opening.requirements} />
            </div>

            {/* Application Form */}
            <form className="grid gap-3 rounded-xl border border-slate-200 p-6 shadow-sm" action="#" method="post">
              <h3 className="font-semibold text-lg">Apply now</h3>

              <input required placeholder="Full name" className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <input required type="email" placeholder="Email" className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <input placeholder="Phone" className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <input placeholder="Years of relevant experience" className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" />
              <textarea placeholder="Why you? (2–3 lines)" className="rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>

              <button type="submit" className="rounded-xl bg-teal-600 px-4 py-2 font-semibold text-white hover:bg-teal-700 transition">
                Submit Application
              </button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
