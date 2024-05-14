import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    id: 1,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
  {
    id: 2,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
  {
    id: 3,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
  {
    id: 4,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
  {
    id: 5,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
  {
    id: 6,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
  {
    id: 7,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
  {
    id: 8,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
  {
    id: 9,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
  {
    id: 10,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
  {
    id: 11,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
  {
    id: 12,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
  {
    id: 13,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
  {
    id: 14,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
  {
    id: 15,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
  {
    id: 16,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    name: "zenjoshh",
    isLiked: "true",
  },
];

export default function Explore() {
  return (
    <div className="px-3 my-10 grid grid-cols-3 gap-1  mx-auto w-full max-w-[992px]">
      {posts.map(({ id, url }) => (
        <Link key={id} href={`/p/${id}`}>
          <div className="relative overflow-hidden pb-[100%]">
            <Image
              priority
              src={url}
              fill
              alt="no picture"
              className="object-cover"
              sizes="33vw"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
