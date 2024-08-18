import Title from "../Title/Title";
import Courses from "./Courses/Courses";

function MySkills() {
  return (
    <>
      <a id="skills"></a>
      <div className=" px-[7rem]  mt-[8rem] md:mt-[10rem] pb-[5rem]  ">
        <Title hTitle="PROFESSIONAL SKILLS" spanTitle="Talent" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10 mt-[3rem]">
          <Courses title="HTML" percent="85" spanW1="w-10/12" spanW2="w-2/12" />
          <Courses title="CSS" percent="80" spanW1="w-9/12" spanW2="w-3/12" />
          <Courses
            title="JavaScript"
            percent="65"
            spanW1="w-7/12"
            spanW2="w-5/12"
          />
          <Courses title="React" percent="55" spanW1="w-6/12" spanW2="w-6/12" />
          <Courses title="Next" percent="45" spanW1="w-5/12" spanW2="w-7/12" />
        </div>
      </div>
    </>
  );
}

export default MySkills;
