import { useState } from "react";

export function UseStateArrayInsert24() {
  // 데이터를 저장할 상태 변수
  // input으로 받은 데이터 저장 변수
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  dfsdfadsfdsaf;
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h2>useState 배열에 데이터 추가</h2>
      <input value={input} onChange={handleChange} />
      <button>추가</button>
      <ul></ul>
    </div>
  );
}
