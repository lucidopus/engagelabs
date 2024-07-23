"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Pricing from "./Pricing";
import { product_description } from "@/config";

export default function Hero() {
  return (
    <div className="relative mt-12">
      <main>
        <div className="relative isolate my-32">
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="absolute bg-red-300 rounded-full"
                style={{
                  width: "500px",
                  height: "500px",
                  left: "60%",
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
                  opacity: 0.6,
                }}
                initial={{ scale: 0.5, y: -200, rotate: 0 }}
                animate={{ scale: 1, y: [0, 200, 0], rotate: [0, 360] }}
                transition={{
                  duration: 8,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              <motion.div
                className="absolute bg-green-300 rounded-full"
                style={{
                  width: "300px",
                  height: "300px",
                  left: "65%",
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
                  opacity: 0.6,
                }}
                initial={{ scale: 0.5, y: 200, rotate: 0 }}
                animate={{ scale: 1, y: [0, -200, 0], rotate: [0, -360] }}
                transition={{
                  duration: 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
              <motion.div
                className="absolute bg-sky-300 rounded-full"
                style={{
                  width: "600px",
                  height: "600px",
                  left: "60%",
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
                  opacity: 0.6,
                }}
                initial={{ scale: 0, x: -300 }}
                animate={{ scale: [0.5, 1], x: [0, 150] }}
                transition={{
                  duration: 7,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute bg-orange-300 rounded-full"
                style={{
                  width: "400px",
                  height: "400px",
                  left: "75%",
                  boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.5)",
                  opacity: 0.6,
                }}
                initial={{ scale: 0.5, x: 300, rotate: 0 }}
                animate={{ scale: 1, x: [0, -300, 0], rotate: [0, -360] }}
                transition={{
                  duration: 14,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
              />
            </div>
          </motion.div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-5">
            <motion.div
              className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <motion.h1
                  className="font-extrabold tracking-tight text-gray-900 sm:text-6xl dark:text-gray-200"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                  <motion.span
                    className="text-7xl bg-gradient-to-r from-cyan-600 to-cyan-400 text-transparent bg-clip-text whitespace-nowrap"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4,
                      ease: "easeInOut",
                    }}
                  >
                    {Array.from("Elevate").map((char, index) => (
                      <motion.span
                        key={char + "-" + index}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: index * 0.1 + 0.4,
                          ease: "easeInOut",
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                  <br />
                  <span className="text-7xl text-gray-200">
                    Your Team's Performance with AI-driven customer simulations
                  </span>
                  <motion.span
                    className="text-8xl bg-gradient-to-r from-cyan-600 to-cyan-400 text-transparent bg-clip-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6,
                      ease: "easeOut",
                    }}
                  >
                    .
                  </motion.span>
                </motion.h1>
                <motion.p
                  className="mt-6 text-xl leading-8 text-gray-300 sm:max-w-md lg:max-w-none dark:text-gray-400 tracking-normal"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  {product_description}
                </motion.p>
                <motion.div
                  className="mt-10 flex items-center gap-x-6"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                >
                  <Link
                    href="/playground"
                    className="rounded-md bg-gradient-to-r from-cyan-600 to-blue-400 px-3.5 py-2.5 text-sm font-semibold text-gray-100 shadow-sm shadow-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
                  >
                    Try for Free
                  </Link>
                  <Link
                    href="/contact-us"
                    className="relative inline-block rounded-md px-3.5 py-2.5 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 border-2 border-cyan-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400 hover:text-white hover:shadow-[0_0_50px_10px_rgba(85,152,191,0.5)] transition-all duration-500"
                  >
                    Book a demo
                  </Link>
                </motion.div>
              </div>
              <motion.div
                className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
              >
                <motion.div
                  className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <Pricing />
      </main>
    </div>
  );
}
