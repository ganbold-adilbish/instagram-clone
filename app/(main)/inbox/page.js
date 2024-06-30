import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

async function getUser() {
  const user = await prisma.user.findUnique({
    where: {
      username: "cnbcmakeit",
    },
    select: {
      username: true,
      chats: {
        select: {
          id: true,
          members: {
            where: {
              username: {
                not: "cnbcmakeit",
              },
            },
          },
        },
      },
    },
  });

  return user;
}

export default async function Inbox() {
  const user = await getUser();

  return (
    <div className="flex border-r border-gray-300 h-screen">
      {/* Sidebar */}
      <div className="flex flex-col items-center border-r border-gray-300 w-full max-w-[398px] overflow-hidden">
        <div className="px-6 pt-9 pb-3 min-h-[75px] w-full flex justify-between space-x-10">
          <button className="flex space-x-2 items-center">
            <span className="text-xl font-bold">{user.username}</span>
            <Image
              src="/messages/down-chevron.svg"
              height={12}
              width={12}
              alt="down-chevron"
            />
          </button>
          <div className="h-6 w-6">
            <Image
              src="/messages/new-message.svg"
              height={24}
              width={24}
              alt="new-message"
            />
          </div>
        </div>

        <div className="w-full h-[140px] mb-2"></div>

        <div className="px-6 pt-[14px] pb-[10px] flex items-center w-full">
          <h1 className="text-base font-bold grow">Messages</h1>
          <Link
            href="/requests"
            className="text-sm leading-[18px] font-semibold text-[rgb(115_115_115)]"
          >
            Requests
          </Link>
        </div>

        <div className="w-full">
          {user.chats.map(({ id, members }) => (
            <div
              key={id}
              className="px-6 py-2 flex items-center w-[350px] box-content cursor-pointer hover:bg-zinc-50"
            >
              <div className="pr-3 flex shrink-0">
                <div className="h-14 w-14 rounded-full overflow-hidden">
                  <Image
                    src={members[0].url}
                    height={56}
                    width={56}
                    alt="User avatar"
                  />
                </div>
              </div>
              <div className="flex flex-col shrink-0 grow space-y-1">
                <div className="font-normal text-sm leading-[18px] w-[244px] text-ellipsis overflow-hidden">
                  {members[0].username}
                </div>
                <div className="font-normal text-xs text-[rgb(115_115_115)] text-ellipsis overflow-hidden">
                  {`Active ${members[0].lastActive} ago`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main message */}
      <div className="flex flex-col justify-center items-center text-center w-full">
        <Image
          src="/messages/message.svg"
          height={96}
          width={96}
          alt="message"
        />
        <span className="pt-5 text-xl leading-[25px] font-normal">
          Your messages
        </span>
        <span className="pt-4 text-sm leading-[18px] font-normal text-[rgb(115_115_115)]">
          Send a message to start a chat.
        </span>
        <div className="pt-5">
          <button className="px-4 w-auto h-8 font-semibold text-ellipsis rounded-lg text-white bg-[rgb(0_149_246)] text-sm leading-[18px]">
            Send message
          </button>
        </div>
      </div>
    </div>
  );
}
