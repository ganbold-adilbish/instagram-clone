import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

async function getUser() {
  const user = await prisma.user.findUnique({
    where: {
      username: "alexmorg123",
    },
    include: {
      _count: {
        select: {
          posts: true,
          followers: true,
          followingUsers: true,
        },
      },
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
          id: true,
          url: true,
        },
      },
    },
  });

  return user;
}

export default async function Profile() {
  const user = await getUser();

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
              <strong>{user._count.posts}</strong> posts
            </div>
            <div>
              <strong>{user._count.followers}</strong> followers
            </div>
            <div>
              <strong>{user._count.followingUsers}</strong> following
            </div>
          </div>
          <strong>{user.fullName}</strong>
          <div>{user.description}</div>
        </div>
      </header>

      <div>
        <ul className="flex space-x-4 overflow-y-auto">
          {user.stories?.map(({ id, name, url }) => (
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
          {user.posts?.map(({ id, url }) => (
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
