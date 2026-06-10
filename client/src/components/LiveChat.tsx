import React, { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { ChatBubbleIcon } from "./icons";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

export default function LiveChat() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{ id: 1, text: t("chat.welcome"), sender: "bot" }]);
    }
  }, [isOpen, messages.length, t]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    const userMsg: Message = { id: Date.now(), text: inputValue, sender: "user" };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { id: Date.now() + 1, text: t("chat.response"), sender: "bot" },
      ]);
    }, 900);
  };

  return (
    <>
      <button
        type="button"
        className="chat-fab"
        aria-label={t("chat.title")}
        onClick={() => setIsOpen(o => !o)}
      >
        <ChatBubbleIcon />
      </button>

      <div className={`chat-panel${isOpen ? " open" : ""}`} aria-hidden={!isOpen}
        style={{
          transform: isOpen ? "none" : "translateY(16px) scale(0.96)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
          transition: "transform 0.3s var(--ease-spring), opacity 0.25s ease",
        }}
      >
        <div className="chat-head">
          <div className="chat-avatar">X</div>
          <div>
            <strong>{t("chat.title")}</strong>
            <small>{t("contactPage.liveChatDesc")}</small>
          </div>
        </div>
        <div className="chat-body" ref={bodyRef}>
          {messages.map(m => (
            <div key={m.id} className={`chat-msg ${m.sender}`}>
              {m.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleSend()}
            placeholder={t("chat.placeholder")}
          />
          <button type="button" aria-label="Send" onClick={handleSend}>
            →
          </button>
        </div>
      </div>
    </>
  );
}
