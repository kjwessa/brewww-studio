import fs from "fs";
import path from "path";
import { ServiceData } from "@/types/serviceTypes";

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
