import React from "react";
import resume from "../../assets/Roopteja-reactjs-resume.pdf";
import style from "./header.module.css";

const CTA = () => {
  return (
    <div className={style.cta}>
      <a href={resume} download className="btn">
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
