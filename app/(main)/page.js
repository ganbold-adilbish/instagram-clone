import Posts from "@/components/Posts";
import Sidebar from "@/components/Sidebar";
import Stories from "@/components/Stories";

async function getUser() {
  const data = await fetch(
    `${process.env.UNSPLASH_API_URL}/users/${process.env.USERNAME}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
      },
    }
  );
  const post = await data.json();
  return post;
}

export default async function Home() {
  const user = await getUser();
  // const { posts, stories } = user.feed;

  return (
    <div className="flex space-x-10 mx-auto w-full max-w-[950px]">
      <div className="flex flex-col items-center w-full max-w-[655px]">
        {/* <Stories stories={stories} />
        <Posts posts={posts} /> */}
      </div>
      <Sidebar {...user} />
    </div>
  );
}
