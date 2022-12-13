import React from "react";
import { connect } from "react-redux/es/exports";

type PropsType = {
  count: number;
};

function Count({ count }: PropsType) {
  return (
    <>
      <div>Countコンポーネント：{count}</div>
    </>
  );
}

const mapStateToProps = (state: any) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(Count);
