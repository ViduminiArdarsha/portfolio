import Section from "@/app/components/Section";
import ProjectPageCard from "@/app/components/ProjectPageCard";

export default function ProjectsPage() {
  return (
    <Section title="All Projects">
      <div className="grid grid-cols-3 gap-10">
        <ProjectPageCard slug="project-1" />
        <ProjectPageCard slug="project-2" />
        <ProjectPageCard slug="project-3" />
        <ProjectPageCard slug="project-4" />
      </div>
    </Section>
  );
}
