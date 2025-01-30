import React, { useEffect, useState, useRef } from "react";
import { io, Socket } from "socket.io-client";

const ChatbotAssistant = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<{ content: string; isBot: boolean }[]>([]);
  const [input, setInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);
  const currentBotMessage = useRef('');

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
    if (!apiUrl) {
      console.error("[Chatbot] NEXT_PUBLIC_API_URL no está definido en el .env");
      return;
    }

    console.log("[Chatbot] Conectando al servidor:", apiUrl);
    const socket = io(apiUrl, {
      withCredentials: true,
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
    });

    socketRef.current = socket;

    socket.on("connect", () => console.log("[Socket.io] Conectado con ID:", socket.id));
    socket.on("disconnect", (reason) => console.warn("[Socket.io] Desconectado:", reason));
    socket.on("connect_error", (error) => console.error("[Socket.io] Error de conexión:", error));

    socket.on("chatResponse", (chunk: string) => {
      console.log("[Chatbot] Recibiendo fragmento del bot:", chunk);
      setIsBotTyping(true);
      currentBotMessage.current += chunk;

      setMessages((prev) => {
        if (prev.length > 0 && prev[prev.length - 1].isBot) {
          return prev.map((msg, index) =>
            index === prev.length - 1 ? { ...msg, content: currentBotMessage.current } : msg
          );
        } else {
          return [...prev, { content: currentBotMessage.current, isBot: true }];
        }
      });
    });

    socket.on("streamComplete", () => {
      console.log("[Chatbot] Mensaje completo recibido:", currentBotMessage.current);
      setTimeout(() => {
        setIsBotTyping(false);
        currentBotMessage.current = '';
      }, 300);
    });

    return () => {
      console.log("[Chatbot] Desconectando socket...");
      socket.disconnect();
      socketRef.current = null;
    };
  }, []);

  const emitMessage = () => {
    if (!socketRef.current || !input.trim()) return;

    console.log("[Chatbot] Enviando mensaje:", input);
    socketRef.current.emit("sendMessage", { message: input });

    setMessages((prev) => [...prev, { content: input, isBot: false }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-0 right-0 w-full max-w-lg bg-white shadow-lg rounded-t-lg flex flex-col z-50">
      <div className="bg-blue-600 text-white p-4 flex justify-between">
        <h2 className="font-bold">Ecoalliance AI</h2>
        <button onClick={() => setIsOpen(!isOpen)}>✖</button>
      </div>

      {isOpen && (
        <div className="p-4 overflow-y-auto">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}>
              <div className={`${msg.isBot ? "bg-gray-200" : "bg-blue-600 text-white"} p-2 rounded`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isBotTyping && <p className="text-gray-500 italic">El bot está escribiendo...</p>}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  );
};

export default ChatbotAssistant;
