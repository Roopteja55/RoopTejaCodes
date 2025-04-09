import React from "react";
import style from "./education.module.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import MLRITM from "../../assets/mlritm.png";
import SCHOOL from "../../assets/school.png";
import JRCOLLEGE from "../../assets/jrcollege.png";

const Education = () => {

  const educationData = [
    {
      photo: MLRITM,
      name: "Marri Laxman Reddy Institute of Technology and Management",
      cgpa: "7.96",
      address: "Dundigal, Hyderabad, India",
    },
    {
      photo: JRCOLLEGE,
      name: "Narayana Junior College",
      cgpa: "7.3",
      address: "S R Nagar, Hyderabad, India",
    },
    {
      photo: SCHOOL,
      name: "Narayana High School",
      cgpa: "7.8",
      address: "D K Road, Ameerpet, Hyderabad, India",
    },
  ];


  return (
    <section id="education" className={`container ${style.education}`}>
      <h5>Where I've Learned</h5>
      <h2>Education</h2>

      <div className={style.education__wrapper}>
        {educationData.map((edu, index) => (
          <div className={style.edu__card} key={index}>
            <img src={edu.photo} alt="profile" className={style.edu__photo} />
            <h4 className={style.edu__name}>{edu.name}</h4>
            <p className={style.edu__cgpa}>
              <em>CGPA : {edu.cgpa}</em>
            </p>
            <p className={style.edu__address}>
              <FaMapMarkerAlt className={style.address__icon} />
              {edu.address}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
