import fs from "fs";
import path from "path";
const directory = "files";
const fileName = "fileToRead.txt";
const read = async () => {
  // Write your code here
  fs.readFile(
    path.join(directory, fileName),
    { encoding: "utf-8" },
    (err, data) => {
      if (err) {
        throw new Error("FS operation failed");
      }
      console.log(data);
    }
  );
};

await read();
