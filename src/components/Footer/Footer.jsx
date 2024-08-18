import ListIcons from "../ListIcons/ListIcons";
import { MdCopyright } from "react-icons/md";

function Footer() {
  return (
    <div className="flex font-bold text-[0.8rem] py-[2rem] items-center justify-center  flex-col md:justify-between md:items-center md:flex-row lg:px-[8rem] px-[2rem] border-t-[1px] border-[rgba(0,0,0,0.2)]">
      <ListIcons />
      <div>
        <p className="flex items-center">
          <span className="mr-1">
            <MdCopyright fontSize="0.9rem" />
          </span>
          2024
          <span className="text-[#29a587] mx-1">DEVELOPER.</span>
          ALL RIGHTS RESERVED
        </p>
      </div>
      <div className="mt-6 md:mt-0">
        DEVELOPED BY
        <span className="text-[#29a587] mx-1">FATIMA</span>
      </div>
    </div>
  );
}

export default Footer;
