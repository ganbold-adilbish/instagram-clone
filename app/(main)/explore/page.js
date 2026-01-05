import Image from "next/image";
import Link from "next/link";

async function getRandomPosts() {
  const randomPageNumber = Math.ceil(Math.random() * 100);
  const data = await fetch(
    `${process.env.UNSPLASH_API_URL}/photos?page=${randomPageNumber}&per_page=30`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
      },
    }
  );
  const posts = await data.json();
  return posts;
}

export default async function Explore() {
  const posts = await getRandomPosts();

  return (
    <div className="px-3 my-10 grid grid-cols-3 gap-1  mx-auto w-full max-w-[992px]">
      {posts.map(({ id, urls }) => (
        <Link key={id} href={`/p/${id}`}>
          <div className="relative overflow-hidden pb-[100%]">
            <Image
              priority
              src={urls.regular}
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
