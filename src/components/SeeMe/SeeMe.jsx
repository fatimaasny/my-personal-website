import { FaArrowRight } from "react-icons/fa6";

function SeeMe(props) {
  return (
    <div className="flex flex-row justify-between mt-10 ">
      <p className="flex flex-row items-center cursor-pointer">
        <span className="mr-6 font-bold">
          See <span>{props.title}</span>
        </span>
        <button>
          <FaArrowRight fontSize="1.1rem" color="#29a587" />
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
