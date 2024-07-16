import fs from "fs";
import path from "path";
import { TestimonialData } from "@/types/testimonialTypes";

export function getTestimonialData(): TestimonialData[] {
  const testimonialDataDirectory = path.join(
    process.cwd(),
    "src/app/data/testimonials",
  );
  const fileNames = fs.readdirSync(testimonialDataDirectory);

  const allTestimonialData = fileNames.map((fileName) => {
    const filePath = path.join(testimonialDataDirectory, fileName);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(fileContents) as TestimonialData;
  });

  return allTestimonialData;
}
