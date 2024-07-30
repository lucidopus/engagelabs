"use client";

import { useFormStatus } from "react-dom";

function LoadingMessage() {
  const { pending } = useFormStatus();

  return (
    pending && (
      <div className="grid place-items-center animate-pulse font-bold text-cyan-200">
        <p>Emily is Thinking...</p>
      </div>
    )
  );
}
export default LoadingMessage;
