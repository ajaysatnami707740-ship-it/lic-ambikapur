export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import Link from "next/link";
import Image from "next/image";
import { apiRequest } from "@/lib/api";

export default async function HomePosts() {
  let posts = [];

  try {
    const res = await apiRequest(
      `${process.env.NEXT_PUBLIC_API_URL}/api/posts?page=1&limit=6`
    );
    posts = res.data || [];
  } catch (err) {
    console.error("Failed to fetch posts:", err);
    return null;
  }

  if (!posts.length) return null;

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
          Latest & Featured Stories
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post, index) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="group block overflow-hidden rounded-2xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 transition-transform duration-300 bg-gradient-to-tr from-blue-50 via-white to-yellow-50"
              prefetch={false} 
            >
              {/* Image */}
              <div className="relative w-full h-40 sm:h-48 md:h-52 rounded-t-2xl overflow-hidden">
                <Image
                  src={post.coverImage || "/placeholder.png"}
                  alt={post.title}
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  loading={index < 2 ? "eager" : "lazy"} 
                />
              </div>

              <div className="p-4 sm:p-5">
                {/* Categories */}
                {/* <div className="flex flex-wrap gap-2 mb-2">
                  {post.categories?.map((cat) => (
                    <span
                      key={cat._id}
                      className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 font-medium"
                    >
                      {cat.name}
                    </span>
                  ))}
                </div> */}

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-700 mt-1 text-xs sm:text-sm line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                  <span>
                    {new Date(post.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>{post.readTime || 3} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
