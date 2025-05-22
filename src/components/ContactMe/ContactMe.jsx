import Title from "../Title/Title";
import Button from "../Button/Button";
import Input from "../Input/Input";
import ModalSuccess from "../ModalSuccess/ModalSuccess";

import { LiaCitySolid } from "react-icons/lia";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaRegAddressBook } from "react-icons/fa";
import ItemContact from "./ItemContact";
import { FaStarOfLife } from "react-icons/fa6";
import { useRef } from "react";

import { useInput } from "../../hooks/useInput";

import { isEmpty, isEmail, isText } from "../../util/Validation";

const list = [
  {
    id: "address",
    icon: <LiaCitySolid fontSize="1.3rem" />,
    title: "Address",
    text: "Iran, Gachsaran",
  },
  {
    id: "work",
    icon: <BsPerson fontSize="1.3rem" />,
    title: "Freelance",
    text: "Available Right Now",
  },
  {
    id: "email",
    icon: <HiOutlineMail fontSize="1.3rem" />,
    title: "Email",
    text: "sinayi.fatima@gmail.com",
  },
  {
    id: "phone",
    icon: <FaRegAddressBook fontSize="1.3rem" />,
    title: "Phone",
    text: "+98 917 - 434 - 8436",
  },
];

function ContactMe() {
  const formRef = useRef(null);
  const messageRef = useRef("");
  const dialogRef = useRef();
  const timeoutRef = useRef();

  function getData() {
    if (formRef.current) {
      const myFd = new FormData(formRef.current);
      const data = Object.fromEntries(myFd.entries());

      return data;
    }
  }

  const {
    handleEditedState: handleFullNameEditedState,
    handleValidate: handleFullNameValidate,
    handleReset: handleFullNameReset,
    error: fullNameError,
  } = useInput();

  const {
    handleEditedState: handleEmailEditedState,
    handleValidate: handleEmailValidate,
    handleReset: handleEmailReset,
    error: emailError,
  } = useInput();

  const {
    handleEditedState: handleSubjectEditedState,
    handleValidate: handleSubjectValidate,
    handleReset: handleSubjectReset,
    error: subjectError,
  } = useInput();

  const {
    handleEditedState: handleMessageEditedState,
    handleValidate: handleMessageValidate,
    handleReset: handleMessageReset,
    error: messageError,
  } = useInput();

  function handleReset() {
    handleFullNameReset();
    handleEmailReset();
    handleSubjectReset();
    handleMessageReset();
    formRef.current.reset();
  }

  const telegramBotToken = "7897459324:AAFDnxNYFo0y6fZaSFegV3qhJrOfdJKJDHE";
  const telegramChatId = "-1002650047214";

  const sendMessageToTelegram = async (message) => {
    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: message,
        }),
      });

      if (res.ok) {
        console.log("پیام ارسال شد");
      } else {
        console.error("خطا در ارسال پیام");
      }
    } catch (error) {
      console.error("خطا:", error);
    }
  };

  function handleShowModal() {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        dialogRef.current.close();
        timeoutRef.current = null;
      }, 2000);
    }
  }
  function handleSubmitForm(e) {
    e.preventDefault();
    const data = getData();

    console.log("data: ", data);

    let exist = false;

    const fullNameIsInValid = fullNameError || isEmpty(data.fullName);
    if (fullNameIsInValid) {
      handleFullNameEditedState(true);
      handleFullNameValidate(false);
      exist = true;
    }

    const emailIsInValid = emailError || isEmpty(data.email);
    if (emailIsInValid) {
      handleEmailEditedState(true);
      handleEmailValidate(false);
      exist = true;
    }

    const subjectIsInValid = subjectError || isEmpty(data.subject);
    if (subjectIsInValid) {
      handleSubjectEditedState(true);
      handleSubjectValidate(false);
      exist = true;
    }

    const messageIsInValid = messageError || isEmpty(data.message);
    if (messageIsInValid) {
      handleMessageEditedState(true);
      handleMessageValidate(false);
      exist = true;
    }
    if (exist) {
      return;
    }

    messageRef.current = ""; // empty old message

    for (const key in data) {
      const edited = (data[key] || "").trim();
      messageRef.current += `${key} : ${edited}\n`;
    }

    console.log("message: ", messageRef.current);
    sendMessageToTelegram(messageRef.current);

    handleShowModal();

    handleReset();
  }

  return (
    <>
      <ModalSuccess dialogRef={dialogRef} />
      <>
        <a id="contactme"></a>
        <div className="mb-20 mt-36 px-[0.5rem] lg:px-[2rem] xl:px-[10rem]">
          <Title
            hTitle="CONTACT ME"
            greenTitle="LET'S"
            spanTitle="Talk About Ideas"
          />
          <div className="flex flex-col mt-4 gap-y-2 lg:flex-row">
            <div className="flex flex-col w-full pl-10 md:pl-[8rem]  lg:pl-0 mt-10 gap-y-16 lg:w-1/3">
              {list.map((i) => (
                <ItemContact
                  key={i.id}
                  id={i.id}
                  icon={i.icon}
                  title={i.title}
                  text={i.text}
                />
              ))}
            </div>
            <div className="flex justify-center w-full lg:w-2/3">
              <form onSubmit={handleSubmitForm} ref={formRef}>
                <div className="flex flex-col gap-8 sm:flex-row ">
                  <Input
                    id="fullName"
                    label="YOUR FULL NAME"
                    className="sm:w-[19rem] w-full"
                    error={
                      fullNameError && "please enter  at least 4 characters!!"
                    }
                    name="fullName"
                    onFocus={() => {
                      handleFullNameEditedState(false);
                    }}
                    onBlur={() => {
                      handleFullNameEditedState(true);
                      handleFullNameValidate(isText(getData().fullName));
                    }}
                  />
                  <Input
                    id="email"
                    label="YOUR EMAIL ADDRESS"
                    className="sm:w-[19rem] w-full"
                    error={emailError && "please enter valid email!!"}
                    name="email"
                    onFocus={() => {
                      handleEmailEditedState(false);
                    }}
                    onBlur={() => {
                      handleEmailEditedState(true);
                      handleEmailValidate(isEmail(getData().email));
                    }}
                  />
                </div>
                <Input
                  id="subject"
                  label="YOUR SUBJECT"
                  className="md:w-[41rem] sm:w-[40rem] w-full"
                  error={
                    subjectError && "please enter at least 4 characters !!"
                  }
                  name="subject"
                  onFocus={() => {
                    handleSubjectEditedState(false);
                  }}
                  onBlur={() => {
                    handleSubjectEditedState(true);
                    handleSubjectValidate(isText(getData().subject));
                  }}
                />
                <Input
                  id="message"
                  label="YOUR MESSAGE"
                  error={
                    messageError && "please enter  at least 4 characters!!"
                  }
                  name="message"
                  onFocus={() => {
                    handleMessageEditedState(false);
                  }}
                  onBlur={() => {
                    handleMessageEditedState(true);
                    handleMessageValidate(isText(getData().message));
                  }}
                />

                <div className="flex items-center justify-end gap-8 mt-10">
                  <p className="flex gap-2">
                    <FaStarOfLife fontSize="0.5rem" />
                    <span>Accept the terms and conditions.</span>
                  </p>
                  <Button className="btn-before">SEND MESSAGE</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default ContactMe;
