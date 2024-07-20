import Card from "../Card/Card";
function Image(props) {
  return (
    <Card class="overflow-hidden mx-auto h-[15rem] ">
      <img className={props.class} src={props.source} alt="image.jpg" />
    </Card>
  );
}

export default Image;
