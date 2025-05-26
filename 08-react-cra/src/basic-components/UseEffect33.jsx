import { useEffect, useState } from "react";

export default function useEffect33() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount((prev) => prev + 1);
  };

  //   useEffect(() => {
  //     console.log("count");
  //   }); // 아무것도 안 쓰면 count외에도 다른 것들이 변했을 때 리렌더링 => 성능저라 이슈로 거의 사용 안 함
  useEffect(() => {
    console.log("count");
  }, [count]); // count 변할 때 마다

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleCount}>+</button>
    </div>
  );
}
