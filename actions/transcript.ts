"use server";

import Groq from "groq-sdk";
import axios from "axios";
import { STT_MODEL, PROSPECT_MESSAGE_ENDPOINT } from "@/config";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

async function transcript(prevState: any, formData: FormData) {
  const file = formData.get("audio") as File;
  const url = process.env.NEXT_PUBLIC_ENGAGELABS_API_BASE?.concat(PROSPECT_MESSAGE_ENDPOINT) || "";
  const api_key = process.env.NEXT_PUBLIC_ENGAGELABS_API_KEY || "";

  if (url === "" || api_key === "") {
    alert("There was an issue with the EngageLabs API credentials!")
  }

  if (file.size === 0) {
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
        "accept": "application/json",
        "X-API-Key": api_key,
        "Content-Type": "application/json",
      },
    });  

    return {
      sender: speechResult.text,
      response: prospect_message.data.response,
      id: prevState.id,
    };
  } catch (error) {
    console.log("Error running the pipeline: ", error);
    
  }
}

export default transcript;
