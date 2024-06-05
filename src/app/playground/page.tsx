"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { ENGAGELABS_API_BASE, ENGAGELABS_API_KEY } from "@/config";
import { Button } from "@/components";
import Notification from "@/components/Notification";

function Playground() {
  const [persona, setPersona] = useState("");
  const [qualities, setQualities] = useState("");
  const [data, setData] = useState(null);

  const getData = async () => {
    try {
      const response = await fetch(
        `${ENGAGELABS_API_BASE}/initialize_conversation`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": `${ENGAGELABS_API_KEY}`,
          },
          body: JSON.stringify({
            persona,
            qualities,
          }),
        }
      );

      const data = await response.json();

      console.log(data);
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      <Notification
        title="Oops! We couldn't initialize your session!"
        description="There was an issue while initializing your conversation session> Please try again later!"
        type="Error"
      />;
    }
  };

  const handleClick = () => {
    getData();
  };

  const handleReinitialize = () => {
    setData(null);
    setPersona("");
    setQualities("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-center text-4xl pb-5 font-extrabold dark:text-gray-300">
        EngageLabs API Playground
      </h1>
      <h2 className="mt-6 text-center text-xl pb-5 font-bold leading-9 tracking-tight bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">
        Try it out!
      </h2>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-transparent p-10 ring-2 ring-white rounded-lg shadow-md max-w-md w-full"
      >
        <div className="space-y-6">
          <label className="block text-sm font-medium" htmlFor="help">
            Customer's Persona
          </label>
          <textarea
            className={`bg-transparent block p-3 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
              data !== null ? "cursor-not-allowed" : ""
            }`}
            id="help"
            placeholder="Ex. The Price Conscious Buyer"
            rows={1}
            required
            value={persona}
            onChange={(p) => setPersona(p.target.value)}
            disabled={data !== null}
          ></textarea>

          <label className="block text-sm font-medium" htmlFor="help">
            Customer's Qualities
          </label>
          <textarea
            className={`bg-transparent block p-3 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 ${
              data !== null ? "cursor-not-allowed" : ""
            }`}
            id="help"
            placeholder="Ex. Very focused on getting the best value for money."
            rows={4}
            required
            value={qualities}
            onChange={(e) => setQualities(e.target.value)}
            disabled={data !== null}
          ></textarea>
          <div>
            {data ? (
              <div className="flex justify-center space-x-6">
                <button
                  onClick={handleReinitialize}
                  className="inline-flex items-center justify-center w-1/2 text-center rounded-full px-3.5 py-2.5 text-lg font-bold text-black bg-orange-300 hover:shadow-[0_0_20px_5px_rgba(85,152,191,0.5)] transition-all duration-500"
                >
                  <span className="mr-2">Try again</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => (window.location.href = `/playground/${data}`)}
                  className="inline-block w-1/2 text-center rounded-full px-3.5 py-2.5 text-lg font-bold text-black bg-green-300 hover:shadow-[0_0_20px_5px_rgba(85,152,191,0.5)] transition-all duration-500"
                >
                  Let's Talk!
                </button>
              </div>
            ) : (
              <Button
                name="Initiate AI Conversation"
                onclick={handleClick}
                width="w-full"
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Playground;
