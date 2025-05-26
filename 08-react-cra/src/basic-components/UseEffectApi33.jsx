import { useEffect, useState } from "react";

export default function UseEffectApi33() {
  const [data, setData] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((json) => setData(json));
    console.log("API 호출하기");
  }, []);

  return (
    <div>
      <h1>API 데이터</h1>
      {data ? <prev>{JSON.stringify(data, null, 2)}</prev> : "로딩중"}
    </div>
  );
}
