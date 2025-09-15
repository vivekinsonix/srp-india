import HeroSection from '@/app/components/header/HeroBanner';
import RichTextRenderer from '@/app/components/RichText/RichTextHandler';
import { getBlogBySlug, getBlogs } from '@/app/services';
import Head from 'next/head';
import Image from 'next/image';

export async function generateStaticParams() {
  const blogs = await getBlogs();
  return blogs?.data?.map((b: any) => ({
    id: b.attributes?.slug || b.slug,
  }));
}

export default async function BlogDetails({ params }: { params: { id: string } }) {
  const blog = await getBlogBySlug(params.id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const seo = blog?.Seo;

  const attributes = blog.attributes || blog;

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
       
      {blog ? (
        <div className="container mx-auto max-w-4xl py-10 bg-white">
          <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
          {blog.coverImage?.url && <Image src={blog.coverImage.url} alt={blog.title} width={800} height={500} className="mb-6 w-full" />}
          <RichTextRenderer content={blog.content} />
        </div>
      ) : (
        <p className="text-center py-20">Loading…</p>
      )}
      </div>
    </>
  );
}
