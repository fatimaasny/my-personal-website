function Button(props) {
  return (
    <button
      className={`${props.class} w-[12rem] h-[3.5rem]  flex items-center justify-center font-bold text-[0.9rem] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)] bg-[#fff] transition ease-in-out delay-1000 hover:bg-[#00ffc8] hover:text-[#fff] rounded-[3rem]  border-solid border-2 border-[#000]`}
    >
      {props.children}
    </button>
  );
}

export default Button;
