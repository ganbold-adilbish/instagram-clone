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
  const user = await data.json();
  return user;
}

async function getPosts() {
  const data = await fetch(
    `${process.env.UNSPLASH_API_URL}/photos?page=1&per_page=30`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
      },
    }
  );
  const posts = await data.json();
  return posts;
}

async function getStories() {
  const data = await fetch(
    `${process.env.UNSPLASH_API_URL}/search/users?query=tom&per_page=25`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
      },
    }
  );
  const { results } = await data.json();
  return results;
}

export default async function Home() {
  const user = await getUser();
  const posts = await getPosts();
  const stories = await getStories();

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
