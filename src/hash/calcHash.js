import fs from "fs";
import crypto from "crypto";
const fileName = "src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  // Write your code here
  fs.readFile(fileName, (err, data) => {
    const hash = crypto.createHash("sha256").update(data).digest("hex");
    console.log(hash);
  });
};

await calculateHash();
