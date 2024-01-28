import React, { useState } from "react";
import "./Messagebox.css";

const Messagebox = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const toggleChat = () => setShowChat(!showChat);

  const sendMessage = (event) => {
    event.preventDefault();

    if (newMessage !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <div className="chat-container">
      <button className="toggle-button" onClick={toggleChat}>Chat Box</button>

      {showChat && (
        <div className="chatbox">
          <div className="chatbox-header">
            <h4>Chat</h4>
          </div>

          <div className="chatbox-body">
            {messages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>

          <form className="chatbox-footer" onSubmit={sendMessage}>
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Messagebox;
