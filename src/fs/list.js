import fs from "fs";
import path from "path";
const directory = "files2";
const list = async () => {
  // Write your code here
  fs.readdir(directory, (err, files) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    files.forEach((file) => console.log(file));
  });
};

await list();
