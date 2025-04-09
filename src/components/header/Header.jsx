import React from "react";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";
import style from "./header.module.css";

const Header = () => {
  return (
    <header className={`container ${style.header_container}`}>
      <h5>Hello I'm</h5>
      <h1>Roop Teja Lanka</h1>
      <h5 className={style.text_light}>Frontend Developer...</h5>

      <CTA />
      <HeaderSocial />

    </header>
  );
};

export default Header;
