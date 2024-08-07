import { WorkCard } from "@/app/components/WorkCard";
import { workProjects } from "@/app/lib/workData";
export function WorkGrid() {
  const projects = workProjects();

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h2 className="my-8 text-4xl font-bold">Our Work</h2>
        <div className="lg: grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <WorkCard
              id={project.id}
              key={project.id}
              client={project.client}
              thumbnail={project.thumbnail}
              title={project.title}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
}
