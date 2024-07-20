import myImage from "../../images/profile2.png";
import Button from "../Button/Button";

import { FaPlus } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function ImageMe() {
  return (
    <div className=" w-full h-[700px]  -mt-5rem overflow-hidden rounded-bl-full rounded-br-full relative   ">
      <div className="bg-[#00ffc8] rounded-full  w-[620px] h-[620px] mt-[6rem] ml-16  absolute  z-20"></div>
      <img
        src={myImage}
        alt="my-image"
        className="w-[650px] h-[770px] absolute z-30 ml-7 "
      />
    </div>
  );
}

function CirclesShape({ marginTop, marginLeft, zIndex }) {
  return (
    <div
      className={`w-[9.5rem] h-[9.5rem] rounded-full  overflow-hidden  absolute  ${marginLeft} ${marginTop} ${zIndex}`}
    >
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full  mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px]  mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full  mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full  mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full  mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
      <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
    </div>
  );
}
function InfoProject({
  number,
  icon,
  pFirst,
  Psecond,
  marginTop,
  marginLeft,
  pMarginRight,
}) {
  return (
    <div
      className={`flex flex-row items-center justify-center w-[15rem] h-[5rem] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)] bg-[#fff] rounded-[3rem]  border-solid border-2 border-[#000] absolute z-40 ${marginTop} ${marginLeft} `}
    >
      <p className={`text-[3rem] font-bold ${pMarginRight}`}>{number}</p>

      {icon && <button className="ml-4 mr-4"> {icon}</button>}
      <div>
        <p className="font-bold">{pFirst} </p>
        <p className="font-bold text-[#00ffc8]">{Psecond}</p>
      </div>
    </div>
  );
}

function PersonalInformation() {
  return (
    <div className="flex flex-row h-screen justify-between pl-[7rem] pr-[7rem] ">
      <div className=" w-[45%] pt-[8rem]">
        <p>
          {" "}
          <span className="font-bold ">HELLO, </span>
          <span className="font-bold text-[#00ffc8]">MY NAME IS</span>
        </p>
        <h1 className="mt-4 text-[6rem]">
          <span className="text-[#00ffc8]">Fatima </span>
          <span className="text-[#666]">Sinayi</span>
        </h1>
        <p className="mt-2">
          <span className="font-bold">I AM </span>
          <span className="text-[1.3rem] font-bold ml-2">
            Front End Developer
          </span>
        </p>
        <p className="text-[#666] text-[1.1rem] mt-8">
          From Iran, Gachsaran. I am interested in web design, also i am good at
          managing your team. I love to talk with you about our unique.
        </p>
        <div className="mt-8">
          <button className="mr-4">
            <FaInstagram fontSize="1.6rem" />
          </button>
          <button>
            <FaTelegramPlane fontSize="1.6rem" />
          </button>
        </div>
        <div className="flex flex-row items-center mt-6 ">
          <Button>DOWNLOAD CV</Button>
          {/* <button className="w-[12rem] h-[3.5rem]  flex items-center justify-center font-bold text-[0.9rem] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)] bg-[#fff] transition ease-in-out delay-1000 hover:bg-[#00ffc8] hover:text-[#fff] rounded-[3rem]  border-solid border-2 border-[#000]">
            DOWNLOAD CV
          </button> */}
          <span className="inline-block w-[3rem] h-[1px] bg-[#000]"></span>
          <p className="ml-8 font-bold text-[0.8rem]">MY SKILLS</p>
        </div>
      </div>

      <div className=" w-[55%] h-full relative ">
        <CirclesShape
          marginTop="mt-[3.5rem]"
          marginLeft="ml-[31rem]"
          zIndex="z-10"
        />

        <ImageMe />

        <InfoProject
          number="1"
          icon={<FaPlus fontSize="2rem" color="#00ffc8" />}
          pFirst="YEARS OF"
          Psecond="EXPERIENCE"
          marginLeft="ml-4"
          marginTop="-mt-[10rem]"
        />

        <CirclesShape
          marginTop="-mt-[8rem]"
          marginLeft="-ml-[4rem]"
          zIndex="z-10"
        />

        <InfoProject
          number="5"
          pFirst="COMPLETED"
          Psecond="PROJECTS"
          marginLeft="ml-[27rem]"
          marginTop="-mt-[7rem]"
          pMarginRight="mr-4"
        />

        <CirclesShape
          marginTop="-mt-[6rem]"
          marginLeft="ml-[34rem]"
          zIndex="z-10"
        />
      </div>
    </div>
  );
}

export default PersonalInformation;
