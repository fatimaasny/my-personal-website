import Title from "../Title/Title";
import Item from "../Item/Item";

const list = [
  {
    titleP: "Web Application Design",
    titleH: "HTML ,CSS ,JavaScript",
    description:
      "We design and develop your website with beatiful, professional and user-friendly design.",
  },
  {
    titleP: "Web Development",
    titleH: "React.js",
    description:
      "We develop your website and web application projects by the popular React library.",
  },
  {
    titleP: "Web Design",
    titleH: "Next.js",
    description:
      "We are able to implement your projects with Next.Js so that the content of your site is SEO in Google.",
  },
  {
    titleP: "Web Design",
    titleH: "Consulting Front End",
    description:
      "We will review your request to create a site and measure your needs then suggest you the best site.",
  },
];

function MyServices() {
  return (
    <>
      <a id="services"></a>
      <div className="mt-[8rem]">
        <Title hTitle="WHAT I DO" spanTitle="Services" />
        <div className="flex flex-row gap-4 justify-between px-[0.5rem] md:px-[7rem] mt-12">
          {list.map((i, index) => (
            <Item
              key={index}
              titleP={i.titleP}
              titleH={i.titleH}
              seeTitle="Contact Me"
            >
              {i.description}
            </Item>
          ))}
        </div>
        <div className="flex flex-row items-center justify-center mt-12 text-center">
          <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] bg-[#fff] rounded-full"></span>
          <span className="w-5 h-[2px] inline-block bg-[#000]"></span>
          <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] bg-[#fff] rounded-full"></span>
          <span className="w-5 h-[2px] inline-block bg-[#000]"></span>
          <span className="w-3 h-3 inline-block border-2 border-solid border-[#000] bg-[#00ffc8] rounded-full"></span>
        </div>
      </div>
    </>
  );
}

export default MyServices;
