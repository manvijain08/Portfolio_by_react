import React from "react";
import "./Contact.css";
import github from "./github.svg";
import instagram from "./instagram.svg";
import linkedin from "./linkedin.svg";
import twitter from "./twitter.svg";

function Contact() {
  return (
    <div className="footer">
      <h1 className="get">Get In Touch</h1>;
      <h2 className="in">
        Manvi <span className="touch">jain</span>
      </h2>
      <div className="mail">manvijain0888@gmail.com</div>
      <div className="dha">
        <a href="https://github.com/manvijain08" class="nav-link">
          <img className="github" src={github} alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/manvi-jain-10a7391b2/"
          class="nav-link"
        >
          <img className="linkedin" src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/manvi__jain8/" class="nav-link">
          <img className="instagram" src={instagram} alt="instagram" />
        </a>
        <a href="https://twitter.com/ManviJa71067974/" class="nav-link">
          <img className="twitter" src={twitter} alt="twitter" />
        </a>
      </div>
    </div>
  );
}
export default Contact;
