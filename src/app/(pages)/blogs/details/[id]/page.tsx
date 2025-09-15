import { getBlogs, getBlogBySlug } from '@/app/services';

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

  const attributes = blog.attributes || blog;

  console.log(blog);
  

  return (
    <div>
      <h1>{attributes.title}</h1>
      <p>
        {attributes.author} • {new Date(attributes.publishedAt).toLocaleDateString()}
      </p>
      <p>{attributes.excerpt}</p>
      {attributes.coverImage?.data && <img src={attributes.coverImage.data.attributes.url} alt={attributes.title} width={800} />}
    </div>
  );
}
