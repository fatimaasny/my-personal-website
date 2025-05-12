import Item from "./Item";
function Content(props) {
  return (
    <div className="w-full">
      <h1 className="font-bold text-[1.6rem] text-center ">{props.title}</h1>
      <div className="w-full h-[2px] mt-8 mb-2 bg-[#000]"></div>
      <div>
        {props.list.map((i) => (
          <Item
            key={i.id}
            id={i.id}
            title={i.title}
            name={i.name}
            date={i.date}
            description={i.description}
            isShow={props.isShowEducation}
            handlerIsShow={props.handlerEducation}
          />
        ))}
      </div>
    </div>
  );
}

export default Content;
