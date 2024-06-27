import Posts from "@/components/Posts";
import Sidebar from "@/components/Sidebar";
import Stories from "@/components/Stories";
import { prisma } from "@/lib/prisma";

async function getUser() {
  let user = await prisma.user.findUnique({
    where: {
      username: "cnbcmakeit",
    },
    select: {
      url: true,
      username: true,
      fullName: true,
      feed: {
        select: {
          stories: {
            where: {
              published: true,
            },
            orderBy: {
              createdAt: "desc",
            },
            select: {
              id: true,
              url: true,
              name: true,
            },
          },
          posts: {
            where: {
              published: true,
            },
            orderBy: {
              createdAt: "desc",
            },
            select: {
              _count: {
                select: {
                  usersWhoHaveLiked: true,
                },
              },
              id: true,
              url: true,
              description: true,
              author: {
                select: {
                  username: true,
                },
              },
              usersWhoHaveLiked: {
                where: {
                  username: "cnbcmakeit",
                },
                select: {
                  id: true,
                },
              },
            },
          },
        },
      },
    },
  });

  user.feed.posts = user.feed.posts.map((post) => ({
    ...post,
    likes_total_count: post._count.usersWhoHaveLiked,
    has_liked: post.usersWhoHaveLiked.length === 1,
  }));

  return user;
}

export default async function Home() {
  const user = await getUser();
  const { posts, stories } = user.feed;

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
