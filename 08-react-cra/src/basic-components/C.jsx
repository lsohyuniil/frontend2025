import { useMemo } from "react";

const Message = ({ msg }) => {
  return <p>{msg}</p>;
};

const ListItem = ({ post }) => {
  return <li>{post.title}</li>;
};

const List = ({ posts }) => {
  const meListItem = useMemo(() => {
    return posts.map((post) => <ListItem key={post.id} post={post} />);
  }, [posts]);

  return <ul>{meListItem}</ul>;
};

export const C = ({ msg, posts }) => {
  const meMessage = useMemo(() => {
    return <Message msg={msg} />;
  }, [msg]);

  const meList = useMemo(() => {
    return <List posts={posts} />;
  }, [posts]);

  return (
    <div>
      <h2>C 컴포넌트</h2>
      {meMessage}
      {meList}
    </div>
  );
};
