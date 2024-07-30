"use client";

import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import transcript from "../../../../actions/transcript";
import Messages from "@/components/Messages";
import Recorder, { mimeType } from "@/components/Recorder";
import { Popup } from "@/components";
import Link from "next/link";
import axios from "axios";
import { ENGAGELABS_API_BASE, ENGAGELABS_API_KEY, HISTORY_ENDPOINT } from "@/config";
import Error from "next/error";

export type Message = {
  sender: string;
  response: string;
  id: string;
  audioData?: string;
};

export default function SessionDetail({
  params,
}: {
  params: { sessionid: string };
}) {
  const [loading, setLoading] = useState(true);
  const [exists, setExists] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [conversationEnded, setConversationEnded] = useState(false);
  const [audioFinished, setAudioFinished] = useState(false);
  
  const initialState = {
    sender: "",
    response: "",
    audioData: "",
    end_after_utterence: false,
    id: params.sessionid,
  };
  const [state, formAction] = useFormState(transcript, initialState);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const response = await axios.post(
          `${ENGAGELABS_API_BASE}`.concat(HISTORY_ENDPOINT),
          { session_id: params.sessionid },
          {
            headers: {
              "Content-Type": "application/json",
              "X-API-Key": `${ENGAGELABS_API_KEY}`,
            },
          }
        );
        const data = await response.data;
      
        setExists(data.exists);

        if (data.exists && data.conversation_history) {
          setMessages(data.conversation_history);
        }
      } catch (error) {
        console.error("Error:", error);
        setExists(false);
      } finally {
        setLoading(false);
      }
    }
    fetchHistory();
  }, [params.sessionid]);

  useEffect(() => {
    
    if (state?.response && state.sender && state.id) {
      setMessages((messages) => [
        {
          sender: state.sender,
          response: state.response,
          id: state.id,
          audioData: state.audioData,
        },
        ...messages,
      ]);

      if (state.audioData) {
        const audioBlob = base64ToBlob(state.audioData, "audio/mp3");
        const url = URL.createObjectURL(audioBlob);
        setAudioSrc(url);
        setAudioFinished(false);
      }
      if (state.end_after_utterence) {
        setConversationEnded(true);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!exists) {
    return <>
      <Error 
        key={"1"}
        title="Page not found. Please check if you have the correct conversation URL"
        statusCode={404}
      />
    </>
  }

  return (
    <main className="relative text-gray-50 bg-cyan-500 h-screen overflow-hidden">
      <form action={formAction} className="flex flex-col bg-black h-full">
        <div className="flex-1 bg-gradient-to-b from-cyan-900 to-black overflow-hidden">
          <Messages messages={messages} />
        </div>

        <input type="file" name="audio" hidden ref={fileRef} />
        <button type="submit" ref={submitButtonRef} hidden />

        <div className="bottom-20 mb-10 w-full overflow-hidden bg-black rounded-t-3xl">
          {!conversationEnded && <Recorder uploadAudio={uploadAudio} />}
          {conversationEnded && audioFinished && (
            <div className="flex items-center bg-black justify-center cursor-pointer">
              <div className="bg-white rounded-sm focus-visible:outline-red-600 bg-gradient-to-r from-teal-500 to-cyan-500 hover:bg-gradient-to-r hover:from-white hover:to-white text-white hover:shadow-white">
                <Link
                  href={"/playground"}
                  className="relative w-full text-center text-white rounded-md px-3.5 py-2.5 text-md font-semibold hover:font-semibold text-transparent bg-clip-text bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 hover:text-black hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-300 transition-all duration-300 grid place-items-center grid-flow-col"
                >
                  Create a new session
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/engagelabs-c254b.appspot.com/o/icons%2Fcreate-session.svg?alt=media&token=27154502-5e9b-4683-b192-f8fa1ac84ea7"
                    alt=""
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </div>
          )}
          <div>
            {audioSrc && (
              <audio
                src={audioSrc}
                controls
                hidden
                autoPlay
                onEnded={() => {
                  setAudioSrc(null);
                  setAudioFinished(true);
                }}
              />
            )}
          </div>
        </div>
      </form>
      {conversationEnded && messages.length > 0 && audioFinished && (
        <Popup
          title="Call Ended"
          description="The call ends here!"
          buttonText="Close"
        />
      )}
    </main>
  );
}
