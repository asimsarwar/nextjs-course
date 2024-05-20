import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Learn about user management system</h1>
      <Link href="/users">Users Details</Link>
    </main>
  );
}
