import fs from "fs";
import path from "path";
const fileName = "fileToRemove.txt";
const directory = "files";
const remove = async () => {
  // Write your code here
  fs.unlink(path.join(directory, fileName), (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

await remove();
