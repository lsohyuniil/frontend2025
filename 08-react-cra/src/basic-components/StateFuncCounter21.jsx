import { useState } from "react";

export default function StateFuncCounter21() {
  const [num, setNumber] = useState(1);

  const 더하기 = () => {
    // setNumber(num + 1);
    setNumber((prev) => prev + 1);
  };

  const minusNum = () => {
    // setNumber(num - 1); 여러번 작성해도 한 번 밖에 실행 안 되는 이유
    // setNumber 함수를 호출하는 시간과 상태가 실제로 업데이트 되는 사이에 지연이 있을 수 있음
    setNumber((prev) => prev - 1);
    setNumber((prev) => prev - 1);
    setNumber((prev) => prev - 1);
  };
  return (
    <div>
      <h2>useState 값 변경하기</h2>
      <p>값 : {num}</p>
      <button onClick={더하기}>+</button>
      <button onClick={minusNum}>-</button>
    </div>
  );
}
