import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function Item({ id, title, name, date, description, isShow, handlerIsShow }) {
  //

  function handlerTitle() {
    if (isShow.value === "") {
      // first load
      handlerIsShow(title, true, id);
    } else if (isShow.value === title && isShow.id === id) {
      // باز هست و باید بسته بشه
      handlerIsShow(title, false, id);
    } else if (isShow.value !== title) {
      //  یکی  باز هست و الان روی   یکی دیگه زدیم
      // پس قبلی باید بسته بشه و این جدید باز بشه
      handlerIsShow(title, true, id);
    }
  }
  return (
    <div className="p-8 border-[#000] border-b-2 border-r-2 relative ">
      <h3
        onClick={handlerTitle}
        className="font-bold lg:text-[1.6rem] text-[1.3rem] mb-4 cursor-pointer "
      >
        {title}
      </h3>
      {isShow.value === title && isShow.toggle === true && isShow.id === id && (
        <>
          <div className="flex flex-col mb-4 font-bold md:flex-row md:items-center md:justify-between">
            <h4 className=" font-Caveat  text-[1.1rem]">{name}</h4>
            <p className="text-[0.8rem]">{date}</p>
          </div>
          <p className="text-[#444]">{description}</p>
        </>
      )}

      {isShow.toggle && isShow.value === title && isShow.id === id ? (
        <button
          onClick={() => handlerIsShow(title, false, id)}
          className={`hover:shadow-none transition-all duration-1000 ease-in-out cursor-pointer absolute z-10 bottom-[-1.5rem] right-[-1.5rem] ${
            isShow.toggle ? "bg-[#f1f2ed]" : "bg-[#fff]"
          } flex justify-center items-center w-12 h-12 border-2 border-[#000] rounded-full shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)]`} // onClick={() => handlerIsShow(title, false, id)}
        >
          <FaMinus fontSize="1.2rem" />
        </button>
      ) : (
        <button
          onClick={() => handlerIsShow(title, true, id)}
          className={`hover:shadow-none transition-all duration-1000 ease-in-out cursor-pointer absolute z-10 bottom-[-1.5rem] right-[-1.5rem] ${
            isShow.toggle ? "bg-[#f1f2ed]" : "bg-[#fff]"
          } flex justify-center items-center w-12 h-12 border-2 border-[#000] rounded-full shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)]`}
        >
          <FaPlus fontSize="1.2rem" />
        </button>
      )}
    </div>
  );
}

export default Item;
