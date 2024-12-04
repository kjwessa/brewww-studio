/**
 * This script processes a specified file to convert <img> tags to Next.js <Image> components.
 * It downloads the images referenced in the <img> tags and updates the src attributes to point to local files.
 *
 * Usage:
 * 1. Save this script as `scripts/download-images.mjs`.
 * 2. Run the script with the file path of the component you want to process:
 *    node scripts/download-images.mjs "src/app/components/PreFooter.tsx"
 *
 * The script will:
 * - Read the content of the specified file.
 * - Find all <img> tags and replace them with <Image> components.
 * - Download the images to the /public directory.
 * - Update the src attributes to point to the local files.
 * - Add width and height attributes required by the Next.js <Image> component.
 * - Write the modified content back to the specified file.
 */

import fs from "fs";
import https from "https";
import path from "path";
import { fileURLToPath } from "url";

// Helper to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function main() {
  // Get the file path from the command line arguments
  const filePath = process.argv[2];
  if (!filePath) {
    console.error("Please provide a file path as an argument.");
    process.exit(1);
  }

  // Read the content of the specified file
  let input = fs.readFileSync(filePath, "utf-8");
  const downloads = {};

  // Create the /public/images directory if it doesn't exist
  const publicImagesDir = path.join(__dirname, "../public/images");
  if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
  }

  // Find all the <img> tags and process them
  input = input.replace(/<img\s+(.*?)\/>/gms, (val) => {
    if (val.includes("src=")) {
      // Extract the URL from the src attribute
      const url = val.match(/src="(.*?)"/)[1];
      // Generate a unique ID based on the URL
      const id = path.basename(url, path.extname(url));
      // Replace the src URL with a temporary local URL
      val = val.replace(`src="${url}"`, `src="/${id}.unk"`);
      downloads[url] = id;
    }
    if (val.includes("srcSet=")) {
      // Extract the URLs from the srcSet attribute
      const values = val.match(/srcSet="(.*?)"/)[1];
      const urls = values.split(",");
      let url = urls[0].split(" ")[0];
      url = url.replace(/&width=(.*?)/);
      const id = path.basename(url, path.extname(url));
      // Replace the srcSet URLs with temporary local URLs
      val = val.replace(`srcSet="${values}"`, `src="/${id}.unk"`);
      const sizes =
        urls.map((url) => {
          return url?.trim()?.split(" ")?.[1];
        }) || [];
      val = val.replace(
        /<img/,
        `<img sizes="${sizes.filter((v) => v).join(", ")}"`,
      );
      downloads[url] = id;
    }
    // Add a default alt attribute if missing
    if (!val.includes("alt=")) {
      val = val.replace(
        /<img/,
        '<img alt="Replace with an informative alt text"',
      );
    }
    // Replace <img> with <Image>
    val = val.replace(/<img/, "<Image");
    return val;
  });

  // Download all the images and update the URLs
  await Promise.all(
    Object.keys(downloads).map(async (url) => {
      await new Promise((resolve) => {
        https.get(url, async (response) => {
          // Determine the file extension based on the content type
          let ext = "png";
          const type = response.headers["content-type"];
          if (type.includes("svg")) {
            ext = "svg";
          } else if (type.includes("jpeg") || type.includes("jpg")) {
            ext = "jpg";
          }
          // Modify the file path for saving images
          const imagePath = path.join(
            __dirname,
            `../public/images/${downloads[url]}.${ext}`,
          );
          const file = fs.createWriteStream(imagePath);

          // Download the image to the /public directory
          await new Promise((frs) => {
            response.pipe(file);
            file.on("finish", () => {
              file.close();
              frs();
            });
          });

          // Replace the temporary local URL with the correct URL
          input = input.replace(
            `"/${downloads[url]}.unk"`,
            `"/images/${downloads[url]}.${ext}"`,
          );

          // Determine the image dimensions (required for Next.js <Image>)
          let width = 1000;
          let height = 1000;
          if (ext === "svg") {
            const svgCode = fs.readFileSync(
              path.join(__dirname, `../public/${downloads[url]}.svg`),
              "utf-8",
            );
            width = svgCode.match(/width="(.*?)"/)[1];
            height = svgCode.match(/height="(.*?)"/)[1];
          }

          // Update the width and height attribute addition
          input = input.replace(
            `"/images/${downloads[url]}.${ext}"`,
            `"/images/${downloads[url]}.${ext}" width={${width}} height={${height}}`,
          );

          resolve();
        });
      });
    }),
  );

  // Write the modified content back to the file
  fs.writeFileSync(filePath, input, "utf-8");
  console.log(`Processed file: ${filePath}`);
}

main();
