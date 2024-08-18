function Title(props) {
  return (
    <div className="text-center">
      <h1 className="md:text-[3rem] text-[2rem]  font-bold">{props.hTitle}</h1>
      <p className="mt-4 font-bold">
        <span className="text-[#29a587]  text-[1rem]  mr-4">
          {props.greenTitle ? props.greenTitle : "  MY"}
        </span>
        <span className="text-[1.4rem]  lg:text-[1.9rem] font-bold font-Caveat">
          {props.spanTitle}
        </span>
      </p>
    </div>
  );
}

export default Title;
