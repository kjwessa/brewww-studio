import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFilePath = path.join(__dirname, "memory-usage.log");

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + " Bytes";
  else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";
  else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";
  else return (bytes / 1073741824).toFixed(3) + " GB";
}

function logMemoryUsage() {
  const used = process.memoryUsage();
  const timestamp = new Date().toISOString();

  const log = `${timestamp} - RSS: ${formatBytes(used.rss)}, Heap Total: ${formatBytes(used.heapTotal)}, Heap Used: ${formatBytes(used.heapUsed)}, External: ${formatBytes(used.external)}\n`;

  console.log(log);
  try {
    fs.appendFileSync(logFilePath, log);
  } catch (err) {
    console.error("Error writing to log file:", err);
  }
}

// Ensure the log file exists
try {
  fs.writeFileSync(logFilePath, ""); // This will create the file if it doesn't exist, or clear it if it does
  console.log(`Log file created at: ${logFilePath}`);
} catch (err) {
  console.error("Error creating log file:", err);
}

// Log memory usage every 5 seconds
setInterval(logMemoryUsage, 5000);

console.log("Memory monitoring started. Press Ctrl+C to stop.");
