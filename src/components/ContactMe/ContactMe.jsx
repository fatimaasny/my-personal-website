import Title from "../Title/Title";
import Button from "../Button/Button";

import { LiaCitySolid } from "react-icons/lia";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegAddressBook } from "react-icons/fa";
import ItemContact from "./ItemContact";
import { FaStarOfLife } from "react-icons/fa6";

function ContactMe() {
  const list = [
    {
      icon: <LiaCitySolid fontSize="1.3rem" />,
      title: "Address",
      text: "Iran, Gachsaran",
    },
    {
      icon: <BsPerson fontSize="1.3rem" />,
      title: "Freelance",
      text: "Available Right Now",
    },
    {
      icon: <HiOutlineMail fontSize="1.3rem" />,
      title: "Email",
      text: "sinayi.fatima@gmail.com",
    },
    {
      icon: <FaRegAddressBook fontSize="1.3rem" />,
      title: "Phone",
      text: "+98 917 - 434 - 8436",
    },
  ];

  return (
    <>
      <a id="contactme"></a>
      <div className="mb-20 mt-36 px-[0.5rem] lg:px-[2rem] xl:px-[10rem]">
        <Title
          hTitle="CONTACT ME"
          greenTitle="LET'S"
          spanTitle="Talk About Ideas"
        />
        <div className="flex flex-col gap-y-20 mt-14 lg:flex-row">
          <div className="flex flex-col w-full pl-10 md:pl-[8rem] lg:pl-0 gap-y-12 lg:w-1/3">
            {list.map((i, index) => (
              <ItemContact
                key={index}
                icon={i.icon}
                title={i.title}
                text={i.text}
              />
            ))}
          </div>
          <div className="flex justify-center w-full lg:w-2/3">
            <form className="">
              <div className="flex flex-col gap-8 sm:flex-row ">
                <div>
                  <label
                    className="flex cursor-pointer mb-4 font-bold gap-x-2 text-[0.9rem] pl-6"
                    htmlFor="fullName"
                  >
                    <span> YOUR FULL NAME</span>
                    <FaStarOfLife color="#29a587" fontSize="0.5rem" />
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="rounded-full border-2  sm:w-[19rem] w-full h-16 pl-4  border-[#000]"
                  />
                </div>
                <div>
                  <label
                    className="flex mb-4 font-bold cursor-pointer gap-x-2 text-[0.9rem] pl-6"
                    htmlFor="email"
                  >
                    <span> YOUR EMAIL ADDRESS</span>
                    <FaStarOfLife color="#29a587" fontSize="0.5rem" />
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="rounded-full border-2 sm:w-[19rem] w-full pl-4 h-16 border-[#000]"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label
                  className="flex mb-4 cursor-pointer font-bold gap-x-2 text-[0.9rem] pl-6"
                  htmlFor="subject"
                >
                  <span> YOUR SUBJECT</span>
                  <FaStarOfLife color="#29a587" fontSize="0.5rem" />
                </label>
                <input
                  type="text"
                  id="subject"
                  className="rounded-full pl-4 border-2 md:w-[41rem] sm:w-[40rem] w-full h-16 border-[#000]"
                />
              </div>
              <div className="mt-8">
                <label
                  className="flex mb-4 cursor-pointer font-bold gap-x-2 text-[0.9rem] pl-6"
                  htmlFor="subject"
                >
                  <span> YOUR MESSAGE</span>
                  <FaStarOfLife color="#29a587" fontSize="0.5rem" />
                </label>
                <textarea
                  type="text"
                  id="subject"
                  className="rounded-3xl pt-4 pl-4 border-2 md:w-[41rem] sm:w-[40rem] w-full h-36  border-[#000]"
                ></textarea>
              </div>
              <div className="flex items-center justify-end gap-8 mt-10">
                <p className="flex gap-2">
                  <FaStarOfLife fontSize="0.5rem" />
                  <span>Accept the terms and conditions.</span>
                </p>
                <Button className="btn-before">SEND MESSAGE</Button>
              </div>
            </form>
            {/* <div className="md:w-[14rem] md:h-[14rem] w-[10rem] h-[12rem] bg-pink-300  md:bottom-[-8rem] md:left-[-3rem]  bottom-[-43rem] left-[-5rem] rounded-l-full rounded-br-full   z-10 overflow-hidden  absolute ">
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]  "></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px] "></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
              <span className="inline-block  w-[6px] h-[6px] mt-[6px] border-solid border-2 border-black rounded-full mx-[6px] md:mx-[12px]"></span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
