import { IoAlertCircleOutline } from "react-icons/io5";

const AlertMsg = ({ msg }) => {
  return (
    <div className="flex items-center justify-center  mx-auto text-white bg-red-500 p-4 mt-5 rounded-md shadow lg:w-2/3">
      <div className="flex flex-shrink-0 mr-2">
        <IoAlertCircleOutline 
          size={30} 
          color="#fff" 
        />
      </div>
      <div className="text-lg">
        {msg}
      </div>
    </div>
  );
};

export default AlertMsg;