const parseEnv = () => {
  // Write your code here
  Object.entries(process.env).forEach(([name, value]) =>
    console.log(`RSS_${name}=${value}`)
  );
};

parseEnv();
