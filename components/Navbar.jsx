import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-3 bg-slate-800">
          <Link href={'/'} className="text-white font-bold">websolapp.net</Link>
          <Link href={'/addTopic'} className="bg-white p-2">Add a Topic</Link>
    </nav>
  );
}
