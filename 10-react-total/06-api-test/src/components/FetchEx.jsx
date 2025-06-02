import React, { useEffect, useState } from "react";

const FetchEx = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {}
    };
    FetchData();
  }, []);

  return (
    <div>
      {/* jsonplaceholder에서 데이터 가져오기 */}
      <h2>post-fetch</h2>
      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchEx;
