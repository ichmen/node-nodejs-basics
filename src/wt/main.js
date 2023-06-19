import { Worker } from "worker_threads";
import os from "os";
const performCalculations = async () => {
  // Write your code here
  const coresNumber = os.cpus().length;
  let result = new Array(coresNumber);
  let finishedWorkers = 0;

  for (let i = 0; i < coresNumber; i += 1) {
    const worker = new Worker("./src/wt/worker.js", {
      workerData: { number: 10 + i },
    });
    worker.on("message", (message) => {
      if (message.status === "resolved") {
        result[i] = ['status-"resolved"', `data - ${message.result}`];
      } else if ((message.status = "error")) {
        result[i] = ['status-"error"', "data - null"];
      }
      finishedWorkers += 1;
      if (finishedWorkers === coresNumber) {
        console.log(result);
      }
    });
  }
};

await performCalculations();
