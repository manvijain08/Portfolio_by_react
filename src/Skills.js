import React from "react";
import html from "./html-5.svg";
import css from "./css.svg";
import c from "./c.svg";
import java from "./java.svg";
import javascript from "./javascript.svg";
import ree from "./react.svg";
import php from "./php.svg";
import cas from "./c++.png";
import "./Skills.css";
function Skills() {
  return (
    <div className="skill">
      <h1 className="work1javascript">
        Technical <span className="all">Skills</span>
      </h1>
      <div className="icon">
        <img className="html" src={html} alt="html" />
        <img className="css" src={css} alt="css" />
        <img className="c" src={c} alt="c" />
        <img className="java" src={java} alt="java" />
      </div>
      <br /> <br />
      <div className="icon1">
        <img className="javascript" src={javascript} alt="" />
        <img className="ree" src={ree} alt="" />
        <img className="php" src={php} alt="" />
        <img className="cas" src={cas} alt="" />
      </div>
    </div>
  );
}
export default Skills;
