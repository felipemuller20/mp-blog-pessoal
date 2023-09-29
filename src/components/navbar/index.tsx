import { livvic } from "@/utils/fonts";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={`mb-8 flex items-center justify-center h-28 text-4xl ${livvic.className}`}>
      <Link href="/">
        <span className="text-blue-500">Tech</span><span>Blog</span>
      </Link>
    </nav>
  )
}