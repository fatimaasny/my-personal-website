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
      <div className="text-[0.6rem] md:text-[0.8rem]">
        <p className="font-bold">{props.pFirst} </p>
        <p className="font-bold text-[#29a587]">{props.Psecond}</p>
      </div>
    </div>
  );
}

function PersonalInformation() {
  return (
    <div className="flex lg:flex-row   h-full w-full  justify-between lg:px-[2rem] px-[1rem] xl:px-[7rem] ">
      <div className="lg:w-[45%]   pt-[4rem] flex flex-col justify-center items-center lg:justify-start lg:items-start  mx-auto">
        <p className="font-bold text-[0.9rem] ">
          <span className="">HELLO, </span>
          <span className=" text-[#29a587]">MY NAME IS</span>
        </p>
        <h1 className="my-4  md:text-[5rem] text-[3rem] font-bold  font-AllertaStencil">
          <span className="text-[#29a587]">Fatima </span>
          <span className="text-[#aaa]">Sinayi</span>
        </h1>
        <p className="mt-2 ">
          <span className="font-bold text-[0.8rem] md:text-[0.9rem]">
            I AM{" "}
          </span>
          <span className="md:text-[1.5rem] font-extrabold ml-2 font-Caveat">
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
          <a href="#skills" className="md:ml-8 font-bold text-[0.85rem]">
            MY SKILLS
          </a>
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
