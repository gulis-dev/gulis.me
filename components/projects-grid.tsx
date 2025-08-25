"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { allProjects } from "contentlayer/generated";
const TAGS = ["Machine Learning", "Data Analysis", "Python Projects"] as const;
export function ProjectsGrid() {
  const [filter, setFilter] = useState<string | "all">("all");
  const projects = useMemo(
    () =>
      allProjects
        .sort((a, b) => a.title.localeCompare(b.title))
        .filter((p) => filter === "all" || p.tags.includes(filter)),
    [filter]
  );
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button
          className={`border px-3 py-1 rounded ${filter === "all" ? "bg-neutral-100 dark:bg-neutral-900" : ""}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        {TAGS.map((t) => (
          <button
            key={t}
            className={`border px-3 py-1 rounded ${filter === t ? "bg-neutral-100 dark:bg-neutral-900" : ""}`}
            onClick={() => setFilter(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <ul className="mt-6 grid gap-4">
        {projects.map((p) => (
          <li key={p.slug} className="rounded-lg border p-4 hover:shadow-lg transition-shadow">
            <Link href={p.url} className="no-underline">
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-sm text-neutral-500">{p.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}