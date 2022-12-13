import React from "react";
import "./App.css";
import { connect } from "react-redux";

type Props = {
  count: number;
  increase: any;
  decrease: any;
};

function App({ count, increase, decrease }: Props) {
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
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increase: () => dispatch({ type: "INCREASE_COUNT" }),
    decrease: () => dispatch({ type: "DECREASE_COUNT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
