import Post from "../Post";

export default function Posts({ posts }) {
  return (
    <div className="w-[468px]">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}
