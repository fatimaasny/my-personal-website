import { useState } from "react";
import Title from "../Title/Title";
import Item from "../Item/Item";

import img1 from "../../images/img1.jpeg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";

// import Button from "../Button/Button";

const listAll = [
  {
    image: img1,
    titleP: "DEVELOPMENT",
    titleH: "Explor",
    seeTitle: "Project",
    parag:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis saepe voluptatibus quibusdam optio deserunt!",
  },
  {
    image: img2,
    titleP: "DESIGNER",
    titleH: "UI UX",
    seeTitle: "Project",
    parag:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis saepe voluptatibus quibusdam optio deserunt!",
  },
  {
    image: img3,
    titleP: "PROGRAMMER",
    titleH: "Programmer",
    seeTitle: "Project",
    parag:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis saepe voluptatibus quibusdam optio deserunt!",
  },
];

function PortfolioCases() {
  // const [isShow, setIsShow] = useState("ALL");
  // const [selected, setSelected] = useState("ALL");
  // const [list, setList] = useState([...listAll]);
  // const [updatedList, setUpdatedList] = useState([...list]);
  // const isShowHandler = (status) => {
  //   setIsShow(status);
  // };
  // const selectedHandler = (status) => {
  //   setSelected(status);
  // };

  // const listFilterHandler = (title) => {
  //   if (title === "ALL") {
  //     setUpdatedList(list);
  //     return;
  //   }

  //   const newList = list.filter((l) => l.titleP.includes(title));
  //   console.log(newList);
  //   setUpdatedList(newList);
  // };

  return (
    <>
      <a id="cases"></a>
      <div className="px-[7rem]  mt-[8rem] md:mt-[9rem] pb-[5rem] ">
        <Title hTitle="PORTFOLIO" spanTitle="Cases" />
        {/* <div className="flex flex-row justify-center items-center mt-[4rem] mb-[2rem] font-bold">
          <button
            className="flex flex-col"
            onMouseOver={() => isShowHandler("ALL")}
            onClick={() => {
              selectedHandler("ALL");
              listFilterHandler("ALL");
            }}
          >
            <span className={`mb-3 ${selected === "ALL" && "text-[#29a587]"}`}>
              ALL
            </span>
            <span
              className={
                isShow === "ALL" && "inline-block w-4 h-[2px] bg-[#29a587] "
              }
            ></span>
          </button>
          <button
            className="flex flex-col ml-8 mr-8"
            onMouseOver={() => isShowHandler("DEVELOPMENT")}
            onClick={() => {
              selectedHandler("DEVELOPMENT");
              listFilterHandler("DEVELOPMENT");
            }}
          >
            <span
              className={`mb-3 ${
                selected === "DEVELOPMENT" && "text-[#29a587]"
              }`}
            >
              DEVELOPMENT
            </span>
            <span
              className={
                isShow === "DEVELOPMENT" &&
                "inline-block w-10 h-[2px] bg-[#29a587] "
              }
            ></span>
          </button>
          <button
            className="flex flex-col ml-8 mr-8"
            onMouseOver={() => isShowHandler("UI UX DESIGN")}
            onClick={() => {
              setSelected("UI UX DESIGN");
              listFilterHandler("DESIGNER");
            }}
          >
            <span
              className={`mb-3 ${
                selected === "UI UX DESIGN" && "text-[#29a587]"
              }`}
            >
              UI UX DESIGN
            </span>
            <span
              className={
                isShow === "UI UX DESIGN" &&
                "inline-block w-10 h-[2px] bg-[#29a587]"
              }
            ></span>
          </button>
          <button
            className="flex flex-col"
            onMouseOver={() => isShowHandler("PROGRAMMER")}
            onClick={() => {
              setSelected("PROGRAMMER");
              listFilterHandler("PROGRAMMER");
            }}
          >
            <span
              className={`mb-3 ${
                selected === "PROGRAMMER" && "text-[#29a587]"
              }`}
            >
              PROGRAMMER
            </span>
            <span
              className={
                isShow === "PROGRAMMER" &&
                "inline-block w-10 h-[2px] bg-[#29a587]"
              }
            ></span>
          </button>
        </div> */}
        <div className="grid grid-cols-1 mt-16 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-8">
          {listAll.map((l, index) => (
            <Item
              key={index}
              image={l.image}
              titleP={l.titleP}
              titleH={l.titleH}
              seeTitle={l.seeTitle}
            >
              {l.parag}
            </Item>
          ))}
        </div>
        {/* <div className="flex items-center justify-center mt-14">
          <Button className="btn-before">VIEW MORE</Button>
        </div> */}
      </div>
    </>
  );
}

export default PortfolioCases;
