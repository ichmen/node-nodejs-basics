import fs from "fs";
import path from "path";
const dirName = "./src/fs/files";
const newDirName = "./src/fs/files_copy";
const copy = async () => {
  // Write your code here
  new Promise((resolve, reject) => {
    fs.readdir(path.join(dirName), function (err, files) {
      resolve(files);
    });
  })
    .then((files) => {
      fs.mkdirSync(path.join(newDirName));
      return files;
    })
    .then((files) =>
      files.forEach((file) => {
        fs.copyFileSync(
          path.join(dirName, file),
          path.join(newDirName, file),
          fs.constants.COPYFILE_EXCL
        );
      })
    )
    .catch((err) => {
      console.error(err);
      throw new Error("FS operation failed");
    });
};

//   try {
//     fs.readdir(path.join(dirName), function (err, files) {
//       fs.mkdirSync(path.join(newDirName));
//       files.forEach((file) => {
//         fs.copyFileSync(
//           path.join(dirName, file),
//           path.join(newDirName, file),
//           fs.constants.COPYFILE_EXCL
//         );
//       });
//     });
//   } catch (err) {
//     throw new Error("FS operation failed3");
//   }
//   // console.log("files are copied successfully");
// };

await copy();
