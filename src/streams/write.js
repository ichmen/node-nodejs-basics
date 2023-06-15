import fs from "fs";
const fileName = "./files/fileToWrite.txt";

const write = async () => {
  // Write your code here
  const writer = fs.createWriteStream(fileName);
  process.stdin.on("data", (data) => {
    writer.write(data);
    process.exit();
  });
};

await write();
