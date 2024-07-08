// utils/textToSpeech.ts

import axios from 'axios';

const API_BASE = process.env.NEXT_PUBLIC_DEEPGRAM_API_BASE || '';
const API_KEY = process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY || '';

export async function textToSpeech(text: string): Promise<ArrayBuffer> {
  const url = API_BASE;
  const headers = {
    'Authorization': `Token ${API_KEY}`,
    'Content-Type': 'application/json',
  };

  const payload = { text };

  try {
    const response = await axios.post(url, payload, {
      headers,
      responseType: 'arraybuffer',
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error('Error in text-to-speech conversion:', error);
    throw error;
  }
}