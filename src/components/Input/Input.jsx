import { FaStarOfLife } from "react-icons/fa6";

function Input({ id, label, className, error, ...rest }) {
  return (
    <div className="mt-4">
      <label
        className="flex mb-4 cursor-pointer font-bold gap-x-2 text-[0.9rem] pl-6"
        htmlFor={id}
      >
        <span> {label} </span>
        <FaStarOfLife color="#29a587" fontSize="0.5rem" />
      </label>
      {id === "message" ? (
        <textarea
          type="text"
          id={id}
          className="rounded-3xl pt-4 pl-4 border-2 md:w-[41rem] sm:w-[40rem] w-full h-36  border-[#000]"
          {...rest}
        ></textarea>
      ) : (
        <input
          type="text"
          id={id}
          className={`rounded-full pl-4 border-2 ${className}  h-16 border-[#000]`}
          {...rest}
        />
      )}
      <div className="h-8 ">
        {error && (
          <p className="pt-2 pl-2  text-red-500 text-[0.9rem]">{error}</p>
        )}
      </div>
    </div>
  );
}

export default Input;
