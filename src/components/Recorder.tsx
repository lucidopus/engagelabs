"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useFormStatus } from "react-dom";

export const mimeType = "audio/webm";

export default function Recorder({
  uploadAudio,
}: {
  uploadAudio: (blob: Blob) => void;
}) {
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const [permission, setPermission] = useState(false);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const { pending } = useFormStatus();
  const [recordingStatus, setRecordingStatus] = useState("inactive");
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);

  useEffect(() => {
    getMicrophonePermission();
  }, []);

  const getMicrophonePermission = async () => {
    if ("MediaRecorder" in window) {
      try {
        const streamData = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        setPermission(true);
        setStream(streamData);
      } catch (error: any) {
        alert(error.message);
      }
    } else {
      alert("The MediaRecorder API is not supported in your browser!");
    }
  };

  const startRecording = async () => {
    if (mediaRecorder === null || stream === null) return;

    if (pending) return;

    setRecordingStatus("recording");

    //create new Media recorder instance using the stream
    const media = new MediaRecorder(stream, { mimeType: mimeType });

    //set the MediaRecorder instance to the mediaRecorder ref
    mediaRecorder.current = media;

    //invokes the start method to start the recording process
    mediaRecorder.current.start();

    let localAudioChunks: Blob[] = [];
    mediaRecorder.current.ondataavailable = (event) => {
      if (typeof event.data === "undefined") return;
      if (event.data.size === 0) return;
      localAudioChunks.push(event.data);
    };
    setAudioChunks(localAudioChunks);
  };
  const stopRecording = async () => {
    if (mediaRecorder.current === null || pending) return;

    setRecordingStatus("inactive");
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      const audioBlob = new Blob(audioChunks, { type: mimeType });

      // const audioUrl = URL.createObjectURL(audioBlob);
      uploadAudio(audioBlob);
      setAudioChunks([]);
    };
  };

  return (
    <div className="flex items-center bg-black justify-center cursor-pointer">
      {!permission && (
        <button onClick={getMicrophonePermission}>Getting Microphone...</button>
      )}

      {pending && (
        <Image
          src={"/active.gif"}
          width={100}
          height={100}
          priority
          unoptimized
          alt="Active"
          className="grayscale"
        />
      )}

      {permission && recordingStatus === "inactive" && !pending && (
        <Image
          src={"/noactive.png"}
          width={100}
          height={100}
          onClick={startRecording}
          priority={true}
          unoptimized
          alt="Not Recording"
          className="cursor-pointer duration-150 transition-all ease-in-out"
        />
      )}

      {recordingStatus === "recording" && (
        <Image
          src={"/active.gif"}
          width={100}
          height={100}
          onClick={stopRecording}
          priority={true}
          unoptimized
          alt="Recording"
          className="cursor-pointer duration-150 transition-all ease-in-out"
        />
      )}
    </div>
  );
}
