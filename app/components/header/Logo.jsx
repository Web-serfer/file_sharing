import { ImDownload } from "react-icons/im";

export const Logo = () => {
  return (
    <div className="md:flex md:items-center md:gap-12">
      <a className="block text-teal-600" href="/">
        <ImDownload size={35} color="#3698f9" />
      </a>
    </div>
  );
};
