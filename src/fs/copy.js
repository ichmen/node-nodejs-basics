import fs from "node:fs/promises";
import path from "path";
const dirName = "src/fs/files";
const newDirName = "src/fs/files_copy";
const copy = async () => {
  // Write your code here
  fs.readdir(dirName, async function (err, files) {
    if (err) {
      throw new Error("FS operation failed1");
    }
    fs.mkdir(newDirName, { recursive: false }, (err) => {
      if (err) {
        throw new Error("FS operation failed2");
      }
      console.log("directory created");
    }).then(() =>
      files.forEach((file) => {
        fs.copyFile(
          path.join(dirName, file),
          path.join(newDirName, file),
          fs.constants.COPYFILE_EXCL,
          function (err) {
            if (err) {
              console.log("here");
              throw new Error("FS operation failed3");
            }
          }
        );
      })
    );
  });
  // console.log("files are copied successfully");
};

await copy();
