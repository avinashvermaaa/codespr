import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CodeMirror from "@uiw/react-codemirror";

//  Language Imports
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { python } from "@codemirror/lang-python";

import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from "@codemirror/lang-javascript";
import { json } from '@codemirror/lang-json';
import { xml } from '@codemirror/lang-xml';
import { angular } from '@codemirror/lang-angular'; 
import { vue } from '@codemirror/lang-vue'; 

import { sql } from "@codemirror/lang-sql";
import { markdown } from '@codemirror/lang-markdown';
import { yaml } from '@codemirror/lang-yaml';
import { go } from '@codemirror/lang-go';
import { php } from "@codemirror/lang-php";
import { rust } from '@codemirror/lang-rust';

// Theme
// import { dracula } from "@uiw/codemirror-theme-dracula"; // old dracula theme
// import { darcula } from "@uiw/codemirror-theme-darcula"; 
import { monokai } from '@uiw/codemirror-theme-monokai';
import "./CompilerPage.css";
import Chatbot from "./Chatbot"; // OpenAi Chatgpt integrate

const BACKEND_URL = "https://spherecodes.onrender.com";

const languageModes = {
  cpp: cpp(), python: python(), java: java(), javascript: javascript(), html: html(), css: css(), json: json(),
  xml: xml(), sql: sql(), markdown: markdown(), yaml: yaml(), go: go(), php: php(), rust: rust(), vue: vue(),
  angular: angular(),
};

const languageExtensions = {
  html: "html", python: "py", cpp: "cpp", c: "c", java: "java", javascript: "js", sql: "sql", php: "php",
  assembly: "asm", "c#": "cs", lua: "lua", nodejs: "js", mongodb: "json", groovy: "groovy",
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

  const defaultExtension = languageExtensions[language?.toLowerCase()] || "txt";
  const [fileName, setFileName] = useState(`${language}_code.${defaultExtension}`);
  const languageMode = languageModes[language?.toLowerCase()] || cpp();

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
      setOutput(`Error: ${error.message}`);
    }
  };

  const renameCode = () => {
    const newName = prompt("Enter new file name (without extension):");
    if (newName) setFileName(`${newName}.${defaultExtension}`);
  };

  const downloadCode = () => {
    const element = document.createElement("a");
    const file = new Blob([code], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="compiler-page">
      <div className="header">
        <h2>CodeSphere: {language} Compiler</h2>
        <div className="header-buttons">
          <button className="header-button" onClick={renameCode}>Rename</button>
          <button className="header-button" onClick={downloadCode}>Download</button>
          <button className="header-button" onClick={runCode}>Run Code</button>
        </div>
      </div>

      <div className="compiler-container">
        <div className="code-editor">
          <h3 className="code-editor-title">Code Editor :- {language}</h3>
          <CodeMirror
            value={code}
            onChange={(value) => setCode(value)}
            placeholder={`Write your ${language} code here...`}
            className="code-mirror"
            theme={monokai}
            extensions={[languageMode]}
            style={{
              height: "100%",
              overflow: "auto",
            }}
          />
        </div>

        <div className="input-output-container">
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

      <Chatbot /> {/*  Added the chatbot at the bottom-right */}
    </div>
  );
}

export default CompilerPage;
