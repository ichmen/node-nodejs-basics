import fs from "fs";
import zlib from "zlib";
import { pipeline } from "stream";
const zippedFile = "./files/archive.gz";
const unzippedFile = "./files/fileToDecompress1.txt";

const decompress = async () => {
  // Write your code here
  const inputStream = fs.createReadStream(zippedFile);
  const zipStream = zlib.createGunzip();
  const ooutputStream = fs.createWriteStream(unzippedFile);
  pipeline(inputStream, zipStream, ooutputStream, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

await decompress();
