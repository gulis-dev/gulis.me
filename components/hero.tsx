import Link from "next/link";
export function Hero() {
  return (
    <section className="mt-6">
      <h1 className="text-3xl font-semibold">Oskar Andrukiewicz — Data Science & AI student</h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-300">
        I focus on Machine Learning and data analysis. Projects with solid documentation and real insights.
      </p>
      <div className="mt-6 flex gap-3">
        <Link
          href="/projects/"
          className="rounded-md bg-black px-4 py-2 text-white dark:bg-white dark:text-black shadow-inset-3d no-underline"
        >
          View projects
        </Link>
        <Link href="/contact/" className="rounded-md border px-4 py-2 no-underline">
          Contact
        </Link>
      </div>
    </section>
  );
}