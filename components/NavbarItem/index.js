"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItem(props) {
  const { title, name, path } = props;
  const pathname = usePathname();

  return (
    <Link
      href={path || ""}
      className="p-3 flex space-x-4 items-center text-lg hover:bg-gray-50 hover:rounded-full group"
    >
      <Image
        src={`/navbar/${name}${pathname == path ? "-solid" : ""}.svg`}
        height={24}
        width={24}
        alt={name}
        className="transform group-hover:scale-110"
      />
      <h1 className="hidden xl:block">{title}</h1>
    </Link>
  );
}
