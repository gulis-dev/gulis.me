import { Hero } from "@/components/hero";
import { ProjectsGrid } from "@/components/projects-grid";

export default function Page() {
  return (
    <>
      <Hero />
      <section className="mt-14">
        <ProjectsGrid />
      </section>
    </>
  );
}