import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
function ListIcons() {
  return (
    <div className="flex gap-4 my-8">
      <button>
        <FaInstagram fontSize="1.6rem" />
      </button>
      <button>
        <FaTelegramPlane fontSize="1.6rem" />
      </button>
      <button>
        <FaLinkedinIn fontSize="1.6rem" />
      </button>
    </div>
  );
}

export default ListIcons;
