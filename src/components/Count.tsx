import React from "react";
import { useSelector } from "react-redux";

function Count() {
  const count = useSelector((state: any) => state.count);
  const posts = useSelector((state: any) => state.posts);
  return (
    <>
      <div>Countコンポーネント：{count}</div>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export default Count;
