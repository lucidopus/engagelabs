// "use server";

// import Groq from "groq-sdk";
// import axios from "axios";
// import { STT_MODEL, PROSPECT_MESSAGE_ENDPOINT } from "@/config";

// const groq = new Groq({
//   apiKey: process.env.GROQ_API_KEY,
// });

// const API_BASE = process.env.DEEPGRAM_API_BASE || '';
// const API_KEY = process.env.DEEPGRAM_API_KEY || '';

// async function transcript(prevState: any, formData: FormData) {
//   const file = formData.get("audio") as File;
//   const url = process.env.NEXT_PUBLIC_ENGAGELABS_API_BASE?.concat(PROSPECT_MESSAGE_ENDPOINT) || "";
//   const api_key = process.env.NEXT_PUBLIC_ENGAGELABS_API_KEY || "";

//   if (url === "" || api_key === "") {
//     throw new Error("There was an issue with the EngageLabs API credentials!");
//   }

//   if (file.size === 0) {
//     return {
//       id: prevState.id,
//       sender: "",
//       response: "No audio file provided!",
//     };
//   }

//   try {
//     const speechResult = await groq.audio.translations.create({
//       file: file,
//       model: STT_MODEL,
//       prompt: "",
//       response_format: "json",
//       temperature: 0,
//     });    

//     const data = {
//       session_id: prevState.id,
//       caller_utterence: speechResult.text,
//     };

//     const prospect_message = await axios.post(url, data, {
//       headers: {
//         "accept": "application/json",
//         "X-API-Key": api_key,
//         "Content-Type": "application/json",
//       },
//     });  

//     // Text-to-speech conversion
//     const ttsResponse = await axios.post(
//       API_BASE,
//       { text: prospect_message.data.response },
//       {
//         headers: {
//           'Authorization': `Token ${API_KEY}`,
//           'Content-Type': 'application/json',
//         },
//         responseType: 'arraybuffer',
//       }
//     );

//     const audioBuffer = Buffer.from(ttsResponse.data);
//     const audioBase64 = audioBuffer.toString('base64');

//     return {
//       sender: speechResult.text,
//       response: prospect_message.data.response,
//       id: prevState.id,
//       audioData: audioBase64,
//     };
//   } catch (error) {
//     console.log("Error running the pipeline: ", error);
//     throw error;
//   }
// }

// export default transcript;

"use server";

import Groq from "groq-sdk";
import axios from "axios";
import { STT_MODEL, PROSPECT_MESSAGE_ENDPOINT } from "@/config";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const API_BASE = process.env.DEEPGRAM_API_BASE || '';
const API_KEY = process.env.DEEPGRAM_API_KEY || '';

async function transcript(prevState: any, formData: FormData) {
  const file = formData.get("audio") as File;
  const url = process.env.NEXT_PUBLIC_ENGAGELABS_API_BASE?.concat(PROSPECT_MESSAGE_ENDPOINT) || "";
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
    console.log("Starting speech-to-text conversion");
    const speechResult = await groq.audio.translations.create({
      file: file,
      model: STT_MODEL,
      prompt: "",
      response_format: "json",
      temperature: 0,
    });    
    console.log("Speech-to-text conversion successful");

    const data = {
      session_id: prevState.id,
      caller_utterence: speechResult.text,
    };

    console.log("Sending request to EngageLabs API");
    const prospect_message = await axios.post(url, data, {
      headers: {
        "accept": "application/json",
        "X-API-Key": api_key,
        "Content-Type": "application/json",
      },
    });  
    console.log("EngageLabs API request successful");

    console.log("Starting text-to-speech conversion");
    const ttsResponse = await axios.post(
      API_BASE,
      { text: prospect_message.data.response },
      {
        headers: {
          'Authorization': `Token ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer',
      }
    );
    console.log("Text-to-speech conversion successful");

    const audioBuffer = Buffer.from(ttsResponse.data);
    const audioBase64 = audioBuffer.toString('base64');

    return {
      sender: speechResult.text,
      response: prospect_message.data.response,
      id: prevState.id,
      audioData: audioBase64,
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