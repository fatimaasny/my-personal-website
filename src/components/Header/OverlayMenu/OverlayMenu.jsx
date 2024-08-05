import ListIcons from "../../ListIcons/ListIcons";

import { IoCloseSharp } from "react-icons/io5";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

function PagesOverlay() {
  return (
    <div className=" py-4 font-medium bg-white text-[0.9rem]">
      <ul className="space-y-2">
        <li>Works (list)</li>
        <li>Works (grid)</li>
        <li>Works Single Page</li>
        <li>Blog</li>
        <li>Single Post</li>
      </ul>
    </div>
  );
}

function OverlayMenu(props) {
  const [isPagesOverlay, setIsPagesOverlay] = useState(false);
  const togglePagesHandler = () => {
    setIsPagesOverlay((isPagesOverlay) => !isPagesOverlay);
  };

  return (
    <div className="absolute top-0  right-0 z-40 w-full h-screen overflow-y-scroll transition ease-in-out bg-white sm:w-[80%] md:w-[55%] lg:w-[45%] xl:w-[35%] 2s">
      <div className="fixed top-0 right-0 text-right">
        <button className="m-4 xl:m-7" onClick={props.hideOverlayHandler}>
          <IoCloseSharp fontSize="2.2rem" />
        </button>
      </div>
      <div className="flex gap-10 pl-16 mt-10 xl:gap-4 xl:pl-4">
        <div className="flex flex-col items-center justify-end ">
          <div className="relative items-end hidden gap-0 lg:flex">
            <div
              className={` h-[5rem] w-[6rem] overflow-hidden xl:w-[8rem] xl:h-[9rem] rounded-lg  `}
            >
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px] "></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px] "></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px] "></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px] "></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]  "></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[12px]"></span>
            </div>
            <span className="inline-block bg-white absolute left-8 xl:left-12 z-50 w-8 h-8 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)] border-2 rounded-full border-[#000]"></span>
          </div>
          <span className="w-[3px] md:h-[88%] h-[80%] inline-block bg-[#000]"></span>
          <span className="inline-block w-8 h-8 rounded-full border-2 shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)] border-[#000]"></span>
        </div>
        <ul className="pl-8 w-[60%] mt-8 space-y-4 md:space-y-8 xl:space-y-12 text-[1.4rem] font-bold uppercase py-16 md:py-8 xl:py-12  ">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">services</a>
          </li>
          <li>
            <a href="#">skills</a>
          </li>
          <li>
            <a href="#">works</a>
          </li>
          <li>
            <a href="#">resume</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li className="flex items-center gap-2 " onClick={togglePagesHandler}>
            <span
              className={`${
                isPagesOverlay && "text-[#29a587]"
              } hover:text-[#29a587] transition duration-1000 ease-in-out cursor-pointer`}
            >
              pages
            </span>
            <button
              className={` transition duration-1000  ${
                isPagesOverlay ? "rotate-180" : "rotate-0"
              }`}
            >
              <FaAngleUp fontSize="1.3rem" />
            </button>
          </li>
          <li className={` ${isPagesOverlay ? "inline" : "hidden"}`}>
            <PagesOverlay />
          </li>
          <li>
            <ListIcons />
          </li>
        </ul>
      </div>

      <div className="w-full h-2 bg-[#000]"></div>
    </div>
  );
}

export default OverlayMenu;
