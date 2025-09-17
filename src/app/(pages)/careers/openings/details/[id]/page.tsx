// page.tsx (server component)
import RichTextRenderer from '@/app/components/RichText/RichTextHandler';
import Head from 'next/head';
import { getOpeningBySlug, getOpenings } from '@/app/services';
import ApplicationForm from './ApplicatioForm'; // <- client component

export async function generateStaticParams() {
  const openings = (await getOpenings()) || [];
  return openings?.data?.map((b: any) => ({
    id: b.attributes?.slug || b.slug,
  }));
}

export default async function QASeniorBpoAgent({ params }: { params: { id: string } }) {
  const opening = await getOpeningBySlug(params.id);
  if (!opening) return <div>Opening not found</div>;

  const seo = opening.Seo;

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

            <ApplicationForm opening={opening} />
          </div>
        </main>
      </div>
    </>
  );
}
