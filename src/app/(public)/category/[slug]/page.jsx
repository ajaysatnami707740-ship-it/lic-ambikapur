import Link from "next/link";
import Image from "next/image";
import { apiRequest } from "@/lib/api";

export const dynamic = "force-dynamic";

// Dynamic metadata for category pages
export async function generateMetadata({ params }) {
  const { slug } = await params;
  let category = null;
  let posts = [];

  try {
    const res = await apiRequest(`${process.env.NEXT_PUBLIC_API_URL}/api/categories/${slug}`);
    category = res.category || res.data;
    posts = res.data.data || [];
  } catch (err) {
    console.error("Failed to fetch category metadata:", err);
  }

  if (!category) {
    return {
      title: "Category Not Found",
      description: "This category does not exist on LIC Ambikapur.",
    };
  }

  const metaTitle = category.title || category.name;
  const metaDescription = category.description || `Explore posts about ${category.name}.`;
  const metaKeywords = category.keywords?.join(", ") || "";
  const canonicalUrl = `https://licambikapur.in/category/${category.slug}`;

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: metaKeywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url: canonicalUrl,
      type: "website",
      images: [
        { url: posts[0]?.coverImage || "/placeholder.png", width: 1200, height: 630 },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [posts[0]?.coverImage || "/placeholder.png"],
    },
  };
}

export default async function CategoryPage({ params }) {
  const { slug } = await params;
  let posts = [];
  let category = null;

  try {
    const res = await apiRequest(`${process.env.NEXT_PUBLIC_API_URL}/api/categories/${slug}`);
    category = res.data || res.data;
    posts = res.data || [];
  } catch (err) {
    console.error("Failed to fetch category posts:", err);
  }

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 text-center">
        <h2 className="text-3xl font-bold text-blue-900">Category not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-tr from-blue-50 via-white to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20">
        {/* Category Header */}
        <h1 className="text-4xl font-extrabold text-blue-700 text-center mb-4">{category.name}</h1>
        <p className="text-center text-blue-900 mb-12">{category.description}</p>

        {/* Posts Grid */}
        {posts.length === 0 ? (
          <p className="text-center text-blue-600">No posts available in this category.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug}`}
                className="group rounded-xl overflow-hidden bg-white shadow-md border border-blue-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
                prefetch={true}
              >
                {/* Image */}
                <div className="relative w-full h-40 sm:h-48">
                  <Image
                    src={post.coverImage || "/placeholder.png"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Post Content */}
                <div className="p-4 sm:p-5">
                  {/* Categories */}
                  {/* <div className="flex flex-wrap gap-2 mb-2">
                    {post.categories?.map((cat) => (
                      <span
                        key={cat._id}
                        className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-medium"
                      >
                        {cat.name}
                      </span>
                    ))}
                  </div> */}

                  {/* Title */}
                  <h2 className="text-md sm:text-lg font-semibold text-blue-900 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-blue-800 mt-2 text-sm line-clamp-3">{post.excerpt}</p>

                  {/* Meta */}
                  <div className="flex justify-between items-center mt-3 text-xs text-blue-400">
                    <span>{new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                    <span>{post.readTime || 3} min read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
