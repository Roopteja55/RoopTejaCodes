import React, { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { SlBadge } from "react-icons/sl";
import { RiGraduationCapLine } from "react-icons/ri";
import { BiMessageAltDetail } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { VscFolderLibrary } from "react-icons/vsc";
import style from "./nav.module.css";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavClick = (href) => {
    setActiveNav(href);
    setMenuOpen(false); // Close menu on selection (mobile UX)
  };

  return (
    <>
      {/* Mobile Toggle Icon */}
      <div
        className={`${style.menu_icon} ${menuOpen ? style.active_icon : ""}`}
        onClick={toggleMenu}
      >
        {menuOpen ? <MdCancel /> : <IoMenu />}
      </div>

      {/* Navigation Links */}
      <nav className={`${style.nav} ${menuOpen ? style.show : ""}`}>
        <a
          href="#"
          onClick={() => handleNavClick("#")}
          className={activeNav === "#" ? style.active : ""}
        >
          <AiOutlineHome />
        </a>
        <a
          href="#about"
          onClick={() => handleNavClick("#about")}
          className={activeNav === "#about" ? style.active : ""}
        >
          <AiOutlineUser />
        </a>
        <a
          href="#skills"
          onClick={() => handleNavClick("#skills")}
          className={activeNav === "#skills" ? style.active : ""}
        >
          <SlBadge />
        </a>

        <a
          href="#projects"
          onClick={() => handleNavClick("#projects")}
          className={activeNav === "#projects" ? style.active : ""}
        >
          <VscFolderLibrary />
        </a>

        <a
          href="#education"
          onClick={() => handleNavClick("#education")}
          className={activeNav === "#education" ? style.active : ""}
        >
          <RiGraduationCapLine />
        </a>
        <a
          href="#contact"
          onClick={() => handleNavClick("#contact")}
          className={activeNav === "#contact" ? style.active : ""}
        >
          <BiMessageAltDetail />
        </a>
      </nav>
    </>
  );
};

export default Nav;
