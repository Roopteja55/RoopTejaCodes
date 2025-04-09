import React from "react";
import style from "./skills.module.css";

// React Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  FaDocker,
  FaAws,
  FaAngular,
  FaDatabase,
  FaJs,
  FaBootstrap,
  FaShopify,
  FaLinux,
} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiTailwindcss } from "react-icons/si";


const Skills = () => {
  return (
    <section id="skills" className={`container ${style.skills}`}>
      <h5>What I Use</h5>
      <h2>My Skills</h2>

      <div className={style.skills__wrapper}>
        {/* Frontend */}
        <div className={style.skills__category}>
          <h3>Frontend</h3>
          <div className={style.skills__items}>
            <div className={style.skill__card}>
              <FaHtml5 className={style.skill__icon} />
              <h4 className={style.skill__title}>HTML5</h4>
            </div>
            <div className={style.skill__card}>
              <FaCss3Alt className={style.skill__icon} />
              <h4 className={style.skill__title}>CSS3</h4>
            </div>
            <div className={style.skill__card}>
              <FaJs className={style.skill__icon} />
              <h4 className={style.skill__title}>JavaScript</h4>
            </div>
            <div className={style.skill__card}>
              <FaReact className={style.skill__icon} />
              <h4 className={style.skill__title}>ReactJS</h4>
            </div>
            <div className={style.skill__card}>
              <FaAngular className={style.skill__icon} />
              <h4 className={style.skill__title}>Angular</h4>
            </div>
            <div className={style.skill__card}>
              <SiTailwindcss className={style.skill__icon} />
              <h4 className={style.skill__title}>Tailwind CSS</h4>
            </div>
            <div className={style.skill__card}>
              <FaBootstrap className={style.skill__icon} />
              <h4 className={style.skill__title}>Bootstrap</h4>
            </div>
            <div className={style.skill__card}>
              <FaShopify className={style.skill__icon} />
              <h4 className={style.skill__title}>Shopify Theme</h4>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className={style.skills__category}>
          <h3>Backend</h3>
          <div className={style.skills__items}>
            <div className={style.skill__card}>
              <FaNodeJs className={style.skill__icon} />
              <h4 className={style.skill__title}>Node.js</h4>
            </div>
            <div className={style.skill__card}>
              <FaJava className={style.skill__icon} />
              <h4 className={style.skill__title}>Java</h4>
            </div>
            <div className={style.skill__card}>
              <SiMysql className={style.skill__icon} />
              <h4 className={style.skill__title}>MySQL</h4>
            </div>
            <div className={style.skill__card}>
              <SiSpringboot className={style.skill__icon} />
              <h4 className={style.skill__title}>Spring Boot</h4>
            </div>
          </div>
        </div>

        {/* Extra Skills */}
        <div className={style.skills__category}>
          <h3>Extra Skills</h3>
          <div className={style.skills__items}>
            <div className={style.skill__card}>
              <FaAws className={style.skill__icon} />
              <h4 className={style.skill__title}>AWS EC2</h4>
            </div>
            <div className={style.skill__card}>
              <FaDatabase className={style.skill__icon} />
              <h4 className={style.skill__title}>AWS RDS</h4>
            </div>
            <div className={style.skill__card}>
              <FaDocker className={style.skill__icon} />
              <h4 className={style.skill__title}>Docker</h4>
            </div>
            <div className={style.skill__card}>
              <FaLinux className={style.skill__icon} />
              <h4 className={style.skill__title}>Linux</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
