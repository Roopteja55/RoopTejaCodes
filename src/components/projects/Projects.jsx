import React, { useState } from "react";
import style from "./projects.module.css";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaReact,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiTypescript, SiSpring, SiMysql, SiTailwindcss } from "react-icons/si";
import { FiShoppingBag } from "react-icons/fi";
import { IoLogoJavascript } from "react-icons/io5";
import WATCH from "../../assets/watch.png";
import PORTFOLIO1 from "../../assets/portfolio1.png";
import PORTFOLIO2 from "../../assets/portfolio2.png"
import SHOPIFY from "../../assets/shopify.png";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projectList = [
    {
      id: 1,
      image: WATCH,
      title: "Online Watch Store",
      description:
        "Built a full-stack watch store app using Angular, Spring Boot, and MySQL with user auth and order management features.",
      stack: [
        <FaAngular key="angular" />,
        <SiTypescript key="typescript" />,
        <FaHtml5 key="HTML" />,
        <FaCss3Alt key="CSS" />,
        <SiSpring key="springboot" />,
        <SiMysql key="mysql" />,
        <VscVscode key="vs" />,
      ],
      github: "https://github.com/Roopteja55/WATCH-Store-project.git",
      demo: "https://github.com/Roopteja55/WATCH-Store-project.git",
    },
    {
      id: 2,
      image: PORTFOLIO1,
      title: "Personal Portfolio Using HTML,CSS,JS",
      description:
        "Built a responsive portfolio using HTML, CSS, and JS to showcase my skills and projects. Deployed on GitHub Pages with smooth navigation and interactive features.",
      stack: [
        <FaHtml5 key="HTML" />,
        <FaCss3Alt key="CSS" />,
        <IoLogoJavascript key="js" />,
        <VscVscode key="vs" />,
      ],
      github: "https://github.com/yourrepo",
      demo: "https://jzf4bsbgnzmwcxstvnmg3q.on.drv.tw/www.rooptej.com/",
    },
    {
      id: 3,
      image: SHOPIFY,
      title: "Shopify Theme Development – Dawn Theme Customization",
      description:
        "Customized Shopify's Dawn theme using Tailwind CSS, Liquid, and JavaScript for a responsive, modern storefront.",
      stack: [
        <FaHtml5 key="HTML" />,
        <FaCss3Alt key="css" />,
        <FaGithub key="GitHub" />,
        <IoLogoJavascript key="Js" />,
        <SiTailwindcss key="tailwind" />,
        <FiShoppingBag />,
      ],
      github: "https://github.com/Roopteja55/shopify_theme_My_dawn.git",
      demo: "https://splearning.myshopify.com/",
    },
    {
      id: 4,
      image: PORTFOLIO2,
      title: "Personal Portfolio Using ReactJs",
      description:
        "A modern personal portfolio built with ReactJS and Vite, featuring a marquee announcement bar, header, footer, and project showcase. Styled using modular CSS with clean, component-based JSX architecture.",
      stack: [
        <FaHtml5 key="HTML" />,
        <FaCss3Alt key="css" />,
        <FaGithub key="GitHub" />,
        <IoLogoJavascript key="Js" />,
        <FaReact key="React" />,
        <VscVscode key="vs" />,
      ],
      github: "https://github.com/Roopteja55/shopify_theme_My_dawn.git",
      demo: "https://splearning.myshopify.com/",
    },
  ];

  const visibleProjects = showAll ? projectList : projectList.slice(0, 3);

  return (
    <section id="projects" className={`container ${style.projects}`}>
      <h5>My Work</h5>
      <h2>Projects</h2>

      <div className={style.project__wrapper}>
        {visibleProjects.map((project) => (
          <div className={style.project__card} key={project.id}>
            <img
              src={project.image}
              alt={project.title}
              className={style.project__img}
            />
            <div className={style.project__info}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <hr />
              <div className={style.stack}>
                <span>Tech Stack: </span>
                {project.stack.map((icon, idx) => (
                  <span key={idx} className={style.stack__icon}>
                    {icon}
                  </span>
                ))}
              </div>
              <div className={style.project__links}>
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {projectList.length > 3 && (
        <button
          className={style.show__more}
          onClick={() => setShowAll((prev) => !prev)}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
};

export default Projects;
