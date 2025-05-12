import Title from "../Title/Title";
import Item from "../Item/Item";
import { useEffect, useRef, useState } from "react";
import useLongpressWithCircles from "../../hooks/useLongpressWithCircles";

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
  const contentRef = useRef(null);
  const circlesRef = useRef([]);
  const [screenSize, setScreenSize] = useState(null);

  const { handlers, circleGreen } = useLongpressWithCircles(
    contentRef,
    circlesRef
  );

  useEffect(() => {
    const handleCheckSize = () => {
      if (contentRef.current) {
        const width = contentRef.current.offsetWidth;
        if (width <= 767) setScreenSize("mobile");
        else if (width <= 1023) setScreenSize("tablet");
        else setScreenSize("desktop");
      }
    };
    handleCheckSize();
    window.addEventListener("resize", handleCheckSize);

    return () => {
      window.removeEventListener("resize", handleCheckSize);
    };
  }, []);

  const circlesCount =
    screenSize === "mobile"
      ? 4
      : screenSize === "tablet"
      ? 3
      : screenSize === "desktop"
      ? 2
      : 0;

  return (
    <>
      <a id="services"></a>
      <div className="mt-[8rem]">
        <Title hTitle="WHAT I DO" spanTitle="Services" />
        <div
          ref={contentRef}
          {...handlers}
          style={{ scrollbarWidth: "none" }}
          className="grid grid-flow-col w-[90%]   mx-auto cursor-grab  grid-cols-minmax-100-1fr  md:grid-cols-calc-50 lg:grid-cols-calc-33 gap-x-6 px-[2rem] md:px-[4rem] xl:px-[7rem] mt-12 overflow-x-scroll"
        >
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
        <div className="flex flex-row items-center justify-center mt-12 text-center ">
          {Array.from({ length: circlesCount }).map((_, i) => (
            <>
              <span
                key={i}
                ref={(el) => (circlesRef.current[i] = el)}
                className={` inline-block border-2 border-solid border-[#000] rounded-full ${
                  i === circleGreen
                    ? "bg-[#29a587] w-4 h-4"
                    : "bg-[#fff] w-2 h-2"
                } `}
              ></span>
              {i < circlesCount - 1 && (
                <span className="w-5 h-[2px] inline-block bg-[#000]"></span>
              )}
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyServices;
