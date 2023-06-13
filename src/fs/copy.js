import fs from "fs";
import path from "path";
const dirName = "files";
const newDirName = "files_copy";
const copy = async () => {
  // Write your code here
  fs.readdir(dirName, function (err, files) {
    if (err) {
      throw new Error("FS operation failed");
    }
    fs.mkdir(newDirName, (err) => {
      if (err) {
        throw new Error("FS operation failed");
      }
    });
    files.forEach((file) => {
      fs.copyFile(
        path.join(dirName, file),
        path.join(newDirName, file),
        fs.constants.COPYFILE_EXCL,
        function (err) {
          if (err) {
            throw new Error("FS operation failed");
          }
        }
      );
    });
  });
};

await copy();
