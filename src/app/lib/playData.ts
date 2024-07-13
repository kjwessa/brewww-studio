import fs from "fs";
import path from "path";

export interface PlayData {
  id: string;
  title: string;
  slug: string;
  thumbnail: string;
  heroImage: string;
  description: string;
  brand?: string;
  type?: string;
  items?: Array<{
    title: string;
    description: string;
    images: Array<{
      url: string;
      alt: string;
    }>;
    externalLink?: {
      url: string;
      label: string;
    };
  }>;
  tags?: string[];
}

export function getPlayProjects(): PlayData[] {
  const playProjectsDirectory = path.join(process.cwd(), "src/app/data/play");
  const fileNames = fs.readdirSync(playProjectsDirectory);

  const allPlayProjects = fileNames.map((fileName) => {
    const filePath = path.join(playProjectsDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContents) as PlayData;
  });

  return allPlayProjects;
}
