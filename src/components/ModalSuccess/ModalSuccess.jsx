import { createPortal } from "react-dom";

function ModalSuccess({ dialogRef }) {
  return createPortal(
    <dialog
      ref={dialogRef}
      className="flex items-center justify-center md:w-[35%]   mx-auto border-2 border-[#000] border-solid rounded-[10px] w-[50%] h-[10%] "
    >
      <p className="text-[#29a587] text-[0.8rem] md:text-[1rem] ">
        اطلاعات با موفقیت ثبت گردید.
      </p>
    </dialog>,
    document.getElementById("modal")
  );
}

export default ModalSuccess;
