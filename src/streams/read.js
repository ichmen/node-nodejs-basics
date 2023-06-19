import { stdout } from "process";
import fs from "fs";
const file = "src/streams/files/fileToRead.txt";
const read = async () => {
  // Write your code here
  const fileStream = fs.createReadStream(file);
  fileStream.pipe(stdout);
};

await read();
