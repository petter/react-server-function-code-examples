import Link from "next/link";
import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="flex flex-col gap-4 items-start">
        <nav className="w-full bg-pink-200 px-4 py-2">
          <Link href="/" className="!border-0 !text-pink-800 font-bold">
            Home
          </Link>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
