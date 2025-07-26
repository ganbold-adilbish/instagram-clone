import Image from "next/image";

export default function Story({ profile_image, name }) {
  return (
    <button className="flex flex-col items-center">
      <div className="p-2 pt-1">
        <div className="h-[74px] w-[74px] rounded-full overflow-hidden flex-none ring-2 ring-[rgb(204_204_204)] ring-offset-2">
          <Image
            src={profile_image.large}
            height={74}
            width={74}
            alt="no pic"
          />
        </div>
      </div>
      <h6 className="truncate max-w-[66px] text-sm/[18px] h-4 lowercase">
        {name}
      </h6>
    </button>
  );
}
