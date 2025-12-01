import Image from "next/image";
import Link from "next/link";
import { apiRequest } from "@/lib/api";
import DOMPurify from "dompurify";

export const dynamic = "force-dynamic";

// Dynamic SEO metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  let post = null;

  try {
    const res = await apiRequest(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/slug/${slug}`);
    post = res.data;
  } catch (error) {
    console.error("Failed to fetch post for metadata:", error);
  }

  if (!post) return { title: "Post Not Found", description: "This post does not exist." };

  const metaTitle = post.metaTitle || post.title;
  const metaDescription =
    post.metaDescription ||
    post.excerpt ||
    post.categories?.[0]?.description ||
    "Get detailed insights and guidance on LIC policies and financial planning.";

  const metaKeywords =
    post.metaKeywords?.join(", ") ||
    post.tags?.map((t) => t.name).join(", ") ||
    post.categories?.map((c) => c.name).join(", ");

  const canonicalUrl = `https://licambikapur.com/blog/${post.slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      type: "article",
      images: [
        {
          url: post.coverImage || "/placeholder.png",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [post.coverImage || "/placeholder.png"],
    },
  };
}

export default async function SinglePostPage({ params }) {
  const { slug } = await params;
  let post = null;

  try {
    const res = await apiRequest(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/slug/${slug}`);
    post = res.data;
  } catch (error) {
    console.error("Failed to fetch post:", error);
  }

  if (!post) {
    return (
      <div className="max-w-6xl mx-auto py-32 text-center">
        <h1 className="text-3xl font-bold text-gray-700">Post not found</h1>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gradient-to-b from-[#f3f7fd] via-[#e8f0fb] to-[#dbe8f7] pb-20">

      {/* HEADER BANNER */}
      <section className="relative w-full h-[55vh] rounded-b-3xl overflow-hidden shadow-xl">
        <Image
          src={post.coverImage || "/placeholder.png"}
          alt={post.title}
          fill
          priority
          className="object-cover object-center brightness-[0.85]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 text-center">
          <h1 className="text-xl sm:text-5xl font-extrabold text-white leading-tight drop-shadow-2xl">
            {post.title}
          </h1>
          <p className="text-gray-200 mt-3 text-sm">
            {new Date(post.createdAt).toLocaleDateString()} • {post.readTime || 3} min read
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-0 sm:px-8 -mt-12">
        <div className="bg-white border border-blue-100 shadow-2xl rounded-3xl py-4 sm:p-12">

          {/* Categories */}
          <div className="flex flex-wrap px-2 gap-2 mb-6 pt-8">
            {post.categories?.map((cat) => (
              <Link
                key={cat._id}
                href={`/category/${cat.slug}`}
                className="px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium hover:bg-blue-200 transition"
              >
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Excerpt */}
          {post.excerpt && (
            <p className="text-lg px-2 text-gray-700 italic border-l-4 border-blue-300 pl-5 mb-10">
              {post.excerpt}
            </p>
          )}

          {/* Main content */}
          <div
            className="
              prose prose-lg max-w-none
              prose-p:text-gray-800
              prose-li:text-gray-800
              prose-headings:text-gray-900
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-img:rounded-xl prose-img:shadow-md
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="mt-12 px-2 pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Related Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag._id}
                    href={`/tag/${tag.slug}`}
                    className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                  >
                    #{tag.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Back button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-block px-7 py-3 rounded-lg bg-gradient-to-r 
              from-blue-500 to-blue-700 text-white font-semibold shadow-lg 
              hover:shadow-xl active:scale-95 transition-all"
          >
            ← Back to Blogs
          </Link>
        </div>
      </div>
    </article>
  );
}
