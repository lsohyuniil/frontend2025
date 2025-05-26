import UseChild from "./UseChild";
const { useState, useMemo } = require("react");

export const UseParent37 = () => {
  const [parentAge, setParent] = useState(0);
  const [childAge, setChild] = useState(0);

  //   const name = {
  //     lastName: "철숙",
  //     firstName: "김",
  //     }; // 객체 최적화는 useMemo
  const name = useMemo(() => {
    return {
      lastName: "철숙",
      firstName: "김",
    };
  }, []);

  const handleParent = () => {
    setParent(parentAge + 1);
  };
  const handleChild = () => {
    setChild(childAge + 1);
  };

  console.log("부모가 렌더링되었습니다.");

  return (
    <div>
      <h2>부모</h2>
      <p>age:{parentAge}</p>
      <button onClick={handleParent}>부모 나이 증가</button>
      <button onClick={handleChild}>자식 나이 증가</button>
      {/* <UseChild name="홍길동" age={childAge} /> */}
      <UseChild name={name} />
    </div>
  );
};
