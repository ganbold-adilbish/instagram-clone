import Story from "../Story";

export default function Stories({ stories }) {
  return (
    <div className="flex space-x-4 p-4 w-full max-w-[655px] overflow-x-auto">
      {stories.map((story) => (
        <Story key={story.id} {...story} />
      ))}
    </div>
  );
}
