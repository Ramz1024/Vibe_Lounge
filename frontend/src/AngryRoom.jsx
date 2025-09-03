// import React from 'react';

// export default function AngryRoom() {
//   return (
//       <div style={{ color: 'white' }}>
//       <h1>Angry Room</h1>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // adjust backend port if needed

export default function AngryRoom() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    socket.emit("join_room", "angry");

    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });

    return () => {
      socket.off("receive_message");
      socket.emit("leave_room", "angry");
    };
  }, []);

  const sendMessage = () => {
    if (input.trim() === "" || username.trim() === "") return;
    socket.emit("send_message", { 
      room: "angry", 
      message: input, 
      username: username 
    });
    setInput("");
  };

  return (
    <div style={{ padding: "20px", background: "#222", color: "white" }}>
      <h1>Angry Room</h1>

      {/* Username Input */}
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your nickname..."
        style={{ padding: "5px", width: "70%", marginBottom: "10px" }}
      />

      <div
        style={{
          border: "1px solid gray",
          padding: "10px",
          marginBottom: "10px",
          height: "200px",
          overflowY: "scroll",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.username}:</strong> {msg.message}
          </div>
        ))}
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        style={{ padding: "5px", width: "70%" }}
      />
      <button onClick={sendMessage} style={{ marginLeft: "10px", padding: "5px" }}>
        Send
      </button>
    </div>
  );
}
