function Courses(props) {
  return (
    <div className="">
      <div className="flex flex-row justify-between pl-4 pr-4">
        <p className="font-bold text-[1.3rem]">{props.title}</p>
        <p className="font-bold">
          <span>{props.percent}</span>
          <span className="text-[#00ffc8] ml-2">%</span>
        </p>
      </div>
      <p className="text-[#444] pl-4 pr-4 mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolore
        perspiciatis sint, ratione earum, ut eum illo obcaecati autem culpa.
      </p>
      <div className="flex flex-row items-center">
        <span
          className={`inline-block ${props.spanW1} h-[2px] bg-[#000]`}
        ></span>
        <span
          className={`inline-block w-6 h-6 border-2 border-solid border-[#000] bg-[#00ffc8] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)] rounded-full`}
        ></span>
        <span
          className={`inline-block ${props.spanW2} h-[2px] bg-[#bbb]`}
        ></span>
      </div>
    </div>
  );
}

export default Courses;
