"use client";

import { Fragment, useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

function Notification({
  type,
  title,
  description,
  timeout = 5000,
}: {
  type: "Success" | "Error";
  title: string;
  description: string;
  timeout?: number;
}) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShow(false);
    }, timeout);

    return () => clearTimeout(timeoutId);
  }, [timeout]);

  const getIcon = () => {
    if (type === "Success") {
      return (
        <CheckCircleIcon
          className="h-6 w-6 text-green-400"
          aria-hidden="true"
        />
      );
    } else if (type === "Error") {
      return (
        <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
      );
    }
    return null;
  };

  return (
    <>
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end mt-20">
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={`pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ${
                type === "Error" ? "bg-red-50" : "bg-white"
              }`}
            >
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">{getIcon()}</div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">{title}</p>
                    <p className="mt-1 text-sm text-gray-500">{description}</p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon
                        className={`h-5 w-5 ${
                          type === "Error" ? "bg-red-50" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}

export default Notification;
