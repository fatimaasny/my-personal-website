import React, { useEffect, useState } from "react";
import OverlayMenu from "./OverlayMenu/OverlayMenu";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";

function Header() {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [isOverlayMenu, setIsOverlayMenu] = useState(false);
  const showOverlayHandler = () => {
    setIsOverlayMenu(true);
  };
  const hideOverlayHandler = () => {
    setIsOverlayMenu(false);
  };

  useEffect(() => {
    const handlerScroll = () => {
      let positionScroll = Math.round(window.scrollY);
      if (positionScroll >= 80) {
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
    <div className="relative">
      {isOverlayMenu && <OverlayMenu hideOverlayHandler={hideOverlayHandler} />}
      <header
        className={`flex flex-row justify-between z-50 items-center w-full px-4  md:px-10 pt-6  ${
          scrollHeader && "fixed pb-4 top-0 bg-white lg:bg-[#f1f2ed] "
        }  `}
      >
        <div className="flex flex-row items-center justify-between ">
          <h2 className="md:text-[1.8rem] text-[1.2rem]  font-bold uppercase font-['fa-brands'] ">
            developer
          </h2>
          <span className="inline-block w-2 h-2 border-solid border-2 border-[#29a587] rounded-full ml-2 md:mt-2 mt-0 "></span>
        </div>
        <div className="">
          <button className="mr-8">
            <IoMoonOutline fontSize="1.6rem" />
          </button>
          <button onClick={showOverlayHandler}>
            <HiOutlineMenuAlt4 fontSize="1.8rem" />
          </button>
        </div>
      </header>
    </div>
  );
}

export default Header;
