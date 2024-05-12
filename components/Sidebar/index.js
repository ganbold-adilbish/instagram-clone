import Image from "next/image";
import Suggestion from "../Suggestion";
import Footer from "../Footer";

const suggestions = [
  {
    id: 1,
    profileName: "audi",
    picUrl: "/audi.jpeg",
  },
  {
    id: 2,
    profileName: "audi",
    picUrl: "/audi.jpeg",
  },
  {
    id: 3,
    profileName: "audi",
    picUrl: "/audi.jpeg",
  },
  {
    id: 4,
    profileName: "audi",
    picUrl: "/audi.jpeg",
  },
];

export default function Sidebar({ url, username, fullName }) {
  return (
    <aside className="hidden lg:block">
      <div className="mt-4 flex flex-col space-y-4 w-full max-w-[320px]">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div className="h-14 w-14 rounded-full flex-none overflow-hidden">
              <Image src={url} height={56} width={56} alt="no pic" />
            </div>
            <div className="flex flex-col justify-center text-sm">
              <strong className="w-14 text-gray-500">{username}</strong>
              <span>{fullName}</span>
            </div>
          </div>
          <button className="text-blue-500">Switch</button>
        </div>

        <div className="flex justify-between mt-5">
          <span>Suggestions for you</span>
          <span>See All</span>
        </div>

        {suggestions.map((suggestion) => (
          <Suggestion key={suggestion.id} {...suggestion} />
        ))}
      </div>

      <Footer />
    </aside>
  );
}
