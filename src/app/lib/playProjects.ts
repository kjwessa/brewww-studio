import fs from "fs";
import path from "path";

export interface PlayProject {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  heroImage: string;
  description: string;
}

export function getPlayProjects(): PlayProject[] {
  const playProjectsDirectory = path.join(process.cwd(), "src/app/data/play");
  const fileNames = fs.readdirSync(playProjectsDirectory);

  const allPlayProjects = fileNames.map((fileName) => {
    const filePath = path.join(playProjectsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContents) as PlayProject;
  });

  return allPlayProjects;
}
