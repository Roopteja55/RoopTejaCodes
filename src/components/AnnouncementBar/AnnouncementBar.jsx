import React from "react";
import style from "./announcementBar.module.css";
import Marquee from "react-fast-marquee";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaShopify,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiAngular,
  SiSpringboot,
} from "react-icons/si";

const skills = [
  { label: "HTML5", icon: <FaHtml5 /> },
  { label: "CSS3", icon: <FaCss3Alt /> },
  { label: "JavaScript", icon: <FaJs /> },
  { label: "React", icon: <FaReact /> },
  { label: "Tailwind CSS", icon: <SiTailwindcss /> },
  { label: "Angular", icon: <SiAngular /> },
  { label: "Java", icon: <FaJava /> },
  { label: "Spring Boot", icon: <SiSpringboot /> },
  { label: "MySQL", icon: <SiMysql /> },
  { label: "Shopify", icon: <FaShopify /> },
];


const AnnouncementBar = () => {
  return (
    <section className={style.container}>
      <div className={style.ann_bar}>
        <Marquee speed={60} pauseOnHover>
          <div className={style.icons}>
            {skills.map((skill, index) => (
              <div key={index} className={style.icon}>
                {skill.icon}
                <p>- {skill.label}</p>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default AnnouncementBar;
