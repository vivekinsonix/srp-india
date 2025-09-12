'use client';
import RichTextRenderer from '@/app/components/RichText/RichTextHandler';
import { getBlogs } from '@/app/services';
import SpinnerService from '@/app/services/SpinnerService';
import { formatDate, truncateContent } from '@/app/utils/utility';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import HeroSection from '../../components/subheader/AppHeroSection';
interface Seo {
  id: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  metaRobots: string | null;
  metaViewport: string | null;
  canonicalURL: string | null;
  structuredData: string | null;
}

interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  author: string;
  tags: string[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  coverImage: {
    url: string;
  };
  Seo: Seo;
}

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    SpinnerService.showSpinner();
    getBlogs()
      .then((response) => {
        setBlogs(response?.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        SpinnerService.hideSpinner();
      });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white text-slate-800">
        <HeroSection backgroundImage="/hero-bg.jpg" eyebrow="Our Blogs" title="Our Blogs" description="Stories about careers, operations, and our journey." primaryAction={{ label: 'Learn More', href: '/about' }} secondaryAction={{ label: 'Contact Us', href: '/contact' }} />
        <main className="container mx-auto max-w-7xl px-4 py-10">
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {blogs.map((post) => (
              <article key={post.title} className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                <Image src={post?.coverImage?.url} alt={post.title} width={600} height={400} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-gray-900">{post?.title}</h2>
                  <p className="text-xs text-slate-500">{formatDate(post?.publishedAt)}</p>
                  <p className="text-xs text-slate-500">{post.author}</p>
                  <RichTextRenderer content={truncateContent(post.content)} />
                  <Link href={`/blogs/details${post.id}`} className="text-blue-600 hover:underline hover:text-blue-800">
                    Read More..
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
