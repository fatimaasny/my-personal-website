import { useState } from "react";
import Title from "../Title/Title";
import Content from "./Content";

const listItemsEducation = [
  {
    title: "CoderHouse Course",
    name: "Frontend Programming",
    date: "2022 - 2024",
    description:
      "I passed the HTML,CSS,JS courses and then the React and Next courses.",
  },
  {
    title: "University of Isfahan",
    name: "Information Technology",
    date: "2011 - 2015",
    description: "I studied information technology at Isfahan University. ",
  },
  {
    title: "Mathematics and Physics",
    name: "High School",
    date: "2007 - 2011",
    description:
      "I passed the high school course in the field of mathematics and physics at Zainabiyah school.",
  },
];

const listItemsExperience = [
  {
    title: "Ahmad Site",
    name: "Bodybuilding Coach",
    date: "2022 - 2024",
    description: "I design and develop this site for my lovly coach.",
  },
  {
    title: "Snappfood",
    name: "Copy of Snappfood",
    date: "2024",
    description: "I studied information technology at Isfahan University. ",
  },
  {
    title: "Fatima Site",
    name: "With Tailwind",
    date: "2024",
    description: "I develop my site with tailwind and i love it so much.",
  },
];

function MyStory() {
  const [isShowEducation, setIsShowEducation] = useState({
    value: "",
    toggle: false,
  });
  const [isShowExperience, setIsShowExperience] = useState(false);

  const handlerEducation = ({ value, toggle }) => {
    setIsShowEducation({ value: value, toggle: toggle });
  };

  const handlerExperience = (value) => {
    setIsShowExperience(value);
  };
  return (
    <>
      <a id="resume"></a>
      <div className="px-[7rem] mt-[5rem]">
        <Title hTitle="Resume" spanTitle="Story" />
        <div className="flex flex-col gap-4 mt-16 md:flex-row">
          <Content
            isShowEducation={isShowEducation}
            handlerEducation={handlerEducation}
            title="Education"
            list={listItemsEducation}
          />
          <Content
            isShowExprience={isShowExperience}
            handlerExperience={handlerExperience}
            title="Exprience"
            list={listItemsExperience}
          />
        </div>
      </div>
    </>
  );
}

export default MyStory;
