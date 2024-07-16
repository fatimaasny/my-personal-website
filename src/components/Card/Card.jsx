function Card(props) {
  return (
    <div className={`rounded-[1.2rem] bg-[#fff]  ${props.class}`}>
      {props.children}
    </div>
  );
}

export default Card;
