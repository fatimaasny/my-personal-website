import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function ItemExperience(props) {
  return (
    <div className="p-4 border-[#000] border-b-2 border-r-2 relative">
      <h3 className="font-bold text-[1.6rem] mb-4">{props.title}</h3>

      <div className="flex justify-between mb-4 font-bold">
        <h4 className=" font-Caveat text-[1.5rem]">{props.name}</h4>
        <p className="text-[0.8rem]">{props.date}</p>
      </div>
      <p className="text-[#444]">{props.description}</p>
      <span className="inline-block absolute z-10 bottom-[-1rem] right-[-1rem] bg-[#fff] text-center leading-10 w-10 h-10 border-2 border-[#000] rounded-full shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)]">
        {}
      </span>
    </div>
  );
}

export default ItemExperience;
