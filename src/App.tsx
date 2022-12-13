import React from "react";
import { connect } from "react-redux/es/exports";
import "./App.css";

type PropsType = {
  count: number;
};

function App({ count }: PropsType) {
  return (
    <div>
      <h1>Redux Learn</h1>
      <p>Count: {count}</p>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(App);
