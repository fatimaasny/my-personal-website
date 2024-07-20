import { useState } from "react";
import Title from "../Title/Title";
import Item from "../Item/Item";

import img1 from "../../images/img1.jpeg";
import img2 from "../../images/img2.jpg";
import img3 from "../../images/img3.jpg";
import Button from "../Button/Button";

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
  {
    image: img1,
    titleP: "DEVELOPMENT PROGRAMMER",
    titleH: "Front End",
    seeTitle: "Project",
    parag:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis saepe voluptatibus quibusdam optio deserunt!",
  },
  {
    image: img2,
    titleP: "UI UX DESIGNER",
    titleH: "UI UX",
    seeTitle: "Project",
    parag:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis saepe voluptatibus quibusdam optio deserunt!",
  },
  {
    image: img3,
    titleP: "FRONT END DESIGNER",
    titleH: "Programmer",
    seeTitle: "Project",
    parag:
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quis saepe voluptatibus quibusdam optio deserunt!",
  },
];

function PortfolioCases() {
  const [isShow, setIsShow] = useState("ALL");
  const [selected, setSelected] = useState("ALL");
  const [list, setList] = useState([...listAll]);
  const [updatedList, setUpdatedList] = useState([...list]);
  const isShowHandler = (status) => {
    setIsShow(status);
  };
  const selectedHandler = (status) => {
    setSelected(status);
  };

  const listFilterHandler = (title) => {
    if (title === "ALL") {
      setUpdatedList(list);
      return;
    }

    const newList = list.filter((l) => l.titleP.includes(title));
    console.log(newList);
    setUpdatedList(newList);
  };

  return (
    <div className="pl-[6rem] pr-[6rem]  mt-[8rem] pb-[5rem] ">
      <Title hTitle="PORTFOLIO" spanTitle="Cases" />
      <div className="flex flex-row justify-center items-center mt-[4rem] mb-[2rem] font-bold">
        <button
          className="flex flex-col"
          onMouseOver={() => isShowHandler("ALL")}
          onClick={() => {
            selectedHandler("ALL");
            listFilterHandler("ALL");
          }}
        >
          <span className={`mb-3 ${selected === "ALL" && "text-[#00ffc8]"}`}>
            ALL
          </span>
          <span
            className={
              isShow === "ALL" && "inline-block w-4 h-[2px] bg-[#00ffc8] "
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
            className={`mb-3 ${selected === "DEVELOPMENT" && "text-[#00ffc8]"}`}
          >
            DEVELOPMENT
          </span>
          <span
            className={
              isShow === "DEVELOPMENT" &&
              "inline-block w-10 h-[2px] bg-[#00ffc8] "
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
              selected === "UI UX DESIGN" && "text-[#00ffc8]"
            }`}
          >
            UI UX DESIGN
          </span>
          <span
            className={
              isShow === "UI UX DESIGN" &&
              "inline-block w-10 h-[2px] bg-[#00ffc8]  "
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
            className={`mb-3 ${selected === "PROGRAMMER" && "text-[#00ffc8]"}`}
          >
            PROGRAMMER
          </span>
          <span
            className={
              isShow === "PROGRAMMER" &&
              "inline-block w-10 h-[2px] bg-[#00ffc8]  "
            }
          ></span>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-x-6 gap-y-10">
        {updatedList.map((l, index) => (
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
      <Button class="mx-auto mt-14">VIEW MORE</Button>
    </div>
  );
}

export default PortfolioCases;
