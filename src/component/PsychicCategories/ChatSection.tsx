'use client';
import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import Link from 'next/link';

interface Message {
  name: string;
  text: string;
  isSender: boolean; 
}

const useUser = () => {
  return { name: "User Name" }; 
};

const ChatSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]); 
  const [inputValue, setInputValue] = useState<string>('');
  const { name } = useUser(); 

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { name, text: inputValue, isSender: true }]);
      setInputValue(''); 
      
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { name: "Advisor", text: "Thank you for your message!", isSender: false },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-customDark text-white">
      {/* Header */}
      <div className="bg-customGold text-black p-4 text-xl font-semibold shadow-lg flex justify-center items-center relative">
  {/* Home Link */}
     <Link href="/" className="absolute left-4 text-black ">Home</Link>

  {/* Chat Title */}
     <span>Chat with Your Advisor</span>
     </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <p className="text-gray-300 text-center mt-10">No messages yet. Start the conversation!</p>
        ) : (
          messages.map((message, index) => (
            <div key={index} className={`my-2 ${message.isSender ? 'text-left' : 'text-right'}`}>
              <span className={`font-bold ${message.isSender ? 'text-customGold' : 'text-gray-400'}`}>
                {message.name}:
              </span>
              <span
                className={`p-3 rounded-lg inline-block transition-all duration-200 ease-in-out ${
                  message.isSender ? 'bg-customGold text-black shadow-lg' : 'bg-gray-700'
                }`}
              >
                {message.text}
              </span>
            </div>
          ))
        )}
      </div>

      {/* Input Section */}
      <div className="flex items-center p-4 border-t border-gray-700 bg-[#333]">
        <input
          type="text"
          className="flex-1 h-12 p-4 bg-[#888888] border border-white text-black placeholder-black rounded-lg mr-2 focus:outline-none focus:ring-2 focus:ring-customGold transition duration-200"
          placeholder="Type your message here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="h-12 px-4 bg-customGold text-black rounded-lg hover:bg-yellow-400 transition duration-200 flex items-center shadow-md transform hover:scale-105"
        >
          <FaPaperPlane className="mr-1" />
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatSection;
