import { allProjects } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { Mdx } from "@/components/mdx";
import Link from "next/link";

export const generateStaticParams = async () =>
  allProjects.map((p) => ({ slug: p.slug }));

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = allProjects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <article className="prose prose-neutral dark:prose-invert">
      <h1>{project.title}</h1>
      <p className="text-sm text-neutral-500">{project.summary}</p>
      <p className="not-prose mt-2 flex flex-wrap gap-3">
        <a className="underline" href={project.repoUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
        {project.demoUrl ? (
          <a className="underline" href={project.demoUrl} target="_blank" rel="noreferrer">
            Demo
          </a>
        ) : null}
      </p>
      <Mdx code={project.body.code} />
      <hr />
      <p>
        <Link href="/projects/" className="underline">
          ← Back to projects
        </Link>
      </p>
    </article>
  );
}