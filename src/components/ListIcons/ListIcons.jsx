import { FaTelegramPlane } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
function ListIcons() {
  return (
    <div className="flex gap-4 my-8">
      <button className="hover:text-[#29a587] transition-all duration-1000 ease-in-out">
        <FaGithub fontSize="1.6rem" />
      </button>
      <button className="hover:text-[#29a587] transition-all duration-1000 ease-in-out">
        <FaTelegramPlane fontSize="1.6rem" />
      </button>
      <button className="hover:text-[#29a587] transition-all duration-1000 ease-in-out">
        <FaLinkedinIn fontSize="1.6rem" />
      </button>
    </div>
  );
}

export default ListIcons;
