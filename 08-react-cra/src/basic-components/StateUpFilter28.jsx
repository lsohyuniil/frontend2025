// 데이를 입력하는 자식 컴포넌트
// 필터에서 보여줄 list 자식 컴포넌트
import { useState } from "react";

function SearchBox({ querySend, setQuerySend }) {
  return (
    <input value={querySend} onChange={(e) => setQuerySend(e.target.value)} />
  );
}

function List({ item, inputData }) {
  return (
    <ul>
      {item
        .filter((item) => item.toLowerCase().includes(inputData.toLowerCase()))
        .map((item, i) => (
          <li key={i}>{item}</li>
        ))}
    </ul>
  );
}

export default function StateUpFilter28() {
  const [query, setQuery] = useState("");
  const items = ["Apple", "Banana", "orange", "mango"];

  return (
    <div>
      <SearchBox querySend={query} setQuerySend={setQuery} />
      <List item={items} inputData={query} />
    </div>
  );
}
