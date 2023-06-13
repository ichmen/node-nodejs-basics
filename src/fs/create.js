import fs from "fs";
const fileName = "files/fresh.txt";

const create = async () => {
  fs.open(fileName, "wx", function (err, file) {
    console.log(err);
    if (err) {
      throw new Error("FS operation failed");
    }
    fs.writeFileSync(file, "I am fresh and young");
    fs.close(file);
  });
  // Write your code here
};

await create();
