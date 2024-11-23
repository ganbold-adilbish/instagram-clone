import { prisma } from "@/lib/prisma";
import Image from "next/image";

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

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
  });

  return posts;
}

async function getPost(id) {
  let post = await prisma.post.findUnique({
    where: {
      id,
    },
    select: {
      _count: {
        select: {
          usersWhoHaveLiked: true,
        },
      },
      url: true,
      description: true,
      author: {
        select: {
          url: true,
          username: true,
        },
      },
      usersWhoHaveLiked: {
        where: {
          username: "",
        },
        select: {
          id: true,
        },
      },
    },
  });

  post = {
    ...post,
    likes_total_count: post._count.usersWhoHaveLiked,
    has_liked: post.usersWhoHaveLiked.length === 1,
  };

  return post;
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map(({ id }) => ({
    id,
  }));
}

export default async function Post({ params: { id } }) {
  const { url, author, description, likes_total_count, has_liked } =
    await getPost(id);

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
                        has_liked && name === "like" ? "-solid" : ""
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
            <strong className="text-sm">{likes_total_count} likes</strong>
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
