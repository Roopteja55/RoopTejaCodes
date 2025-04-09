import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import { MdSchool } from "react-icons/md";
import ME from "../../assets/roopteja_photo_p.jpeg";
import style from "./about.module.css";

const About = () => {
  return (
    <section id="about" className={`container ${style.about}`}>
      <h5>Get to Know Me</h5>
      <h2>About Me</h2>

      <div className={style.about__container}>
        {/* Image */}
        <div className={style.about__me}>
          <div className={style.about__meImage}>
            <img src={ME} alt="Me" />
          </div>
        </div>

        {/* Content */}
        <div className={style.about__content}>
          <div className={style.about__cards}>
            <article className={style.about__card}>
              <FaAward className={style.about__icon} />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className={style.about__card}>
              <VscFolderLibrary className={style.about__icon} />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>

            <article className={style.about__card}>
              <MdSchool className={style.about__icon} />
              <h5>Education</h5>
              <small>B.Tech CSE</small>
            </article>
          </div>

          <p>
            Enthusiastic and detail-oriented Computer Science graduate seeking
            an entry-level frontend developer position. Eager to leverage strong
            technical skills in HTML, CSS, JavaScript, TypeScript, and
            frameworks like Angular 18 to build responsive and dynamic user
            interfaces., I am excited to contribute to innovative web projects
          </p>

          <a href="#contact" className="btn btn-primary">
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
