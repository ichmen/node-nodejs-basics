const parseEnv = () => {
  // Write your code here
  Object.entries(process.env).forEach(([name, value]) => {
    if (name.startsWith("RSS")) {
      process.stdout.write(`${name}=${value}; `);
    }
  });
};

parseEnv();
