import Link from "next/link";

export default function AboutPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert">
      <h1>About me</h1>
      <p>
        I’m Oskar Andrukiewicz (gulis), a 20-year-old Data Science & AI student at WSB Merito.
        I focus on Machine Learning and data analysis. I’ve built several projects and hold a
        Data Scientist certificate from DataCamp as well as a Programmer Technician diploma.
      </p>
      <h2>Focus & skills</h2>
      <ul>
        <li>Machine Learning (classification, regression, CV, basic NLP)</li>
        <li>Data Analysis (Pandas, NumPy, visualization)</li>
        <li>Python ecosystem, Git, basic SQL</li>
      </ul>
      <p>
        More details on <a href="https://github.com/gulis-dev">GitHub</a> ·{" "}
        <a href="https://www.linkedin.com/in/oskar-andrukiewicz">LinkedIn</a>
      </p>
      <p>
        <Link href="#" className="no-underline">
          <span className="inline-block rounded-md border px-3 py-1 shadow-inset-3d">CV</span>
        </Link>
      </p>
    </article>
  );
}