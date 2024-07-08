"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import transcript from "../../../../actions/transcript";
import Messages from "@/components/Messages";
import Recorder, { mimeType } from "@/components/Recorder";

export type Message = {
  sender: string;
  response: string;
  id: string;
  audioData?: string;
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
    audioData: "",
  }

  const [state, formAction] = useFormState(transcript, initialState);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);

  useEffect(() => {
    if (state?.response && state.sender && state.id) {
      setMessages(messages => [
        {
          sender: state.sender,
          response: state.response,
          id: state.id,
          audioData: state.audioData,
        },
        ...messages
      ]);

      if (state.audioData) {
        const audioBlob = base64ToBlob(state.audioData, 'audio/mp3');
        const url = URL.createObjectURL(audioBlob);
        setAudioSrc(url);
      }
    }
  }, [state]);

  const uploadAudio = (blob: Blob) => {
    const file = new File([blob], "audio.webm", { type: mimeType });

    if (fileRef.current) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileRef.current.files = dataTransfer.files;

      if (submitButtonRef.current) {
        submitButtonRef.current.click();
      }
    }
  };  

  const base64ToBlob = (base64: string, mimeType: string) => {
    const byteCharacters = atob(base64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: mimeType });
  };

  return (
    <main className="relative text-gray-50 bg-purple-500 h-screen overflow-hidden">
      <form action={formAction} className="flex flex-col bg-black h-full">
        <div className="flex-1 bg-gradient-to-b from-purple-500 to-black overflow-hidden">
          <Messages messages={messages}/>
        </div>

        <input type="file" name="audio" hidden ref={fileRef} />
        <button type="submit" ref={submitButtonRef} hidden />

        <div className="bottom-20 mb-10 w-full overflow-hidden bg-black rounded-t-3xl">
          <Recorder uploadAudio={uploadAudio} />
          <div>
            {audioSrc && (
              <audio
                src={audioSrc}
                controls
                hidden
                autoPlay
                onEnded={() => setAudioSrc(null)}
              />
            )}
          </div>
        </div>
      </form>
    </main>
  );
}