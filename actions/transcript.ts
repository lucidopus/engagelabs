"use server";

import Groq from "groq-sdk";
import axios from "axios";
import { STT_MODEL, PROSPECT_MESSAGE_ENDPOINT } from "@/config";
import { ElevenLabsClient } from "elevenlabs";
import { buffer } from "stream/consumers";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const elevenlabs = new ElevenLabsClient();

async function convertStreamToBase64(
  readableStream: NodeJS.ReadableStream
): Promise<string> {
  const bufferData = await buffer(readableStream);
  return bufferData.toString("base64");
}
async function transcript(prevState: any, formData: FormData) {
  const file = formData.get("audio") as File;
  const url =
    process.env.NEXT_PUBLIC_ENGAGELABS_API_BASE?.concat(
      PROSPECT_MESSAGE_ENDPOINT
    ) || "";
  const api_key = process.env.NEXT_PUBLIC_ENGAGELABS_API_KEY || "";

  if (url === "" || api_key === "") {
    console.error("EngageLabs API credentials are missing");
    throw new Error("There was an issue with the EngageLabs API credentials!");
  }

  if (!file || file.size === 0) {
    console.warn("No audio file provided");
    return {
      id: prevState.id,
      sender: "",
      response: "No audio file provided!",
    };
  }

  try {
    const speechResult = await groq.audio.translations.create({
      file: file,
      model: STT_MODEL,
      prompt: "",
      response_format: "json",
      temperature: 0,
    });

    const data = {
      session_id: prevState.id,
      caller_utterence: speechResult.text,
    };

    const prospect_message = await axios.post(url, data, {
      headers: {
        accept: "application/json",
        "X-API-Key": api_key,
        "Content-Type": "application/json",
      },
    });

    const readableStream = await elevenlabs.generate({
      text: prospect_message.data.response,
      voice: "Rachel",
      model_id: "eleven_turbo_v2",
      stream: true,
    });

    const base64String = await convertStreamToBase64(readableStream);

    return {
      sender: speechResult.text,
      response: prospect_message.data.response,
      id: prevState.id,
      audioData: base64String,
    };
  } catch (error) {
    console.error("Error running the pipeline: ", error);
    if (axios.isAxiosError(error)) {
      console.error("Response data:", error.response?.data);
      console.error("Response status:", error.response?.status);
    }
    throw error;
  }
}

export default transcript;
