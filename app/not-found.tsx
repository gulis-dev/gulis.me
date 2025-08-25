import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-300">
        Sorry, the page you are looking for does not exist.
      </p>
      <p className="mt-4">
        <Link href="/" className="underline">Go to homepage</Link>
      </p>
    </main>
  );
}