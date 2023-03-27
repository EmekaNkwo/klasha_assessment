import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Topbar() {
  return (
    <div className=" h-[70px] border-b-[1px] p-2 mb-2 justify-end flex w-full">
      <div className="flex items-center mr-3 gap-4">
        <span className="flex items-center gap-1 cursor-pointer font-medium">
          <FaRegUserCircle className="text-[20px]" />
          <MdOutlineKeyboardArrowDown className="text-[16px] " />
        </span>
        <span className="flex items-center gap-1 cursor-pointer font-medium">
          En
          <MdOutlineKeyboardArrowDown className="text-[16px]" />
        </span>
      </div>
    </div>
  );
}

export default Topbar;
