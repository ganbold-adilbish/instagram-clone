import Image from "next/image";

export default function Suggestion({ picUrl, profileName }) {
  return (
    <div className="flex justify-between">
      <div className="flex space-x-4">
        <Image
          src={picUrl}
          height={32}
          width={32}
          alt="no pic"
          className="rounded-full flex-none"
        />
        <div className="flex flex-col justify-center">
          <strong className="w-14 text-xs text-gray-500">{profileName}</strong>
        </div>
      </div>
      <button className="text-blue-500">Follow</button>
    </div>
  );
}
