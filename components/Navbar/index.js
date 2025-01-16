import Image from "next/image";
import Link from "next/link";
import NavbarItem from "../NavbarItem";
import More from "../More";

const navbarItems = [
  {
    id: 1,
    title: "Home",
    name: "home",
    path: "/",
  },
  {
    id: 2,
    title: "Search",
    name: "search",
  },
  {
    id: 3,
    title: "Explore",
    name: "explore",
    path: "/explore",
  },
  // {
  //   id: 4,
  //   title: "Reels",
  //   name: "reels",
  //   path: "/reels",
  // },
  {
    id: 5,
    title: "Messages",
    name: "messages",
    path: "/inbox",
  },
  {
    id: 6,
    title: "Notifications",
    name: "notifications",
  },
  // {
  //   id: 7,
  //   title: "Create",
  //   name: "create",
  //   path: "/create",
  // },
  {
    id: 8,
    title: "Profile",
    name: "profile",
    path: "/profile",
  },
];

export default function Navbar() {
  return (
    <nav className="hidden md:block">
      <div className="px-3 pt-2 pv-5 w-20 xl:w-64 flex flex-col items-center xl:items-start border-r border-gray-300 h-screen fixed">
        <div className="px-3 pt-6 pb-4 mb-5">
          <Link href={"/"}>
            <Image
              src="/navbar/instagram.svg"
              height={29}
              width={103}
              alt="Instagram"
              className="hidden xl:block"
              priority
            />
            <Image
              src="/navbar/instagram-logo.svg"
              height={24}
              width={24}
              alt="Instagram"
              className="block xl:hidden"
            />
          </Link>
        </div>
        <div className="flex flex-col justify-between h-screen w-full">
          <div className="space-y-2">
            {navbarItems.map((navbarItem) => (
              <NavbarItem key={navbarItem.id} {...navbarItem} />
            ))}
          </div>
          <More />
        </div>
      </div>
    </nav>
  );
}
