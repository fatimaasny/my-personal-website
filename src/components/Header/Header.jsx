import React from "react";
import { IoMoonOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Header() {
  return (
    <div className="flex flex-row justify-between  pl-10 pr-10 pt-6 sticky top-0 w-full ">
      <div className="flex flex-row justify-between items-center ">
        <h2 className="text-[1.8rem] font-bold">developer</h2>
        <span className="inline-block w-2 h-2 border-solid border-2 border-[#00ffb3] rounded-full ml-2 mt-2 "></span>
      </div>
      <div className="">
        <button className="mr-8">
          <IoMoonOutline fontSize="1.8rem" />
        </button>
        <button>
          <HiOutlineMenuAlt4 fontSize="2.1rem" />
        </button>
      </div>
    </div>
  );
}

export default Header;
