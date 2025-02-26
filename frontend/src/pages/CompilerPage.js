import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./CompilerPage.css";

const BACKEND_URL = "https://spherecode.onrender.com"; // Your deployed backend

// Language/Framework/Database to extension mapping
const languageExtensions = {
  html: "html", python: "py", cpp: "cpp", c: "c", java: "java", javascript: "js", mysql: "sql", php: "php",
  assembly: "asm", "c#": "cs", lua: "lua", "pl/sql": "sql", nodejs: "js", mongodb: "json", groovy: "groovy",
  ruby: "rb", go: "go", scala: "scala", r: "r", perl: "pl", kotlin: "kt", pascal: "pas", cobol: "cbl",
  fortran: "f", bash: "sh", clojure: "clj", typescript: "ts", prolog: "pl", rust: "rs", swift: "swift",
  "objective-c": "m", coffeescript: "coffee", ejs: "ejs", materialize: "css", bootstrap: "css", jquery: "js",
  css: "css", foundation: "css", bulma: "css", uikit: "css", "semantic ui": "css", skeleton: "css",
  milligram: "css", react: "jsx", angular: "ts", vue: "vue", vue3: "vue", backbonejs: "js", oracle: "sql", 
  postgresql: "sql", sqlite: "sql", redis: "rdb", mariadb: "sql", "sql server": "sql",
};

function CompilerPage() {
  const { language } = useParams();
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  // Determine the correct file extension for the language
  const defaultExtension = languageExtensions[language?.toLowerCase()] || "txt";
  const [fileName, setFileName] = useState(
    `${language}_code.${defaultExtension}`
  );

  // Function to send code to the backend for execution
  const runCode = async () => {
    setOutput("Running...");

    try {
      const response = await fetch(`${BACKEND_URL}/compile`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ language, code, input }),
      });

      const data = await response.json();
      setOutput(data.output || "Error: No output received.");
    } catch (error) {
      setOutput(`Error running code: ${error.message}`);
    }
  };

  // Rename file
  const renameCode = () => {
    const newName = prompt(
      "Enter new file name (without extension):",
      fileName.replace(`.${defaultExtension}`, "")
    );
    if (newName) setFileName(`${newName}.${defaultExtension}`);
  };

  // Download code
  const downloadCode = () => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="compiler-page">
      <div className="header">
        <h2>CodeSphere: {language} Compiler</h2>
        <div className="header-buttons-container">
          <div className="header-buttons">
            <button className="header-button" onClick={renameCode}>
              Rename
            </button>
            <button className="header-button" onClick={downloadCode}>
              Download
            </button>
            <button className="header-button" onClick={runCode}>
              Run Code
            </button>
          </div>
        </div>
      </div>

      <div className="compiler-container">
        <div className="code-editor">
          <h3>Code Editor</h3>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder={`Write your ${language} code here...`}
          />
        </div>

        <div className="input-output-section">
          <div className="input-box">
            <h3>Input</h3>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter input for your code..."
            />
          </div>

          <div className="output-box">
            <h3>Output</h3>
            <textarea
              value={output}
              readOnly
              placeholder="Output of your code..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompilerPage;
