import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! Ask me anything about code." }
  ]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = { sender: "user", text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput("");

    try {
      const response = await axios.post("http://localhost:5000/chat", { // or your backend domain
        message: userInput
      });

      const botReply = response.data.response;
      setMessages(prev => [...prev, { sender: "bot", text: botReply }]);
    } catch (error) {
      console.error("Chatbot backend error:", error.message);
      setMessages(prev => [...prev, { sender: "bot", text: " Oops! monthly limit reached. Try again after sometime" }]);
    }
  };

  return (
    <>
      <button className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot-modal">
          <div className="chatbot-header">
            <h3>CodeSphere Chatbot</h3>
            <button onClick={() => setIsOpen(false)}>✖</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chatbot-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={userInput}
              placeholder="Ask about code, errors, etc..."
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
