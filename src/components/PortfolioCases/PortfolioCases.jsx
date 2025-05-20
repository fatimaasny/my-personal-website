import Title from "../Title/Title";
import Item from "../Item/Item";

import img1 from "../../images/snappfood2.jpg";
import img2 from "../../images/gym-ahmad2.jpeg";
import img3 from "../../images/travel3.png";
import img4 from "../../images/kidstyle.jpg";

const listAll = [
  {
    image: img1,
    titleP: "Web Design",
    titleH: "Online Food Website",
    seeTitle: "Project",
    parag:
      "I designed and develop this web site for more practise and expriment with calling APIs of snappfood.",
    url: "http://snappfood.fatimasinayi.com/",
  },
  {
    image: img2,
    titleP: "Web Development",
    titleH: "Gym Website",
    seeTitle: "Project",
    parag:
      "I designed and develop this web site with HTML, CSS, JAVASCRIPT and React for a great athlete.",
    url: "http://gymcoach.fatimasinayi.com/",
  },
  {
    image: img3,
    titleP: "Web Development",
    titleH: "Travel Album Website",
    seeTitle: "Project",
    parag:
      "I designed and develop this web site to work with api in my system and hope to love it.",
    url: "http://travelalbum.fatimasinayi.com/",
  },
  {
    image: img4,
    titleP: "Web Development",
    titleH: "Kid Style Website",
    seeTitle: "Project",
    parag:
      "I designed and develop this web site to have a real expriment with shopping cart and try it.",
    url: "http://kidstyle.fatimasinayi.com/",
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
      <div className="  px-[1rem] mt-[8rem] md:mt-[4.5rem] pb-[4rem]  ">
        <Title hTitle="PORTFOLIO" spanTitle="Cases" />

        <div className="grid grid-cols-1 gap-4 mt-10 justify-items-center place-items-center xl:grid-cols-4 md:grid-cols-2">
          {listAll.map((l, index) => (
            <Item
              key={index}
              image={l.image}
              titleP={l.titleP}
              titleH={l.titleH}
              seeTitle={l.seeTitle}
              url={l.url}
            >
              {l.parag}
            </Item>
          ))}
        </div>
      </div>
    </>
  );
}

export default PortfolioCases;
