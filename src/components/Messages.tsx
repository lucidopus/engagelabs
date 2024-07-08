import React from "react";
import Image from "next/image";
import { Message } from "@/app/playground/[sessionid]/page";
import { SalespersonChat, UserChat } from "./ChatMessages";
import LoadingMessage from "./LoadingMessage";

interface Props {
  messages: Message[];
}

export default function Messages({ messages }: Props) {

  function generateUniqueId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  }

  return (
    <div
      className={`flex flex-col min-h-screen p-5 pt-20 ${
        messages.length > 0 ? "pb-96" : "pb-32"
      }`}
    >
      <LoadingMessage />

      {!messages.length && (
        <div className="flex flex-col space-y-10 flex-1 items-center justify-end">
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
      )}

      <div className="p-5 px-40 space-y-5">
        {messages.map((message) => (
          <div key={generateUniqueId()} className="space-y-5">
            <SalespersonChat 
              message={message.response}
              key={generateUniqueId()}
            />

            <UserChat 
              message={message.sender}
              key={generateUniqueId()}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
