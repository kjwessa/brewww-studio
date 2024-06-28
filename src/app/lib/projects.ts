import fs from "fs";
import path from "path";

export interface Project {
  id: string;
  client: string;
  location: string;
  year: string;
  title: string;
  slug: string;
  category: string[];
  services: string[];
  industry: string[];
  thumbnail: string;
  heroImage: string;
  liveUrl: string;
  seo: {
    title: string;
    description: string;
  };
  sections: {
    type: string;
    title?: string;
    content?: string;
    highlights: string[];
  }[];
}

export function getProjects(): Project[] {
  const projectsDirectory = path.join(process.cwd(), "src/app/data/projects");
  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjects = fileNames.map((fileName) => {
    const filePath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContents) as Project;
  });

  return allProjects;
}
