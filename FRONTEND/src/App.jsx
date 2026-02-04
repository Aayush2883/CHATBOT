import { useState, useRef, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";
import { use } from "react";

export default function App() {
  const [socket, setSocket] = useState(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hello bro! Ask your question",
      time: new Date(),
    },
  ]);

  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  const formatTime = (date) =>
    new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "user",
      text: input,
      time: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    socket.emit("message", input);

    // fake bot reply
    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        sender: "bot",
        text: "...",
        time: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    let socketInstance = io("http://localhost:3000");
    setSocket(socketInstance);

    socketInstance.on("message-response", (response) => {
      // Remove the "Generating analysis for you now..." message
      setMessages((prev) =>
        prev.filter((msg) => msg.text !== "Generating analysis for you now...")
      );

      const botMsg = {
        id: Date.now(),
        sender: "bot",
        text: response,
        time: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    });
  },[]);

  return (
    <div className="chat-wrapper">

      {/* Header */}
      <header className="chat-header">
        ⚡AI Number 1
      </header>

      {/* Messages */}
      <div className="chat-body">
        {messages.map((msg) => (
          <div key={msg.id} className={`message-row ${msg.sender}`}>
            <div className="bubble">
              <p>{msg.text}</p>
              <span className="timestamp">{formatTime(msg.time)}</span>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>➤</button>
      </div>

    </div>
  );
}
