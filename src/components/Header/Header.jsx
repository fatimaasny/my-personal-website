import React, { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

function Header() {
  const [scrollHeader, setScrollHeader] = useState(false);

  useEffect(() => {
    const handlerScroll = () => {
      let positionScroll = Math.round(window.scrollY);
      if (positionScroll >= 100) {
        setScrollHeader(true);
      } else {
        setScrollHeader(false);
      }
    };
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  }, []);

  return (
    <header
      className={`flex flex-row justify-between items-center  w-full    pl-10 pr-10 pt-6 ${
        scrollHeader && "sticky top-0"
      }  `}
    >
      <div className="flex flex-row justify-between items-center ">
        <h2 className="text-[1.8rem] font-bold uppercase font-['Brands'] ">
          developer
        </h2>
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
    </header>
  );
}

export default Header;
