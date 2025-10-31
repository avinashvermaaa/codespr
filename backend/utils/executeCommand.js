import { exec } from "child_process";

const executeCommand = (command, input = "") =>
  new Promise((resolve, reject) => {
    console.log(`🛠️ Executing: ${command}`);
    const process = exec(command, { timeout: 5000 }, (error, stdout, stderr) => {
      console.log("📤 STDOUT:", stdout);
      console.log("📥 STDERR:", stderr);
      if (error) {
        console.error("❌ Execution Error:", error.message);
        reject(stderr || error.message);
      } else {
        resolve(stdout);
      }
    });

    if (input) {
      console.log("📌 Passing Input:", input);
      process.stdin.write(input + "\n");
      process.stdin.end();
    }
  });

export { executeCommand };
