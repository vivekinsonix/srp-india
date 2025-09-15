import RichTextRenderer from '@/app/components/RichText/RichTextHandler';
import { getEventBySlug, getEvents } from '@/app/services';
import Head from 'next/head';
import Image from 'next/image';

export async function generateStaticParams() {
  const event = await getEvents() || [];
  return event?.data?.map((b: any) => ({
    id: b.attributes?.slug || b.slug,
  }));
}

export default async function BlogDetails({ params }: { params: { id: string } }) {
  const event = await getEventBySlug(params.id);

  if (!event) {
    return <div>event not found</div>;
  }

  const seo = event?.Seo;

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
      {event ? (
       <main className="container mx-auto max-w-4xl px-4 py-10">
          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
          {event.gallery[0]?.mime === 'video/mp4' ? <video src={event.gallery[0]?.url} height={600} className="h-full w-full object-cover" autoPlay muted loop playsInline /> : <Image src={event.gallery[0]?.url} alt={event.title} width={800} height={500} className="mb-6" />}
          <RichTextRenderer content={event.summary} />
        </main>
      ) : (
        <p className="text-center py-20">Loading…</p>
      )}
      </div>
    </>
  );
}
