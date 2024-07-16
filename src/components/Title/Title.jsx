function Title(props) {
  return (
    <div className="text-center">
      <h1 className="text-[3.5rem] font-bold">{props.hTitle}</h1>
      <p className="font-bold">
        <span className="text-[#00ffc8] text-[0.9rem] mr-4">MY</span>
        <span className="text-[1.3rem]">{props.spanTitle}</span>
      </p>
    </div>
  );
}

export default Title;
