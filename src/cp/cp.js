import { spawn } from "child_process";
const scriptName = "./src/cp/files/script.js";
const spawnChildProcess = async (args) => {
  // Write your code here
  const child = spawn("node", [scriptName, ...args]);
  child.stdout.on("data", (data) => process.stdout.write(data));
  process.stdin.on("data", (data) => child.stdin.write(data));
};

// Put your arguments in function call to test this functionality
spawnChildProcess([22, 33]);
