import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream";
const inputFile = "src/zip/files/fileToCompress.txt";
const zippedFile = "src/zip/files/archive.gz";
const compress = async () => {
  // Write your code here
  const inputStream = fs.createReadStream(inputFile);
  const zipStream = zlib.createGzip();
  const outputStream = fs.createWriteStream(zippedFile);
  pipeline(inputStream, zipStream, outputStream, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

await compress();
