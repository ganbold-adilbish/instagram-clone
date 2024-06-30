import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

async function getPosts() {
  const posts = await prisma.post.findMany({
    where: {
      published: true,
    },
  });
  posts.sort(() => 0.5 - Math.random());

  return posts;
}

export default async function Explore() {
  const posts = await getPosts();

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
