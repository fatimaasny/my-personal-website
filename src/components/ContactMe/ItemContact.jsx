function ItemContact(props) {
  const phoneNumber = "+989174348436";
  return (
    <div className="flex gap-x-10 ">
      <div className="flex items-center justify-center">
        <span className="border-2 border-[#000] shadow-[5px_5px_0px_0px_rgba(0,0,0,0.2)] w-14 h-14 rounded-full bg-[#fff] flex justify-center items-center">
          {props.icon}
        </span>
        <span className="w-10 h-[2px] bg-[#000] inline-block"></span>
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold text-[1.9rem] font-Caveat">{props.title}</h2>
        {props.id === "phone" ? (
          <a href={`tel:${phoneNumber}`} className="text-blue-400">
            {props.text}
          </a>
        ) : (
          <p className="text-[1rem] text-[#444]">{props.text}</p>
        )}
      </div>
    </div>
  );
}

export default ItemContact;
