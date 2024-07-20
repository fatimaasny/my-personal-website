import { FaArrowRight } from "react-icons/fa6";

function SeeMe(props) {
  return (
    <div className=" mt-10 flex flex-row justify-between">
      <p className="flex flex-row items-center cursor-pointer">
        <span className="font-bold mr-6">
          See <span>{props.title}</span>
        </span>
        <button>
          <FaArrowRight fontSize="1.1rem" color="#00ffc8" />
        </button>
      </p>
      <div className="w-[100px]  rounded-tl-[55px] overflow-hidden font-bold">
        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>

        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>

        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>

        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
      </div>
    </div>
  );
}

export default SeeMe;
