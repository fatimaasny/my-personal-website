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
    title: "Courses in University",
    name: "C++, C#",
    date: "2011-2015",
    description:
      "I did projects in the university with C++ and C# programming languages.",
  },
  {
    title: "Example Project",
    name: "Bodybuilding Coach",
    date: "2023 - 2024",
    description: "I design and develop this site for my lovly coach.",
  },
  {
    title: "Freelance",
    name: "Do freelance projects",
    date: "2024",
    description: "I am doing some Freelance projects ",
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
      <div className="xl:px-[7rem] px-[2rem]  mt-[5rem]">
        <Title hTitle="Resume" spanTitle="Story" />
        <div className="flex flex-col gap-10 mt-16 md:flex-row">
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
