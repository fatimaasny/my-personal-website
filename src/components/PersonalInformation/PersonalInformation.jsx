import Button from "../Button/Button";
import ListIcons from "../ListIcons/ListIcons";

import myImageBig from "../../images/fatima-profile.jpg";

import { FaPlus } from "react-icons/fa";

function ImageMe(props) {
  return (
    <div className="w-[450px] h-[450px] md:w-[650px] md:h-[650px] lg:w-[550px] lg:h-[550px] xl:w-[650px] xl:h-[650px]  mt-[2rem] flex justify-center  md:-mt-5rem overflow-hidden  rounded-full relative   ">
      <img
        src={props.image}
        alt="my-image"
        className="absolute z-30 mx-auto "
      />
    </div>
  );
}

function CirclesShape(props) {
  return (
    <div
      className={`md:w-[9.5rem] md:h-[9.5rem] h-[7rem] w-[7rem]   rounded-full  overflow-hidden  absolute  ${props.class}`}
    >
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]  "></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]  "></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]  "></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
      <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
    </div>
  );
}
function InfoProject(props) {
  return (
    <div
      className={`flex flex-row items-center justify-center md:w-[15rem] md:h-[5rem] w-[9rem] h-[3rem] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)] bg-[#fff] rounded-full   border-2 border-[#000] absolute z-30 ${props.class} `}
    >
      <p
        className={`md:text-[3rem] text-[1.3rem] font-bold ${
          !props.icon && "mr-4"
        } `}
      >
        {props.number}
      </p>

      {props.icon && <button className="mx-2 md:mx-4"> {props.icon}</button>}
      <div className="text-[0.6rem] md:text-[1rem]">
        <p className="font-bold">{props.pFirst} </p>
        <p className="font-bold text-[#29a587]">{props.Psecond}</p>
      </div>
    </div>
  );
}

function PersonalInformation() {
  return (
    <div className="flex lg:flex-row   h-full w-full  justify-between lg:px-[2rem] px-[1rem] xl:px-[8rem] ">
      <div className="lg:w-[45%]   pt-[4rem] flex flex-col justify-center items-center lg:justify-start lg:items-start  mx-auto">
        <p className="font-bold text-[0.9rem] ">
          <span className="">HELLO, </span>
          <span className=" text-[#29a587]">MY NAME IS</span>
        </p>
        <h1 className="my-4  md:text-[6rem] lg:text-[4rem] text-[3rem] font-bold">
          <span className="text-[#29a587]">Fatima </span>
          <span className="text-[#aaa]">Sinayi</span>
        </h1>
        <p className="mt-2 ">
          <span className="font-bold text-[0.8rem] md:text-[0.9rem]">
            I AM{" "}
          </span>
          <span className="md:text-[1.2rem] font-bold ml-2">
            Front End Developer
          </span>
        </p>
        <div className="relative lg:hidden">
          <CirclesShape class=" ml-[20rem]  md:mt-[3rem] md:ml-[29rem] z-10" />

          <ImageMe image={myImageBig} />

          <InfoProject
            number="1"
            icon={<FaPlus fontSize="md:2rem 1rem" color="#29a587" />}
            pFirst="YEARS OF"
            Psecond="EXPERIENCE"
            class="ml-4 -mt-[6rem] md:-mt-[10rem]"
          />

          <CirclesShape class="md:-mt-[8rem] md:-ml-[4rem] -mt-[5rem] -ml-[3rem] z-10" />

          <InfoProject
            number="5"
            pFirst="COMPLETED"
            Psecond="PROJECTS"
            class="md:ml-[27rem] md:-mt-[7rem] ml-[16rem] -mt-[4rem] "
          />

          <CirclesShape class="md:-mt-[6rem] md:ml-[34rem] -mt-[4rem] ml-[21rem] z-10" />
        </div>
        <p className="text-[#666] px-4 lg:px-0 md:w-2/3 lg:w-full  text-[1.2rem]   lg:mt-8 mt-[4rem] lg:text-left text-center">
          From Iran, Gachsaran. I am interested in web design, also i am good at
          managing your team. I love to talk with you about our unique.
        </p>
        <ListIcons />

        <div className="flex flex-col items-center mt-10 md:mt-6 md:flex-row ">
          <Button className="btn-before">DOWNLOAD CV</Button>
          <span className="inline-block w-[2px] my-5 md:my-0 h-[3rem] md:w-[3rem] md:h-[2px] bg-[#000]"></span>
          <p className="md:ml-8 font-bold text-[0.85rem]">MY SKILLS</p>
        </div>
      </div>

      <div className=" w-[55%] h-full  relative hidden lg:block">
        <CirclesShape class=" ml-[20rem]  md:mt-[3rem] md:ml-[29rem]  z-10 " />

        <ImageMe image={myImageBig} />

        <InfoProject
          number="1"
          icon={<FaPlus fontSize="md:2rem 1rem" color="#29a587" />}
          pFirst="YEARS OF"
          Psecond="EXPERIENCE"
          class="ml-4 -mt-[6rem] md:-mt-[10rem]"
        />

        <CirclesShape class="md:-mt-[8rem] md:-ml-[4rem] -mt-[5rem] -ml-[3rem] z-10" />

        <InfoProject
          number="5"
          pFirst="COMPLETED"
          Psecond="PROJECTS"
          class="md:ml-[27rem] md:-mt-[7rem] lg:ml-[22rem] ml-[16rem] -mt-[4rem] "
        />

        <CirclesShape class="md:-mt-[6rem] md:ml-[34rem] lg:ml-[27rem] -mt-[4rem] ml-[21rem] z-10" />
      </div>
    </div>
  );
}

export default PersonalInformation;

// import myImage from "../../images/profile2.png";
// import Button from "../Button/Button";

// import { FaPlus } from "react-icons/fa";
// import { FaTelegramPlane } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa6";

// function ImageMe() {
//   return (
//     <div className=" w-full h-[700px]  -mt-5rem overflow-hidden rounded-bl-full rounded-br-full relative   ">
//       <div className="bg-[#00ffc8] rounded-full  w-[620px] h-[620px] mt-[6rem] ml-16  absolute  z-20"></div>
//       <img
//         src={myImage}
//         alt="my-image"
//         className="w-[650px] h-[770px] absolute z-30 ml-7 "
//       />
//     </div>
//   );
// }

// function CirclesShape({ marginTop, marginLeft, zIndex }) {
//   return (
//     <div
//       className={`w-[9.5rem] h-[9.5rem] rounded-full  overflow-hidden  absolute  ${marginLeft} ${marginTop} ${zIndex}`}
//     >
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full  mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px]  mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full  mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full  mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full  mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//       <span className="inline-block w-2 h-2 border-solid border-2 border-black rounded-full ml-[20px] mt-[20px]"></span>
//     </div>
//   );
// }
// function InfoProject({
//   number,
//   icon,
//   pFirst,
//   Psecond,
//   marginTop,
//   marginLeft,
//   pMarginRight,
// }) {
//   return (
//     <div
//       className={`flex flex-row items-center justify-center w-[15rem] h-[5rem] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)] bg-[#fff] rounded-[3rem]  border-solid border-2 border-[#000] absolute z-40 ${marginTop} ${marginLeft} `}
//     >
//       <p className={`text-[3rem] font-bold ${pMarginRight}`}>{number}</p>

//       {icon && <button className="ml-4 mr-4"> {icon}</button>}
//       <div>
//         <p className="font-bold">{pFirst} </p>
//         <p className="font-bold text-[#00ffc8]">{Psecond}</p>
//       </div>
//     </div>
//   );
// }

// function PersonalInformation() {
//   return (
//     <div className="flex flex-row h-screen justify-between pl-[7rem] pr-[7rem] ">
//       <div className=" w-[45%] pt-[8rem]">
//         <p>
//           <span className="font-bold ">HELLO, </span>
//           <span className="font-bold text-[#00ffc8]">MY NAME IS</span>
//         </p>
//         <h1 className="mt-4 text-[6rem]">
//           <span className="text-[#00ffc8]">Fatima </span>
//           <span className="text-[#666]">Sinayi</span>
//         </h1>
//         <p className="mt-2">
//           <span className="font-bold">I AM </span>
//           <span className="text-[1.3rem] font-bold ml-2">
//             Front End Developer
//           </span>
//         </p>
//         <p className="text-[#666] text-[1.1rem] mt-8">
//           From Iran, Gachsaran. I am interested in web design, also i am good at
//           managing your team. I love to talk with you about our unique.
//         </p>
//         <div className="mt-8">
//           <button className="mr-4">
//             <FaInstagram fontSize="1.6rem" />
//           </button>
//           <button>
//             <FaTelegramPlane fontSize="1.6rem" />
//           </button>
//         </div>
//         <div className="flex flex-row items-center mt-6 ">
//           <Button>DOWNLOAD CV</Button>
//           <span className="inline-block w-[3rem] h-[1px] bg-[#000]"></span>
//           <p className="ml-8 font-bold text-[0.8rem]">MY SKILLS</p>
//         </div>
//       </div>

//       <div className=" w-[55%] h-full relative ">
//         <CirclesShape
//           marginTop="mt-[3.5rem]"
//           marginLeft="ml-[31rem]"
//           zIndex="z-10"
//         />

//         <ImageMe />

//         <InfoProject
//           number="1"
//           icon={<FaPlus fontSize="2rem" color="#00ffc8" />}
//           pFirst="YEARS OF"
//           Psecond="EXPERIENCE"
//           marginLeft="ml-4"
//           marginTop="-mt-[10rem]"
//         />

//         <CirclesShape
//           marginTop="-mt-[8rem]"
//           marginLeft="-ml-[4rem]"
//           zIndex="z-10"
//         />

//         <InfoProject
//           number="5"
//           pFirst="COMPLETED"
//           Psecond="PROJECTS"
//           marginLeft="ml-[27rem]"
//           marginTop="-mt-[7rem]"
//           pMarginRight="mr-4"
//         />

//         <CirclesShape
//           marginTop="-mt-[6rem]"
//           marginLeft="ml-[34rem]"
//           zIndex="z-10"
//         />
//       </div>
//     </div>
//   );
// }

// export default PersonalInformation;
