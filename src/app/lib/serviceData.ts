import fs from "fs";
import path from "path";

export interface HeroSection {
  headline: string;
  description: string;
}

export interface Services {
  serviceOne: string[];
  serviceTwo: string[];
}

export interface ServiceData {
  id: string;
  pageTitle: string;
  slug: string;
  featuredImg: string;
  heroSection: HeroSection;
}

export function getServiceData(): ServiceData[] {
  const serviceDataDirectory = path.join(
    process.cwd(),
    "src/app/data/services",
  );
  const fileNames = fs.readdirSync(serviceDataDirectory);

  const allServicePages = fileNames.map((fileName) => {
    const filePath = path.join(serviceDataDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContents) as ServiceData;
  });

  return allServicePages;
}