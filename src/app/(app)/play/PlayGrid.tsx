import { getPlayProjects } from "@/app/lib/playProjects";
import { PlayCard } from "@/app/components/PlayCard";

export function PlayGrid() {
  const playProjects = getPlayProjects();

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h2 className="my-8 text-4xl font-bold">Our Play</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {playProjects.map((project) => (
            <PlayCard
              key={project.id}
              id={project.id}
              title={project.title}
              thumbnail={project.thumbnail}
              slug={project.slug}
            />
          ))}
        </div>
      </div>
    </>
  );
}
