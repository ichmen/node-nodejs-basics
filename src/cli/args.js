const parseArgs = () => {
  // Write your code here
  const argsArray = process.argv.slice(2);
  for (let i = 0; i < argsArray.length; i += 2) {
    console.log(`${argsArray[i].slice(2)} is ${argsArray[i + 1]}`);
  }
};

parseArgs();
