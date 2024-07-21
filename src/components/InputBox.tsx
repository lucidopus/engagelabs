import React from "react";

const Input = ({
  id,
  type,
  label,
  placeholder,
  autoComplete,
  required,
  value,
  onChange,
  className,
}: {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  autoComplete?: string;
  required?: boolean | false;
  value?: string | "";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-300"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          value={value}
          onChange={onChange}
          className={`bg-transparent block p-3 w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6 text-white ${className}`}
        />
      </div>
    </div>
  );
};

export default Input;