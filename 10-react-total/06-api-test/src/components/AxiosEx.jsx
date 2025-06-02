import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosEx = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const axiosData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPost(response.data);
      } catch (error) {}
    };
    axiosData();
  }, []);

  return (
    <div>
      <h2>post-axios</h2>
      <ul>
        {post.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default AxiosEx;
