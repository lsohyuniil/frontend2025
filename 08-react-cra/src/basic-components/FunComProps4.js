// function FunComProps({ name, userAge }) {
//   return (
//     <div>
//       <h2>부모로부터 속성값 받기 - props</h2>
//       <p>부모로부터 받은 값 출력하기</p>
//       <p>부모로부터 이름, 나이를 전달받아서 출력하기</p>
//       <p>
//         안녕 {name} 너는 {userAge}살 이지?
//       </p>
//     </div>
//   );
// }

function FunComProps(myprops) {
  return (
    <div>
      <p>
        안녕 {myprops.name} 너는 {myprops.userAge}살 이지?
      </p>
    </div>
  );
}

export default FunComProps;
