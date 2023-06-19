import fs from "fs";
import path from "path";
const fileName = "fileToWrite.txt";
const directory = "src/streams/files/";

const write = async () => {
  // Write your code here
  const writer = fs.createWriteStream(path.join(directory, fileName));
  process.stdin.on("data", (data) => {
    writer.write(data);
    process.exit();
  });
};

await write();
