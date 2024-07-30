import React from "react";

export const SalespersonChat = ({ message }: { message: string }) => {
  return (
    <div className="chat-message">
      <div className="flex items-end ">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start shadow-lg shadow-gray-500/10">
          <div>
            <span className="px-5 py-2 font-semibold rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600 text-base shadow-2xl">
              {message}
            </span>
          </div>
        </div>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/engagelabs-c254b.appspot.com/o/icons%2Fprospect.png?alt=media&token=8d293c51-91ba-49a3-a33c-e9696c93f07d"
          alt="My profile"
          className="w-10 h-10 border border-gray-500 rounded-full order-1"
        />
      </div>
    </div>
  );
};

export const UserChat = ({ message }: { message: string }) => {
  return (
    <div className="chat-message">
      <div className="flex items-end justify-end">
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end shadow-lg shadow-gray-500/10">
          <div>
            <span className="px-5 py-2 font-semibold rounded-lg inline-block shadow-2xl rounded-br-none bg-gradient-to-br from-cyan-500 to-cyan-900 text-white text-base">
              {message}
            </span>
          </div>
        </div>
        <img
          src="/prospect.svg"
          alt="My profile"
          className="w-10 h-10 rounded-full order-2"
        />
      </div>
    </div>
  );
};

export const UnidentifiedChat = ({ message }: { message: string }) => {
  return (
    <ul className='<ul p-2 class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-slate-500 dark:border-gray-600 dark:text-white shadow-lg shadow-gray-500/50">'>
      <li className="px-5 py-2 font-bold text-sm text-left border-gray-200">
        {message}
      </li>
    </ul>
  );
};
