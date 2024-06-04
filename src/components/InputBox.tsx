import React from "react";

const Input = ({
  id,
  type,
  label,
  placeholder,
}: {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6">
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          autoComplete="email"
          required
          className="bg-transparent block p-3 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Input;
