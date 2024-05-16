import Image from "next/image";
import Link from "next/link";

const user = {
  url: "/cnbc.jpeg",
  username: "cnbcmakeit",
  fullName: "CNBC Make It",
  description:
    "Helping you be smarter and more successful with your money, work & life.",
  numberOfPosts: "9,545",
  numberOfFollowers: "825K",
  numberOfFollowingAccounts: "172",
};

const stories = [
  {
    id: 1,
    url: "/cnbcmakeit_story.jpeg",
    name: "Fin Lit",
  },
  {
    id: 2,
    url: "/cnbcmakeit_story.jpeg",
    name: "Fin Lit",
  },
  {
    id: 3,
    url: "/cnbcmakeit_story.jpeg",
    name: "Fin Lit",
  },
  {
    id: 4,
    url: "/cnbcmakeit_story.jpeg",
    name: "Fin Lit",
  },
  {
    id: 5,
    url: "/cnbcmakeit_story.jpeg",
    name: "Fin Lit",
  },
  {
    id: 6,
    url: "/cnbcmakeit_story.jpeg",
    name: "Fin Lit",
  },
  {
    id: 7,
    url: "/cnbcmakeit_story.jpeg",
    name: "Fin Lit",
  },
  {
    id: 8,
    url: "/cnbcmakeit_story.jpeg",
    name: "Fin Lit",
  },
  {
    id: 9,
    url: "/cnbcmakeit_story.jpeg",
    name: "Fin Lit",
  },
  {
    id: 10,
    url: "/cnbcmakeit_story.jpeg",
    name: "Fin Lit",
  },
  {
    id: 11,
    url: "/cnbcmakeit_story.jpeg",
    name: "Fin Lit",
  },
  {
    id: 12,
    url: "/cnbcmakeit_story.jpeg",
    name: "Fin Lit",
  },
  {
    id: 13,
    url: "/cnbcmakeit_story.jpeg",
    name: "Fin Lit",
  },
  {
    id: 14,
    url: "/cnbcmakeit_story.jpeg",
    name: "Fin Lit",
  },
  {
    id: 15,
    url: "/cnbcmakeit_story.jpeg",
    name: "Fin Lit",
  },
];

const posts = [
  {
    id: 1,
    url: "/cnbcmakeit_post.jpeg",
  },
  {
    id: 2,
    url: "/cnbcmakeit_post.jpeg",
  },
  {
    id: 3,
    url: "/cnbcmakeit_post.jpeg",
  },
  {
    id: 4,
    url: "/cnbcmakeit_post.jpeg",
  },
  {
    id: 5,
    url: "/cnbcmakeit_post.jpeg",
  },
  {
    id: 6,
    url: "/cnbcmakeit_post.jpeg",
  },
  {
    id: 7,
    url: "/cnbcmakeit_post.jpeg",
  },
  {
    id: 8,
    url: "/cnbcmakeit_post.jpeg",
  },
  {
    id: 9,
    url: "/cnbcmakeit_post.jpeg",
  },
];

export default function Profile() {
  return (
    <div className="px-5 pt-8 w-full max-w-[935px] mx-auto box-content">
      <header className="flex items-stretch mb-11">
        <div className="flex flex-col justify-center flex-[1_0_0] mr-[30px]">
          <div className="h-[150px] w-[150px] self-center	">
            <Image
              priority
              src={user.url}
              height={150}
              width={150}
              alt={"no picture"}
              className="rounded-full"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-stretch flex-[2_1_30px]">
          <div className="flex space-x-4 items-center mb-5">
            <strong>{user.username}</strong>
            <button className="px-4 py-1 rounded-lg bg-gray-200 text-sm font-semibold h-8">
              Edit profile
            </button>
            <button className="px-4 py-1 rounded-lg bg-gray-200 text-sm font-semibold h-8">
              View archive
            </button>
            <Image
              src="profile/settings.svg"
              height={24}
              width={24}
              alt="settings"
            />
          </div>
          <div className="flex space-x-4 items-center mb-4">
            <div>
              <strong>{user.numberOfPosts}</strong> posts
            </div>
            <div>
              <strong>{user.numberOfFollowers}</strong> followers
            </div>
            <div>
              <strong>{user.numberOfFollowingAccounts}</strong> following
            </div>
          </div>
          <strong>{user.fullName}</strong>
          <div>{user.description}</div>
        </div>
      </header>

      <div>
        <ul className="flex space-x-4 overflow-y-auto">
          {stories.map(({ id, name, url }) => (
            <li
              key={id}
              className="px-4 py-[10px] flex flex-col items-center space-y-4"
            >
              <div className="h-[77px] w-[77px] rounded-full overflow-hidden ring-2 ring-gray-200 ring-offset-2">
                <Image src={url} height={77} width={77} alt={name} />
              </div>
              <strong className="text-cs">{name}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="border w-full border-gray-200 my-[52px]"></div>

      <div>
        <div className="grid grid-cols-3 gap-1">
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
      </div>
    </div>
  );
}
