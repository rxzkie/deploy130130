import React, { useEffect, useState, useRef } from 'react';
import { io, Socket } from 'socket.io-client';

const ChatbotAssistant = () => {
  const [isOpen, setIsOpen] = useState(true); // Chat siempre visible
  const [messages, setMessages] = useState<{ content: string; isBot: boolean }[]>([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null); // Para auto-scroll
  const socketRef = useRef<Socket | null>(null);
  const currentBotMessage = useRef('');

  // Auto-scroll hacia abajo
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Conexión al socket
  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
    if (!apiUrl) {
      console.error('[Chatbot] NEXT_PUBLIC_API_URL no está definido en el .env');
      return;
    }

    console.log('[Chatbot] Conectando al servidor:', apiUrl);

    const socket = io(apiUrl, {
      withCredentials: true,
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
    });

    socketRef.current = socket;

    socket.on('connect', () => {
      console.log('[Socket.io] Conectado con ID:', socket.id);
    });

    socket.on('disconnect', (reason) => {
      console.warn('[Socket.io] Desconectado:', reason);
    });

    socket.on('connect_error', (error) => {
      if (error instanceof Error) {
        console.error('[Socket.io] Error de conexión:', error.message);
      } else {
        console.error('[Socket.io] Error de conexión desconocido:', error);
      }
    });

    // Manejo de mensajes del bot
    socket.on('chatResponse', (chunk: string) => {
      console.log('[Chatbot] Recibiendo fragmento del bot:', chunk);

      try {
        currentBotMessage.current += chunk; // Acumular fragmentos
        setMessages((prev) => {
          const updatedMessages = [...prev];
          if (
            updatedMessages.length > 0 &&
            updatedMessages[updatedMessages.length - 1].isBot
          ) {
            updatedMessages[updatedMessages.length - 1].content =
              currentBotMessage.current; // Actualiza el mensaje acumulado
          } else {
            updatedMessages.push({ content: currentBotMessage.current, isBot: true });
          }
          return updatedMessages;
        });
      } catch (error) {
        if (error instanceof Error) {
          console.error('[Chatbot] Error procesando chunk:', error.message, chunk);
        } else {
          console.error('[Chatbot] Error desconocido procesando chunk:', error, chunk);
        }
      }
    });

    // Completar mensaje al finalizar streaming
    socket.on('streamComplete', () => {
      console.log('[Chatbot] Mensaje completo recibido:', currentBotMessage.current);
      currentBotMessage.current = ''; // Limpiar acumulador
    });

    return () => {
      console.log('[Chatbot] Eliminando socketRef (sin desconectar el socket)');
      socketRef.current = null;
    };
  }, []);

  const emitMessage = () => {
    if (!socketRef.current || !input.trim()) {
      console.warn('[Chatbot] No se envió mensaje (socket inactivo o input vacío)');
      return;
    }

    console.log('[Chatbot] Enviando mensaje al servidor:', input);
    setMessages((prev) => [...prev, { content: input, isBot: false }]);
    socketRef.current.emit('sendMessage', { message: input });
    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') emitMessage();
  };

  return (
    <div
      className="fixed bottom-0 right-0 w-full max-w-lg bg-white shadow-lg rounded-t-lg flex flex-col z-50"
      style={{ height: isOpen ? '80vh' : '50px', transition: 'height 0.3s' }}
    >
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h2 className="font-bold">Ecoalliance AI</h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl font-bold text-white hover:text-gray-200"
        >
          {isOpen ? '✖' : '💬'}
        </button>
      </div>

      {/* Messages Section */}
      {isOpen && (
        <div
          className="flex-1 p-4 overflow-y-auto space-y-4"
          style={{
            maxHeight: '70vh',
            minHeight: '30vh',
            wordWrap: 'break-word',
            paddingBottom: '1rem',
          }}
        >
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${
                msg.isBot ? 'justify-start' : 'justify-end'
              } items-start`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-full ${
                  msg.isBot ? 'bg-gray-200 text-black' : 'bg-blue-600 text-white'
                } break-words shadow`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Input Section */}
      {isOpen && (
        <div className="p-4 border-t flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe un mensaje..."
            className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={emitMessage}
            className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Enviar
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatbotAssistant;
