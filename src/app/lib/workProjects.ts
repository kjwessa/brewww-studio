import fs from "fs";
import path from "path";


export interface WorkProject {
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

export function workProjects(): WorkProject[] {
  const workProjectsDirectory = path.join(process.cwd(), "src/app/data/work");
  const fileNames = fs.readdirSync(workProjectsDirectory);

  const allWorkProjects = fileNames.map((fileName) => {
    const filePath = path.join(workProjectsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContents) as WorkProject;
  });

  return allWorkProjects;
}
