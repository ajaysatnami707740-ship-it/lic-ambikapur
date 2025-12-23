import Link from "next/link";
import Image from "next/image";
import { apiRequest } from "@/lib/api";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

// Per-tag image mapping
// const tagImages = [
//   "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766470667/posts/qpvxfjkyb4sgbrififlc.png",
//   "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766470715/posts/jf9vpocm0plrjm1bl7ei.png",
//   "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766470752/posts/w3bv29qbokaso5ippkuv.png",
//   "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766470784/posts/aabozgsmpx4n6rhycsie.png",
//   "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766470848/posts/imqldwlpqlhnffi2fkqr.png",
//   "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766470880/posts/mmyfrbjnt2iuizp5ntqt.png",
//   "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766470910/posts/opcwygtwxvhzsl6cnuv9.png",
//   "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766470667/posts/qpvxfjkyb4sgbrififlc.png",
//   "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766509740/posts/qbcnfi8sxjp2bhzw7a6j.jpg",
//   "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766470752/posts/w3bv29qbokaso5ippkuv.png",

// ];

const tagImages = [
  "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766511844/posts/xiywiqnsmov29nv8n1ut.jpg",
  "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766511923/posts/kz9529x6p2jn7wtqhqga.jpg",
  "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766512005/posts/j74hwwxx7fm7lyusjyge.jpg",
  "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766511981/posts/pmbs1fmsqgudsg2akjen.jpg",

  "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766511950/posts/k73hmnfl8afnwq7o325m.jpg",
  "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766512029/posts/awc9sblrnvv2xmabx9xt.jpg",

  "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766512053/posts/wdjzhq3aeoxyuyhxwtgc.jpg",

  "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766512104/posts/edpw1v8mxuxlatewcqmh.jpg",
  "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766512424/posts/enqv7nbdnzcwbjbgc5xn.jpg",
  "https://res.cloudinary.com/dnq42wt3a/image/upload/v1766512325/posts/ty2ew8ilczef3mjgagxf.jpg",
];

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
          {tags.map((tag, i) => {
            const imgSrc =
              tagImages[tag.slug] || tag.coverImage || "/placeholder.png";

            return (
              <Link
                key={tag._id}
                href={`/tag/${tag.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl bg-white/40 backdrop-blur-lg border border-white/30 transition-all duration-300"
              >
                {/* IMAGE */}
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src={tagImages[i]}
                    alt="tag_images"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 25vw"
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
