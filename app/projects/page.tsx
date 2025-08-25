import { ProjectsGrid } from "@/components/projects-grid";

export default function ProjectsPage() {
  return (
    <>
      <h1 className="text-2xl font-semibold">Projects</h1>
      <div className="mt-6">
        <ProjectsGrid />
      </div>
    </>
  );
}