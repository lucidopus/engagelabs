"use client"

import React, { useState } from "react";
import { Input } from "@/components";
import { Button } from "@/components/Button";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    showSubmissionAlert();
  }

  const showSubmissionAlert = () => {
    alert("Login successful!");
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 bg-black">
        <div className="sm:mx-auto sm:w-full sm:max-w-md my-10">
          <h1 className="text-center my-10 text-4xl font-extrabold dark:text-gray-300 text-gray-100">
            Welcome Back!
          </h1>
          <h2 className="mt-6 text-center text-xl font-bold leading-9 tracking-tight bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="border border-cyan-300 dark:border-gray-500 px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit} method="POST">
              <Input
                id="email"
                label="Email address*"
                placeholder="johndoe@example.com"
                type="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              />

              <Input
                id="password"
                label="Password*"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-cyan-300 text-blue-600 focus:ring-red-600"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm leading-6 text-gray-100"
                    >
                      Remember me
                    </label>
                </div>

                <div className="text-sm leading-6">
                  <a
                    href="#"
                    className="font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>

              <div>
                <Button width="w-full" name="Sign in" />
              </div>
            </form>

            <div>
              <div className="relative mt-10 dark:text-gray-400 text-gray-500">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-400" />
                </div>
                <div className="relative flex justify-center text-sm font-medium leading-6">
                  <span className="bg-black px-6">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 gap-4">
                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-3 rounded-md border border-gray-500 px-3 py-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
                >
                  <img src="/google.svg" alt="Google" height={20} width={20} />
                  <span className="text-sm font-semibold leading-6 text-gray-100">
                    Google
                  </span>
                </a>
              </div>
            </div>
          </div>

          <p className="mt-10 text-center text-sm dark:text-gray-300 text-gray-100">
            New to EngageLabs?{" "}
            <a
              href="/authenticate/signup"
              className="font-semibold leading-6 bg-gradient-to-r from-cyan-600 to-blue-600 text-transparent bg-clip-text hover:text-indigo-500"
            >
              Get free credits!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
