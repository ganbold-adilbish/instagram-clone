import Story from "../Story";

export default function Stories({ stories }) {
  return (
    <div className="flex space-x-4 px-[9px] py-2 w-full max-w-[630px] overflow-x-auto">
      {stories.map((story) => (
        <Story key={story.id} {...story} />
      ))}
    </div>
  );
}
