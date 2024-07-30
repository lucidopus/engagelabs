export const Button = ({
  width,
  name,
  onclick,
}: {
  width: string;
  name: string;
  onclick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <div className="bg-white rounded-sm focus-visible:outline-red-600 bg-gradient-to-r from-teal-500 to-cyan-500 hover:bg-gradient-to-r hover:from-white hover:to-white text-white hover:shadow-white">
      <button
        className={`relative inline-block ${width} text-center text-white rounded-md px-3.5 py-2.5 text-md font-semibold hover:font-semibold text-transparent bg-clip-text bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 hover:text-black hover:bg-gradient-to-r hover:from-red-500 hover:to-blue-300 hover:shadow-[0_0_25px_5px_rgba(255,255,255,0.5)] transition-all duration-300`}
        type="submit"
        onClick={onclick}
      >
        {name}
      </button>
    </div>
  );
};

