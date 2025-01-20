import Image from "next/image";

const actionButtons = [
  {
    id: 1,
    name: "like",
  },
  {
    id: 2,
    name: "comment",
  },
  {
    id: 3,
    name: "share-post",
  },
];

const saveButton = {
  name: "save",
};

export default function Post({ urls, description, liked_by_user, user }) {
  return (
    <div className="p-4 md:p-0 my-20 w-[468px] text-sm">
      <Image
        priority
        src={urls.regular}
        height={0}
        width={0}
        alt={"no picture"}
        className="rounded-sm w-full"
        sizes="100vw"
      />
      <div className="flex py-4 justify-between">
        <div className="flex space-x-2">
          {actionButtons.map(({ id, name }) => (
            <button key={id}>
              <Image
                src={`/post/${name}${
                  liked_by_user && name === "like" ? "-solid" : ""
                }.svg`}
                height={24}
                width={24}
                alt={name}
              />
            </button>
          ))}
        </div>
        <button>
          <Image
            src={`/post/${saveButton.name}.svg`}
            height={24}
            width={24}
            alt={saveButton.name}
          />
        </button>
      </div>
      <h1 className="font-bold">{user.total_likes} likes</h1>
      <p className="mt-2">
        <span className="font-bold">{user.name}</span> {description}
      </p>
    </div>
  );
}
