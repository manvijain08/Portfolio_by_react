import React from "react";
import Photo from "./Photo.jpg";
import "./Hey.css";
function Hey() {
  return (
    <div className="hey1">
      <img className="Photo" src={Photo} alt="Photo" />;
      <div className="hey2">
        <h2 className="heypara">
          Hey! <br />
          I’m <span className="all">Manvi Jain.</span> <br />
          UI, UX Designer
        </h2>
      </div>
    </div>
  );
}
export default Hey;
