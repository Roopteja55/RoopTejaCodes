import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import style from "./header.module.css";

const HeaderSocial = () => {
  return (
    <div className={style.header_social}>
      <a
        href="https://www.linkedin.com/in/roop-teja-lanka/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="mailto:roopteja@example.com" target="_blank" rel="noreferrer">
        <IoMail />
      </a>
    </div>
  );
};

export default HeaderSocial;
