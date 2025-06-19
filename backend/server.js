const express = require("express");
const cors = require("cors");
const { exec } = require("child_process");
const fs = require("fs");
const path = require("path");
require("dotenv").config(); // Load .env variables
const { OpenAI } = require("openai"); // ✅ Correct import
const { Configuration, OpenAIApi } = require("openai");

// OpenAI Setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Stored in .env file
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const TEMP_DIR = path.join(__dirname, "temp");
if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR);

const languageConfigs = {
  cpp: {
    extension: "cpp",
    compile: "g++ -std=c++17 {file} -o {outfile}",
    run: "{outfile}",
    inputFlag: true,
  },
  c: {
    extension: "c",
    compile: "gcc {file} -o {outfile}",
    run: "{outfile}",
    inputFlag: true,
  },
  python: {
    extension: "py",
    run: "python3 {file}",
    inputFlag: true,
  },
  java: {
    extension: "java",
    compile: "javac {file}",
    run: "java -cp {dir} {classname}",
    inputFlag: true,
  },
  javascript: {
    extension: "js",
    run: "node {file}",
    inputFlag: false,
  },
  rust: {
    extension: "rs",
    compile: "rustc {file} -o {outfile}",
    run: "{outfile}",
    inputFlag: true,
  },
  php: {
    extension: "php",
    run: "php {file}",
    inputFlag: true,
  },
typescript: {
  extension: "ts",
  compile: "tsc --project tsconfig.json",
  run: "node out/temp_code.js",
  inputFlag: true,
},

go: {
  extension: "go",
  run: "cd {dir} && go run temp_code.go", // ✅ No full path after cd
  inputFlag: true,
},
};


// Utility function to execute a command
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

// Code Compilation Endpoint
app.post("/compile", async (req, res) => {
  const { language, code, input } = req.body;

  if (!languageConfigs[language]) {
    return res.status(400).json({ output: "❌ Error: Unsupported language" });
  }

  const ext = languageConfigs[language].extension;
  const filename = `temp_code.${ext}`;
  const filepath = path.join(TEMP_DIR, filename);
  const outputFile = path.join(TEMP_DIR, "output");

  try {
    fs.writeFileSync(filepath, code);

    let compileCmd = languageConfigs[language].compile
      ? languageConfigs[language].compile.replace("{file}", filepath).replace("{outfile}", outputFile)
      : "";

    let runCmd = languageConfigs[language].run
      .replace("{file}", filepath)
      .replace("{outfile}", outputFile)
      .replace("{dir}", TEMP_DIR);

    if (language === "java") {
      const classNameMatch = code.match(/class\s+([A-Za-z_][A-Za-z0-9_]*)/);
      if (!classNameMatch) throw new Error("❌ Error: Java class name not found.");
      const className = classNameMatch[1];
      runCmd = runCmd.replace("{classname}", className);
    }

    if (compileCmd) {
      console.log("⏳ Compiling Code...");
      await executeCommand(compileCmd).catch((err) => {
        throw new Error(`❌ Compilation Error:\n${err}`);
      });
    }

    console.log("🚀 Executing Program...");
    const executionResult = await executeCommand(runCmd, input).catch((err) => {
      throw new Error(`❌ Runtime Error:\n${err}`);
    });

    res.json({ output: executionResult || "No output" });
  } catch (error) {
    res.status(500).json({ output: error.message });
  } finally {
    if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
    if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);
  }
});

// Already discussed in last message
/*
app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;

  try {
    const chatResponse = await openai.chat.completions.create({
      model: "gpt-4.1-nano-2025-04-14",
      messages: [
        { role: "system", content: "You are a helpful programming assistant." },
        { role: "user", content: userMessage },
      ],
    });

    const botReply = chatResponse.choices[0].message.content;
    res.json({ response: botReply });
  } catch (error) {
    console.error("OpenAI Error:", error.message);
    res.status(500).json({ response: "Failed to get a response from OpenAI" });
  }
});

*/

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
