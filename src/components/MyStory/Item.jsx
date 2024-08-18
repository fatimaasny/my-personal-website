import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function Item(props) {
  return (
    <div className="p-8 border-[#000] border-b-2 border-r-2 relative ">
      <h3
        onClick={async () => {
          await props.handler({
            value: props.title,
            toggle: !props.isShow.toggle,
          });
        }}
        className="font-bold lg:text-[1.6rem] text-[1.3rem] mb-4 cursor-pointer "
      >
        {props.title}
      </h3>
      {props.isShow.value === props.title && props.isShow.toggle === true && (
        <>
          <div className="flex flex-col mb-4 font-bold md:flex-row md:items-center md:justify-between">
            <h4 className=" font-Caveat lg:text-[1.5rem] text-[1.25rem]">
              {props.name}
            </h4>
            <p className="text-[0.8rem]">{props.date}</p>
          </div>
          <p className="text-[#444]">{props.description}</p>
        </>
      )}

      <span
        onClick={async () => {
          await props.handler({
            value: props.title,
            toggle: !props.isShow.toggle,
          });
        }}
        className={`hover:shadow-none transition-all duration-1000 ease-in-out cursor-pointer absolute z-10 bottom-[-1.5rem] right-[-1.5rem] ${
          props.isShow.toggle ? "bg-[#f1f2ed]" : "bg-[#fff]"
        } flex justify-center items-center w-12 h-12 border-2 border-[#000] rounded-full shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)]`}
      >
        {props.isShow.value === props.title && props.isShow.toggle === true ? (
          <FaMinus fontSize="1.2rem" />
        ) : (
          <FaPlus fontSize="1.2rem" />
        )}
      </span>
    </div>
  );
}

export default Item;
