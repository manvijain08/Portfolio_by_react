import React from "react";
import design from "./design.svg";
import develop from "./develop.svg";
import "./Working.css";
function Working() {
  return (
    <div>
      <h1 className="work1">
        Working <span className="all">On</span>
      </h1>
      <div className="work2">
        <div className="work">
          <img className="design" src={design} alt="design" />
          <h2 className="work3">Web design</h2>
        </div>
        <div className="work4">
          <img className="develop" src={develop} alt="develop" />;
          <h2 className="work3">Web Development</h2>
        </div>
      </div>
    </div>
  );
}
export default Working;
