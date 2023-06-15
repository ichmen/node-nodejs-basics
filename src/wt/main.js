import { Worker } from "worker_threads";
import os from "os";
const performCalculations = async () => {
  // Write your code here
  const coresNumber = os.cpus().length;
  console.log(coresNumber);
  const worker = new Worker("./worker.js", { workerData: { number: 2 } });
  worker.on("message", (message) => console.log(message));
  worker.on("exit", (code) => console.log(code));
};

await performCalculations();
