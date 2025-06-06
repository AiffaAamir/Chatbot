import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  async function generateAnswer() {
    if (!question.trim()) return;

    setIsTyping(true);
    const newChat = [...chat, { sender: "user", text: question }];
    setChat(newChat);
    setQuestion("");

    try {
      const response = await axios({
        url:
          "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyC3i-v8jo6U4QIMY52ZSoiaTrzXUui_qXI",
        method: "post",
        data: {
          contents: [
            {
              parts: [{ text: question }],
            },
          ],
        },
      });

      const answer =
        response.data.candidates[0].content.parts[0].text || "No response.";
      setChat([...newChat, { sender: "bot", text: answer }]);
    } catch (err) {
      setChat([
        ...newChat,
        { sender: "bot", text: "Something went wrong. Try again." },
      ]);
    }

    setIsTyping(false);
  }

  return (
    <div className="chat-container">
      <div className="chat-box">
        {chat.map((msg, i) => (
          <div
            key={i}
            className={`chat-bubble ${msg.sender === "user" ? "user" : "bot"}`}
          >
            {msg.text}
          </div>
        ))}
        {isTyping && <div className="typing">AI is typing...</div>}
      </div>
      <div className="input-box">
        <textarea
          className="chat-input"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask me anything..."
        ></textarea>
        <button className="send-button" onClick={generateAnswer}>
          " ➤ "
        </button>
      </div>
    </div>
  );
}

export default App;
