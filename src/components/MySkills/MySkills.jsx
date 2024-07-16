import Title from "../Title/Title";
import Courses from "./Courses/Courses";

function MySkills() {
  return (
    <div className="pl-[6rem] pr-[6rem]  mt-[8rem] pb-[5rem] ">
      <Title hTitle="PROFESSIONAL SKILLS" spanTitle="Talent" />
      <div className="grid grid-cols-3 gap-x-6 gap-y-10 mt-[3rem]">
        <Courses
          title="HTML"
          percent="85"
          spanW1="w-[21rem]"
          spanW2="w-[4rem]"
        />
        <Courses
          title="CSS"
          percent="80"
          spanW1="w-[18rem]"
          spanW2="w-[7rem]"
        />
        <Courses
          title="JavaScript"
          percent="65"
          spanW1="w-[16rem]"
          spanW2="w-[9rem]"
        />
        <Courses
          title="React"
          percent="55"
          spanW1="w-[14rem]"
          spanW2="w-[11rem]"
        />
      </div>
    </div>
  );
}

export default MySkills;
