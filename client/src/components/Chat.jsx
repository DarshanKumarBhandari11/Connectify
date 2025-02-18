import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import { FiArrowUp } from "react-icons/fi";

const socket = io("http://localhost:5000");

function Chat() {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const chatContainerRef = useRef(null);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (messageInput.trim() !== "") {
      const message = { text: messageInput, timestamp: new Date() };
      socket.emit("message", message);
      setMessageInput("");
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const scrollToTop = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0;
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gradient-to-br from-red-400 to-red-700">
      <div className="bg-white rounded-lg shadow-xl w-full sm:w-96 h-full sm:h-96 p-6 flex flex-col relative">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-red-500">Connectify</h1>
          <p className="text-sm text-gray-600">
            A cozy corner for lovely conversations 🗨️
          </p>
        </div>

        <div
          ref={chatContainerRef}
          className="flex-1 p-4 overflow-y-auto bg-gradient-to-br from-blue-500 to-pink-700 rounded-lg shadow-inner scrollbar-hide"
          style={{ scrollBehavior: "smooth" }}
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.isOwn ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div
                className={`p-3 max-w-xs rounded-xl ${
                  msg.isOwn ? "bg-red-500 text-white" : "bg-red-100 text-black"
                }`}
              >
                <p><b>{msg.text}</b></p>
                <span className="block text-xs text-gray-500 mt-1">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-2 border-gray-300">
          <div className="flex">
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-l-md outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Type your message..."
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <button
              className="px-6 py-2 bg-red-500 text-white rounded-r-md hover:bg-red-600 focus:ring-2 focus:ring-red-500"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="absolute bottom-24 left-60 p-2 bg-red-500 rounded-full text-white hover:bg-red-600 focus:ring-2 focus:ring-red-500"
        >
          <FiArrowUp size={24} />
        </button>
      </div>
    </div>
  );
}

export default Chat;
