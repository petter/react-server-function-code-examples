import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <Link href="/post">Posts</Link>
      <Link href="/action-example">Action Example</Link>
      <Link href="/pre-server-functions">Pre Server Functions</Link>
    </div>
  );
}
