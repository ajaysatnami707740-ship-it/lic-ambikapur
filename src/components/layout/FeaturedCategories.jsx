import Link from "next/link";
import Image from "next/image";
import { apiRequest } from "@/lib/api";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

// Per-tag image mapping
const tagImages = {
  love: "https://thumbs.dreamstime.com/b/romantic-valentine-couple-under-blossom-flowers-trees-love-watercolour-painting-illustration-361917816.jpg",
  romance: "https://thumbs.dreamstime.com/b/romantic-valentine-couple-under-blossom-flowers-trees-love-watercolour-painting-illustration-361917816.jpg",
  relationship: "https://thumbs.dreamstime.com/b/romantic-valentine-couple-under-blossom-flowers-trees-love-watercolour-painting-illustration-361917816.jpg",
  breakup: "https://thumbs.dreamstime.com/b/romantic-valentine-couple-under-blossom-flowers-trees-love-watercolour-painting-illustration-361917816.jpg",
};

export default async function TagsSection() {
  let tags = [];

  try {
    const res = await apiRequest(`${process.env.NEXT_PUBLIC_API_URL}/api/tags`);
    tags = res.data || [];
  } catch (err) {
    console.error("Failed to fetch tags:", err);
  }

  if (!tags.length) return null;

  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-fuchsia-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* HEADING */}
        <h2 className="text-3xl font-extrabold text-center mb-12 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-transparent bg-clip-text">
          Explore Tags
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {tags.map((tag) => {
            const imgSrc =
              tagImages[tag.slug] ||
              tag.coverImage ||
              "/placeholder.png";

            return (
              <Link
                key={tag._id}
                href={`/tag/${tag.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl bg-white/40 backdrop-blur-lg border border-white/30 transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dnq42wt3a/image/upload/v1764596523/posts/yalctyfrdq52dxvhle5v.jpg"
                    alt={tag.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1200px) 50vw,
                           25vw"
                    priority={tag.slug === "love"}
                  />
                </div>

                {/* GRADIENT CONTENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-white text-xl font-bold leading-tight drop-shadow">
                    {tag.name}
                  </h3>
                  <p className="text-gray-200 text-sm mt-1 line-clamp-2 drop-shadow-sm">
                    {tag.description || "Explore posts with this tag."}
                  </p>
                </div>

              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
