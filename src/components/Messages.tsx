import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Message } from "@/app/playground/[sessionid]/page";
import { SalespersonChat, UserChat } from "./ChatMessages";
import LoadingMessage from "./LoadingMessage";

interface Props {
  messages: Message[];
}

export default function Messages({ messages }: Props) {

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  function generateUniqueId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }

  return (
    <div className="flex flex-col h-5/6 p-5 pt-20 overflow-y-auto">
      <LoadingMessage />
      <div className="flex-1 overflow-y-auto h-5/6">
        {!messages.length ? (
          <div className="flex flex-col space-y-10 h-full items-center justify-end ">
            <p className="text-white-500 text-xl animate-pulse">
              Start a conversation
            </p>
            <Image
              src={"/arrow.svg"}
              width={50}
              height={50}
              alt="Start a conversation"
              className="animate-bounce"
            />
          </div>
        ) : (
          <div className="p-5 px-40 h-5/6 space-y-2">
            {messages
              .slice()
              .reverse()
              .map((message) => (
                <div key={generateUniqueId()} className="space-y-5">
                  <UserChat message={message.sender} key={generateUniqueId()} />
                  <SalespersonChat
                    message={message.response}
                    key={generateUniqueId()}
                  />
                </div>
              ))}
              <div ref={messagesEndRef} />
          </div>
        )}
      </div>
    </div>
  );
}
