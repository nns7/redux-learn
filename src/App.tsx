import React from "react";
import "./App.css";
import { connect } from "react-redux";

type Props = {
  dispatch: any;
  count: number;
};

function App({ dispatch, count }: Props) {
  const increase = () => {
    dispatch({ type: "INCREASE_COUNT" });
  };

  const decrease = () => {
    dispatch({ type: "DECREASE_COUNT" });
  };

  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count: {count}</p>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    count: state.count,
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(App);
