export const A = ({ msg, posts }) => {
  //   console.log(posts);
  return (
    <div>
      <h2>A 컴포넌트</h2>
      <p>{msg}</p>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};
