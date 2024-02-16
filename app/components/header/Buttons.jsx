import { FaAlignJustify } from "react-icons/fa6";

export const Buttons = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="sm:flex sm:gap-4">
        <a
          className="rounded-md bg-[#3698f9] shadow px-5 py-2.5 text-md font-medium text-white hover:shadow-md hover:bg-[#007dfc]"
          href="/files"
        >
          Get Started
        </a>
      </div>

      <div className="block md:hidden">
        <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
        <FaAlignJustify />
        </button>
      </div>
    </div>
  );
};
