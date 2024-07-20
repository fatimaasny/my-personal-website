import Card from "../Card/Card";
import Image from "../Image/Image";
import { FaArrowRight } from "react-icons/fa6";

function Item(props) {
  return (
    <Card class="pt-6 pl-6 pr-6 pb-2 w-[26rem]">
      {props.image && <Image source={props.image} class="" />}
      <p
        className={`font-bold text-[0.9rem] ${
          props.image && "text-[#00ffc8] mt-8"
        }`}
      >
        {props.titleP}
      </p>
      <h2
        className={`font-bold text-[1.7rem]  ${
          props.image ? "mt-1 mb-4" : "mt-[3rem]"
        } `}
      >
        {props.titleH}
      </h2>
      <p className="text-[#888] mt-[1rem]">{props.children}</p>
      <div
        className={`flex flex-row justify-between ${
          props.image ? "mt-0" : "mt-10 "
        }`}
      >
        <p className="flex flex-row items-center cursor-pointer">
          <span className="font-bold mr-6">
            See <span>{props.seeTitle}</span>
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
    </Card>
  );
}

export default Item;
