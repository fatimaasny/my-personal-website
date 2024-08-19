import { Link } from "react-router-dom";

import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function ListIcons() {
  return (
    <div className="flex gap-4 my-8">
      <button className="hover:text-[#29a587] transition-all duration-1000 ease-in-out">
        <Link to={"https://github.com/fatimaasny"} target={"_blank"}>
          <FaGithub fontSize="1.6rem" />
        </Link>
      </button>
      <button className="hover:text-[#29a587] transition-all duration-1000 ease-in-out">
        <Link to={"https://t.me/fatimaasny"} target="_blank">
          <FaTelegramPlane fontSize="1.6rem" />
        </Link>
      </button>
      <button className="hover:text-[#29a587] transition-all duration-1000 ease-in-out">
        <Link
          to={"https://www.linkedin.com/in/fatima-sinayi-543047b1"}
          target="_blank"
        >
          <FaLinkedinIn fontSize="1.6rem" />
        </Link>
      </button>
    </div>
  );
}

export default ListIcons;
