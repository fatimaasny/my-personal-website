import Title from "../Title/Title";
import Item from "../Item/Item";

function MyServices() {
  return (
    <div className="mt-[8rem]">
      <Title hTitle="WHAT I DO" spanTitle="Services" />
      <div className="flex flex-row justify-between pl-[6rem] pr-[6rem] mt-12">
        <Item titleP="WEB DEVELOPMENT" titleH="Web Design" seeTitle="Pricing">
          Web designers craft the overall vistion & plan for a website layout
        </Item>
        <Item titleP="WEB DEVELOPMENT" titleH="Web Design" seeTitle="Pricing">
          Web designers craft the overall vistion & plan for a website layout
        </Item>
        <Item titleP="WEB DEVELOPMENT" titleH="Web Design" seeTitle="Pricing">
          Web designers craft the overall vistion & plan for a website layout
        </Item>
        {/* <Card class="pt-6 pl-8 pr-2 pb-2 w-[26rem]">
          <p className="font-bold text-[0.8rem]">WEB DEVELOPMENT</p>
          <h2 className="font-bold text-[1.7rem] mt-[3rem]">Web Design</h2>
          <p className="text-[#888] mt-[1rem]">
            Web designers craft the overall vistion & plan for a website layout.{" "}
          </p>
          <div className=" mt-10 flex flex-row justify-between">
            <p className="flex flex-row items-center cursor-pointer">
              <span className="font-bold mr-6">See Pricing</span>
              <button>
                <FaArrowRight fontSize="1.1rem" color="#00ffc8" />
              </button>
            </p>
            <div className="w-[100px]  rounded-tl-[55px] overflow-hidden font-bold">
              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>

              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>

              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>

              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
              <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] rounded-full m-2"></span>
            </div>
          </div>
        </Card> */}
      </div>
      <div className="text-center flex flex-row justify-center items-center  mt-12">
        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] bg-[#fff] rounded-full"></span>
        <span className="w-5 h-[2px] inline-block bg-[#000]"></span>
        <span className="w-2 h-2 inline-block border-2 border-solid border-[#000] bg-[#fff] rounded-full"></span>
        <span className="w-5 h-[2px] inline-block bg-[#000]"></span>
        <span className="w-3 h-3 inline-block border-2 border-solid border-[#000] bg-[#00ffc8] rounded-full"></span>
      </div>
    </div>
  );
}

export default MyServices;
