import { Transform } from "stream";
const transform = async () => {
  // Write your code here
  const revStream = new Transform({
    transform(chunk) {
      this.push(chunk.toString().split("").reverse().join(""));
    },
  });
  process.stdin.pipe(revStream).pipe(process.stdout);
};
await transform();
