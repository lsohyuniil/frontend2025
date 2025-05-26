import { memo, useCallback, useState } from "react";

const Child = memo(({ onnClick }) => {
  console.log("자식이 레더링 되었습니다.");
  return <button onClick={onnClick}>자식버튼</button>;
});

export default function UseCallback39() {
  const [count, setCount] = useState(0);

  //   const childClick = () => {
  //     console.log("자식이 클릭되었습니다.");
  //   };

  console.log("부모 렌더링");

  const childClick = useCallback(() => {
    console.log("자식이 클릭되었습니다.");
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <p>카운트 : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>부모증가</button>
      <Child onnClick={childClick} />
    </div>
  );
}
