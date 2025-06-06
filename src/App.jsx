import { useState } from "react";
import axios from "axios";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";
import ReactMarkdown from "react-markdown";
import userAvatar from './assets/user.png';
import botAvatar from './assets/bot.png';
import sendIcon from './assets/send.png';





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
        <AnimatePresence initial={false}>
          {chat.map((msg, i) => (
            <motion.div
              key={i}
              className={`chat-row ${msg.sender === "user" ? "user-row" : "bot-row"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="avatar">
                <img src={msg.sender === "user" ? userAvatar : botAvatar} alt="avatar" />
              </div>
              <motion.div
                  className={`chat-bubble ${msg.sender}`}
                  layout
                >
                  {msg.sender === "bot" ? (
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  ) : (
                    msg.text
                  )}
                </motion.div>

            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              className="chat-row bot-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="avatar">🤖</div>
              <div className="chat-bubble bot typing">
                <span className="dot">.</span>
                <span className="dot">.</span>
                <span className="dot">.</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>


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
          <img src={sendIcon} alt="Send" />
        </button>
      </div>
    </div>
  );
}

export default App;
