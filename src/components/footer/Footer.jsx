import React from "react";
import {
  FaLinkedin,
  FaWhatsapp,
  FaGithub,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import style from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <a href="#" className={style.footer_logo}>
        Lanka Roop Teja
      </a>

      <div className={style.horizontal_line}></div>

      <div className={style.footer_links_container}>
        <ul className={style.permaLinks}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className={style.vertical_line}></div>

        <div className={style.footer_socials}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className={style.horizontal_line}></div>

      <div className={style.footer_copyrights}>
        <small>
          &copy; {new Date().getFullYear()} Lanka Roop Teja. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
