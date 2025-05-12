const before =
  " before:content-[''] before:absolute before:z-0 before:bottom-0 before:left-0 before:w-full before:h-0 before:transition before:h before:ease-in-out before:delay-1000 hover:before:h-full";

function Button(props) {
  return (
    <button
      className={`${props.className} `}
    >
      {props.children}
    </button>
  );
}

export default Button;
