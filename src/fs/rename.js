import fs from "fs";
import path from "path";
const fileName = "wrongFilename.txt";
const newFileName = "properFilename.md";
const directory = "files";
const rename = async () => {
  // Write your code here
  if (fs.existsSync(path.join(directory, newFileName))) {
    throw new Error("FS operation failed");
  }
  fs.rename(
    path.join(directory, fileName),
    path.join(directory, newFileName),
    (err) => {
      if (err) {
        throw new Error("FS operation failed");
      }
    }
  );
};

await rename();
