import Card from "../Card/Card";
function Image(props) {
  return (
    <Card class="overflow-hidden mx-auto md:h-[12rem]  h-[20rem]  ">
      <img className={props.class} src={props.source} alt="image.jpg" />
    </Card>
  );
}

export default Image;
