import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./CompilerPage.css";

function CompilerPage() {
  const { language } = useParams();
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const runCode = () => {
    setOutput(`Running ${language} code:\n${code}\nWith Input:\n${input}`);
  };

  return (
    <div className="compiler-page">
      <h2>{language} Compiler</h2>

      <div className="compiler-container">
        <div className="code-editor">
          <h3>Code Editor</h3>
          <textarea value={code} onChange={(e) => setCode(e.target.value)}
            placeholder={`Write your ${language} code here...`}
          />
          <button className="run-button" onClick={runCode}>
            Run Code
          </button>
        </div>

        <div className="input-output-section">
          <div className="input-box">
            <h3>Input</h3>
            <textarea value={input} onChange={(e) => setInput(e.target.value)}
              placeholder="Enter input for your program..."
            />
          </div>

          <div className="output-box">
            <h3>Output</h3>
            <textarea value={output} readOnly
              placeholder="Output will appear here..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompilerPage;
