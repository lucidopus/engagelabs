"use client";

import { NextPage } from "next";
import { Input } from "@/components";
import Head from "next/head";
import { Button } from "@/components";
import { motion } from "framer-motion";

const Contact: NextPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-black">
      <Head>
        <title>Deepgram - Talk to a Language AI Expert</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <motion.div
        className="max-w-6xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="md:grid md:grid-cols-2 bg-gray-200">
          <motion.div
            className="p-10 md:p-16 flex flex-col items-start space-y-6"
            variants={itemVariants}
          >
            <h1 className="text-4xl font-bold text-gray-800">
              Talk to a Language AI Expert
            </h1>
            <p className="text-gray-600">
              We're helping companies maximize the potential of AI in real-world
              business applications.
            </p>
            <ul className="space-y-4 list-disc pl-5 text-gray-600">
              <motion.li
                className="flex items-center space-x-2"
                variants={itemVariants}
              >
                <span className="text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>Powerful language AI models</span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-2"
                variants={itemVariants}
              >
                <span className="text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>One blazing fast API</span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-2"
                variants={itemVariants}
              >
                <span className="text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>Future-proof with constant innovation</span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-2"
                variants={itemVariants}
              >
                <span className="text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>Effortless scalability</span>
              </motion.li>
              <motion.li
                className="flex items-center space-x-2"
                variants={itemVariants}
              >
                <span className="text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span>Enterprise-ready solutions</span>
              </motion.li>
            </ul>
          </motion.div>
          <motion.div
            className="p-10 md:p-16 bg-gray-800 text-white flex flex-col space-y-6"
            variants={itemVariants}
          >
            <form className="space-y-6" action="#" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="flex flex-col space-y-2"
                  variants={itemVariants}
                >
                  <Input id="email" type="email" label="Email*" />
                </motion.div>
                <motion.div
                  className="flex flex-col space-y-2"
                  variants={itemVariants}
                >
                  <Input id="phone" type="tel" label="Phone*" />
                </motion.div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="flex flex-col space-y-2"
                  variants={itemVariants}
                >
                  <Input id="firstName" type="text" label="First Name*" />
                </motion.div>
                <motion.div
                  className="flex flex-col space-y-2"
                  variants={itemVariants}
                >
                  <Input id="lastName" type="text" label="Last Name*" />
                </motion.div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  className="flex flex-col space-y-2"
                  variants={itemVariants}
                >
                  <Input id="companyName" type="text" label="Company Name*" />
                </motion.div>
                <motion.div
                  className="flex flex-col space-y-2"
                  variants={itemVariants}
                >
                  <Input id="jobTitle" type="text" label="Job Title*" />
                </motion.div>
              </div>
              <motion.div
                className="flex flex-col space-y-2"
                variants={itemVariants}
              >
                <label
                  className="block text-sm font-medium leading-6"
                  htmlFor="help"
                >
                  How can we help?*
                </label>
                <textarea
                  className="bg-transparent block p-3 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  id="help"
                  placeholder="Write a message..."
                  rows={4}
                  required
                ></textarea>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Button width="w-full" name="Submit" />
              </motion.div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
