"use client";

import { useState } from "react";
import { MdOutlineFileUpload } from "react-icons/md";
import { GoFile } from "react-icons/go";
import { GiUpgrade } from "react-icons/gi";
import { ImDownload } from "react-icons/im";

const SideNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Upload",
      icon: <MdOutlineFileUpload size={25} />,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: <GoFile size={25} />,
      path: "/files",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <GiUpgrade size={25} />,
      path: "/upgrade",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="shadow-sm border-r h-full">
      <div className="p-5 border-b">
        <ImDownload size={35} color="#3698f9" />
      </div>
      <div className="flex flex-col float-left w-full">
        {menuList.map((item, index) => (
          <button
            key={index} 
            className={`flex items-center gap-2 p-4 px-6 hover:bg-gray-100 hover:text-blue-600  w-full ${
              activeIndex == index ? "bg-blue-50 text-blue-600" : null
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {item.icon}
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
