import Title from "../Title/Title";
import Courses from "./Courses/Courses";
const list = [
  {
    title: "HTML",
    percent: "85",
    spanW1: "w-10/12",
    spanW2: "w-2/12",
    description:
      "HTML describes the structure of a Web page, HTML elements tell the browser how to display the content. ",
  },
  {
    title: "CSS",
    percent: "80",
    spanW1: "w-9/12",
    spanW2: "w-3/12",
    description:
      "CSS describes how HTML elements are to be displayed, it can control layout of multiple web pages all at once.",
  },
  {
    title: "JavaScript",
    percent: "65",
    spanW1: "w-7/12",
    spanW2: "w-5/12",
    description:
      "JavaScript can update and change both HTML and CSS, JavaScript can calculate, manipulate and validate data.",
  },
  {
    title: "React",
    percent: "55",
    spanW1: "w-6/12",
    spanW2: "w-6/12",
    description:
      "React is a JavaScript library created by Facebook, a User Interface library and a tool for building UI components.",
  },
  {
    title: "Next",
    percent: "45",
    spanW1: "w-5/12",
    spanW2: "w-7/12",
    description:
      "Next.js enables you to create high-quality web applications with the power of React components.",
  },
];
function MySkills() {
  return (
    <>
      <a id="skills"></a>
      <div className=" xl:px-[7rem] px-[1rem]  mt-[8rem] md:mt-[10rem] pb-[5rem]  ">
        <Title hTitle="PROFESSIONAL SKILLS" spanTitle="Talent" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mt-[3rem]">
          {list.map((i, index) => (
            <Courses
              key={index}
              title={i.title}
              percent={i.percent}
              spanW1={i.spanW1}
              spanW2={i.spanW2}
            >
              {i.description}
            </Courses>
          ))}
        </div>
      </div>
    </>
  );
}

export default MySkills;
