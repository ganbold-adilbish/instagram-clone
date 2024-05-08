import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex">
      <Navbar />
      <main className="md:ml-20 xl:ml-64 w-full">{children}</main>
    </div>
  );
}
