import Image from "next/image";

export default function Story({ url, name }) {
  return (
    <button className="flex flex-col items-center space-y-2">
      <div className="h-14 w-14 rounded-full overflow-hidden flex-none ring-2 ring-gray-200 ring-offset-2">
        <Image src={url} height={56} width={56} alt="no pic" />
      </div>
      <h6 className="truncate w-14 text-xs text-gray-500">{name}</h6>
    </button>
  );
}
