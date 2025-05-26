import { useEffect, useState } from "react";
import { A } from "./A";
import { B } from "./B";
import { C } from "./C";

export default function UseMemo38() {
  // input
  // json 데이터 저장하기
  const [value, setValue] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)}></input>
      <div className="flex">
        <A msg={value} posts={posts} />
        <B msg={value} posts={posts} />
        <C msg={value} posts={posts} />
      </div>
    </div>
  );
}
