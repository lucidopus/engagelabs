"use client";

import { motion } from "framer-motion";
import { Button } from "@/components";
import { ENGAGELABS_API_BASE, ENGAGELABS_API_KEY } from "@/config";
import { useState } from "react";

function Playground() {
  const [persona, setPersona] = useState("");
  const [qualities, setQualities] = useState("");

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
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleClick = () => {
    getData();
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
            className="bg-transparent block p-3 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            id="help"
            placeholder="Ex. The Price Conscious Buyer"
            rows={1}
            required
            value={persona}
            onChange={(p) => setPersona(p.target.value)}
          ></textarea>

          <label className="block text-sm font-medium" htmlFor="help">
            Customer's Qualities
          </label>
          <textarea
            className="bg-transparent block p-3 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
            id="help"
            placeholder="Ex. Very focused on getting the best value for money."
            rows={4}
            required
            value={qualities}
            onChange={(e) => setQualities(e.target.value)}
          ></textarea>
          <div>
            <Button
              width="w-full"
              name="Initiate AI Conversation"
              onclick={handleClick}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Playground;
