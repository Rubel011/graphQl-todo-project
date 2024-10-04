import React from "react";
import { useSelector } from "react-redux";

function HomePage() {
  return <div>{useSelector((state) => state.counter)}</div>;
}

export default HomePage;
