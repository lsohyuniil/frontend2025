import { useEffect } from "react";

export default function UseEffect32() {
  // 컴포넌트가 처음 렌더링 될 때 한 번 실행
  // 주로 api 호출, 초기설정이 필요한 경우 사용함
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다.");
  }, []);

  return (
    <div>
      <h2>useEffect</h2>
    </div>
  );
}
