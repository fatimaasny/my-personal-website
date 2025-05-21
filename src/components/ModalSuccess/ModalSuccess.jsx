import { createPortal } from "react-dom";

function ModalSuccess({ dialogRef }) {
  return createPortal(
    <dialog
      ref={dialogRef}
      className=" md:w-[30%] mx-auto border-2 border-[#29a385] border-solid rounded-[10px] w-[50%] h-[8%] "
    >
      <p className="text-[#29a385] text-[0.8rem] md:text-[1rem] flex pt-4  pl-2 ">
        Your message was sent successfully.
      </p>
    </dialog>,
    document.getElementById("modal")
  );
}

export default ModalSuccess;
