"use client";

import Messages from "@/components/Messages";
import Recorder, { mimeType } from "@/components/Recorder";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import transcript from "../../../../actions/transcript";

export type Message = {
  sender: string;
  response: string;
  id: string;
}

export default function SessionDetail({
  params,
}: {
  params: { sessionid: string };
}) {

  const initialState = {
    sender: "",
    response: "",
    id: params.sessionid,
  }

  const [state, formAction] = useFormState(transcript, initialState);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {

    if (state?.response && state.sender && state.id) {
      setMessages(messages => [
        {
          sender: state.sender,
          response: state.response,
          id: state.id
        },
        ...messages
      ])
    }

  }, [state])

  const uploadAudio = (blob: Blob) => {
    const file = new File([blob], "audio.webm", { type: mimeType });

    // Set the file as the value of the hidden file input field
    if (fileRef.current) {

      const dataTransfer = new DataTransfer();
      
      dataTransfer.items.add(file);
      fileRef.current.files = dataTransfer.files;

      // Simulate a click & submit the form
      if (submitButtonRef.current) {
        submitButtonRef.current.click();
      }
    }
  };  

  return (
    <>
      <main className="relative text-gray-50 bg-purple-500 h-screen overflow-hidden">
        <form action={formAction} className="flex flex-col bg-black h-full">
          <div className="flex-1 bg-gradient-to-b from-purple-500 to-black overflow-hidden">
            <Messages messages={messages}/>
          </div>

          <input type="file" name="audio" hidden ref={fileRef} />
          <button type="submit" ref={submitButtonRef} />

          <div className="bottom-20 mb-10 w-full overflow-hidden bg-black rounded-t-3xl">
            <Recorder uploadAudio={uploadAudio} />
            <div>{/* Voice Synthesizer - output the Assistant's voice */}</div>
          </div>
        </form>
      </main>
    </>
  );
}
