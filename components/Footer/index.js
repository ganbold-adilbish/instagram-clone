export default function Footer() {
  return (
    <div className="text-xs text-gray-300 mt-10">
      <div>About · Help · Press · API · Jobs · Privacy · Terms</div>
      <div>Locations · Language · Meta Verified</div>
      <div className="mt-4">{`© ${new Date().getFullYear()} INSTAGRAM FROM META`}</div>
    </div>
  );
}
