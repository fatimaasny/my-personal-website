const before =
  " before:content-[''] before:absolute before:z-0 before:bottom-0 before:left-0 before:w-full before:h-0 before:transition before:h before:ease-in-out before:delay-1000hover:before:h-full";

function Button(props) {
  return (
    <button
      className={`${props.class} 
      relative z-10 overflow-hidden 
      w-[12rem] h-[3.5rem]  flex items-center
      justify-center font-bold text-[0.9rem] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)] bg-[#fff]
      rounded-[3rem]  border-solid border-2 border-[#000]
      transition ease-in-out duration-[0.5s]
      hover:bg-[#00ffc8] hover:text-[#fff]
      `}
    >
      {props.children}
    </button>
  );
}

export default Button;
