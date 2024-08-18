import Item from "./Item";
function Content(props) {
  return (
    <div className="w-full">
      <h1 className="font-bold text-[1.6rem] text-center ">{props.title}</h1>
      <div className="w-full h-[2px] mt-8 mb-2 bg-[#000]"></div>
      <div>
        {props.title === "Education"
          ? props.list.map((i, index) => (
              <Item
                key={index}
                title={i.title}
                name={i.name}
                date={i.date}
                description={i.description}
                isShow={props.isShowEducation}
                handler={props.handlerEducation}
              />
            ))
          : props.list.map((i, index) => (
              <Item
                key={index}
                title={i.title}
                name={i.name}
                date={i.date}
                description={i.description}
                isShow={props.isShowExprience}
                handler={props.handlerExperience}
              />
            ))}
      </div>
    </div>
  );
}

export default Content;
