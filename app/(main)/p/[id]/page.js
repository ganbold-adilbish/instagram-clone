import Image from "next/image";

const actionButtons = [
  {
    id: 1,
    name: "like-solid",
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

async function getPosts() {
  const data = await fetch(`${process.env.UNSPLASH_API_URL}/photos`, {
    headers: {
      Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
    },
  });
  const posts = await data.json();
  return posts;
}

async function getPost(id) {
  const data = await fetch(`${process.env.UNSPLASH_API_URL}/photos/${id}`, {
    headers: {
      Authorization: `Client-ID ${process.env.ACCESS_KEY}`,
    },
  });
  const post = await data.json();
  return post;
}

export async function generateStaticParams() {
  const posts = await getPosts();

  return posts.map(({ id }) => ({
    id,
  }));
}

export default async function Post({ params }) {
  const { id } = await params;
  const { urls, user, alt_description, likes } = await getPost(id);

  return (
    <div className="md:px-5 pt-14">
      <div className="flex border-b md:border border-gray-200 mx-auto w-full max-w-[937px]">
        <div className="hidden md:block w-full">
          <div className="relative overflow-hidden pb-[100%] ">
            <Image
              priority
              src={urls.regular}
              fill
              alt={alt_description}
              className="object-cover"
              sizes="80vw"
            />
          </div>
        </div>
        <div className="flex flex-col flex-none w-full md:w-[355px]">
          <div className="px-4 py-2 border-b border-gray-200 flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                priority
                src={user.profile_image.large}
                height={32}
                width={32}
                alt={user.username}
              />
            </div>
            <div>
              <strong className="text-sm">{user.username}</strong>
              <span className="mx-1">•</span>
              <strong className="text-sm">Following</strong>
            </div>
          </div>

          <div className="block md:hidden">
            <div className="relative overflow-hidden pb-[100%] ">
              <Image
                priority
                src={urls.regular}
                fill
                alt={alt_description}
                className="object-cover"
                sizes="80vw"
              />
            </div>
          </div>

          <div className="p-4 h-full border-b border-gray-200 hidden md:flex items-start space-x-2 overflow-y-auto">
            <Image
              priority
              src={user.profile_image.large}
              height={32}
              width={32}
              alt={user.username}
              className="rounded-full"
            />
            <div className="flex flex-col">
              <div className="flex items-stretch text-sm leading-[18px]">
                <strong>{user.username}</strong>
                <span className="mx-1">•</span>
                <time dateTime="2024-05-13T05:36:40.000Z">1d</time>
              </div>
              <span className="text-sm">{alt_description}</span>
            </div>
          </div>

          <div className="px-4 py-[6px]">
            <div className="flex justify-between">
              <div className="flex -ml-2">
                {actionButtons.map(({ id, name }) => (
                  <button key={id} className="p-2">
                    <Image
                      src={`/post/${name}.svg`}
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

            <div className="py-1 flex md:hidden items-start space-x-2 overflow-y-auto">
              <div className="flex items-stretch text-sm leading-[18px]">
                <strong>{user.username}</strong>
              </div>
              <span className="text-sm">{alt_description}</span>
            </div>

            <strong className="text-sm">{likes} likes</strong>
            <div>
              <time className="text-xs" dateTime="2024-05-14T12:32:52.000Z">
                36 minutes ago
              </time>
            </div>
          </div>

          <div className="px-4 py-[6px] flex items-start space-x-4">
            <Image
              src={`/post/emoji.svg`}
              height={24}
              width={24}
              alt={"emoji"}
              className=""
            />

            <textarea
              className="resize-none w-full focus:outline-none text-sm overflow-auto"
              placeholder="Add a comment..."
              autoComplete="off"
              autoCorrect="off"
            ></textarea>
            <button className="ml-2 text-sm">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
