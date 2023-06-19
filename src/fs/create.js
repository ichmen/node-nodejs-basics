import fs from "fs";
import path from "path";
const fileName = "src/fs/files/fresh.txt";

const create = async () => {
  fs.open(path.join(fileName), "wx", function (err, file) {
    if (err) {
      throw new Error("FS operation failed");
    }
    fs.writeFileSync(file, "I am fresh and young");
    fs.close(file);
  });
  // Write your code here
};

await create();
