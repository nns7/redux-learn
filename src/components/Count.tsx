import React from "react";
import { useSelector } from "react-redux";

function Count() {
  const count = useSelector((state: any) => state.count);
  return (
    <>
      <div>Countコンポーネント：{count}</div>
    </>
  );
}

export default Count;
