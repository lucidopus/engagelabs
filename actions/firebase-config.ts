import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { firebase_credentials, storageBucket } from "@/config";

const firebase_app = initializeApp({
  apiKey: "AIzaSyBSiA3G4r8umAL1tg7RsZ62Z5nvSb7AnUU",
  authDomain: "engagelabs-c254b.firebaseapp.com",
  databaseURL: "https://engagelabs-c254b-default-rtdb.firebaseio.com",
  projectId: "engagelabs-c254b",
  storageBucket: "engagelabs-c254b.appspot.com",
  messagingSenderId: "566744253709",
  appId: "1:566744253709:web:793325ca474955dc085c44",
  measurementId: "G-2KFTN37H08",
});

export const firebase_storage = getStorage(firebase_app, storageBucket);
export const firebase_auth = getAuth(firebase_app);
