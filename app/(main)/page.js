import Posts from "@/components/Posts";
import Sidebar from "@/components/Sidebar";
import Stories from "@/components/Stories";

const user = {
  url: "/cnbc.jpeg",
  username: "cnbc",
  fullName: "CNBC",
};

const stories = [
  {
    id: 1,
    url: "/porsche.jpeg",
    name: "porsche",
  },
  {
    id: 2,
    url: "/porsche.jpeg",
    name: "porsche",
  },
  {
    id: 3,
    url: "/porsche.jpeg",
    name: "porsche",
  },
  {
    id: 4,
    url: "/porsche.jpeg",
    name: "porsche",
  },
  {
    id: 5,
    url: "/porsche.jpeg",
    name: "porsche",
  },
  {
    id: 6,
    url: "/porsche.jpeg",
    name: "porsche",
  },
  {
    id: 7,
    url: "/porsche.jpeg",
    name: "porsche",
  },
  {
    id: 8,
    url: "/porsche.jpeg",
    name: "porsche",
  },
  {
    id: 9,
    url: "/porsche.jpeg",
    name: "porsche",
  },
  {
    id: 10,
    url: "/porsche.jpeg",
    name: "porsche",
  },
  {
    id: 11,
    url: "/porsche.jpeg",
    name: "porsche",
  },
  {
    id: 12,
    url: "/porsche.jpeg",
    name: "porsche",
  },
  {
    id: 13,
    url: "/porsche.jpeg",
    name: "porsche",
  },
  {
    id: 14,
    url: "/porsche.jpeg",
    name: "porsche",
  },
  {
    id: 15,
    url: "/porsche.jpeg",
    name: "porsche",
  },
];

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
];

export default function Home() {
  return (
    <div className="flex space-x-10 mx-auto w-full max-w-[950px]">
      <div className="flex flex-col items-center w-full max-w-[655px]">
        <Stories stories={stories} />
        <Posts posts={posts} />
      </div>
      <Sidebar {...user} />
    </div>
  );
}
