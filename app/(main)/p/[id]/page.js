import Image from "next/image";

const posts = [
  {
    id: 1,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
  {
    id: 2,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
  {
    id: 3,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
  {
    id: 4,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
  {
    id: 5,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
  {
    id: 6,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
  {
    id: 7,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
  {
    id: 8,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
  {
    id: 9,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
  {
    id: 10,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
  {
    id: 11,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
  {
    id: 12,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
  {
    id: 13,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
  {
    id: 14,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
  {
    id: 15,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
  {
    id: 16,
    url: "/macbook_setup.jpeg",
    description:
      "Today's EDC and desk setup essentials: MacBook Pro M1, iPhone 15 pro, Apple watch, Airpods Max, a dark roast espresso and kinfolk wilderness🌿☕🎧",
    likeNumber: "1,498",
    isLiked: "true",
    author: {
      url: "/zenjoshh_profile_picture.jpeg",
      username: "zenjoshh",
    },
  },
];

const actionButtons = [
  {
    id: 1,
    name: "like",
  },
  {
    id: 2,
    name: "comment",
  },
  {
    id: 3,
    name: "share-post",
  },
];

const saveButton = {
  name: "save",
};

export async function generateStaticParams() {
  return posts.map(({ id }) => ({
    id: id.toString(),
  }));
}

export default function Post({ params }) {
  const { url, author, description, isLiked, likeNumber } = posts.find(
    ({ id }) => id === parseInt(params.id)
  );

  return (
    <div className="px-5 pt-14">
      <div className="flex border border-gray-200 mx-auto w-full max-w-[937px]">
        <div className="w-full">
          <div className="relative overflow-hidden pb-[100%]">
            <Image
              priority
              src={url}
              fill
              alt={"no picture"}
              className="object-cover"
              sizes="80vw"
            />
          </div>
        </div>
        <div className="flex flex-col w-[355px] flex-none">
          <div className="px-4 py-2 border-b border-gray-200 flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                priority
                src={author.url}
                height={32}
                width={32}
                alt={author.username}
              />
            </div>
            <div>
              <strong className="text-sm">{author.username}</strong>
              <span className="mx-1">•</span>
              <strong className="text-sm">Following</strong>
            </div>
          </div>

          <div className="p-4 h-full border-b border-gray-200 flex items-start space-x-2 overflow-y-auto">
            <Image
              priority
              src={author.url}
              height={32}
              width={32}
              alt={author.username}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex items-stretch text-sm leading-[18px]">
                <strong>{author.username}</strong>
                <span className="mx-1">•</span>
                <time dateTime="2024-05-13T05:36:40.000Z">1d</time>
              </div>
              <span className="text-sm">{description}</span>
            </div>
          </div>

          <div className="px-4 py-[6px]">
            <div className="flex justify-between">
              <div className="flex -ml-2">
                {actionButtons.map(({ id, name }) => (
                  <button key={id} className="p-2">
                    <Image
                      src={`/post/${name}${
                        isLiked && name === "like" ? "-solid" : ""
                      }.svg`}
                      height={24}
                      width={24}
                      alt={name}
                    />
                  </button>
                ))}
              </div>
              <button>
                <Image
                  src={`/post/${saveButton.name}.svg`}
                  height={24}
                  width={24}
                  alt={saveButton.name}
                />
              </button>
            </div>
            <strong className="text-sm">{likeNumber} likes</strong>
            <div>
              <time className="text-xs" dateTime="2024-05-14T12:32:52.000Z">
                36 minutes ago
              </time>
            </div>
          </div>

          <div className="px-4 py-[6px] flex items-start space-x-4">
            <Image
              src={`/post/emoji.svg`}
              height={24}
              width={24}
              alt={"emoji"}
              className=""
            />

            <textarea
              className="resize-none w-full focus:outline-none text-sm overflow-auto"
              placeholder="Add a comment..."
              autoComplete="off"
              autoCorrect="off"
            ></textarea>
            <button className="ml-2 text-sm">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
