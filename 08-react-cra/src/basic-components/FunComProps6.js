function FunComProps6(props) {
  console.log(props);
  return (
    <div>
      <h2>부모로부터 객체값 전달받기</h2>
      <p>{props.name}</p>
      <p>
        {/* @고치기 */}
        <img src={props.imgUrl} width={props.imgSize} alt="" />
      </p>
    </div>
  );
}
export default FunComProps6;
