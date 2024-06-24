import fs from "fs";
import path from "path";
import { WorkCard } from "@/app/components/WorkCard";

interface Project {
  id: string;
  client: string;

  title: string;
  thumbnail: string;
}

function getProjects(): Project[] {
  const projectsDirectory = path.join(process.cwd(), "src/app/data/projects");
  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjects = fileNames.map((fileName) => {
    const filePath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const projectData = JSON.parse(fileContents);

    return {
      id: projectData.id,
      client: projectData.client,
      title: projectData.title,
      thumbnail: projectData.thumbnail,
    };
  });

  return allProjects;
}

export function WorkGrid() {
  const projects = getProjects();

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <h2 className="my-8 text-4xl font-bold">Our Work</h2>
        <div className="lg: grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <WorkCard
              id={project.id}
              key={project.id}
              client={project.client}
              thumbnail={project.thumbnail}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}
