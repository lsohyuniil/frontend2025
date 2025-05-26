import { memo } from "react";

const UseChild = ({ name }) => {
  console.log("자식이 렌더링 되었습니다.");

  return (
    <div>
      <h2>자식</h2>
      <p>성 : {name.firstName}</p>
      <p>이름 : {name.lastName}</p>
      {/* <p>나이 : {age}</p> */}
    </div>
  );
};

export default memo(UseChild);
