import React, { useState } from 'react';
import axios from 'axios';

function CompilerPage({ language }) {
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleRunCode = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/compile', {
        language,
        code,
        input,
      });
      setOutput(response.data.output);
    } catch (error) {
      setOutput('Error compiling code.');
    }
  };

  return (
    <div>
      <h1>Code Compiler for {language}</h1>
      <textarea
        placeholder="Write your code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <textarea
        placeholder="Input (optional)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleRunCode}>Run Code</button>
      <div>
        <h3>Output</h3>
        <pre>{output}</pre>
      </div>
    </div>
  );
}

export default CompilerPage;
