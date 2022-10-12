// import React, { useEffect } from "react";
import profilePic from "../../assets/images/profilePic3.jpg";
const About = () => {
  const skills = [
    {
      name: "HTML / CSS",
    },
    {
      name: "Javascript",
    },
    {
      name: "Node.js",
    },
    {
      name: "SQL",
    },
    {
      name: "NoSQL",
    },
    {
      name: "GraphQL",
    },
    {
      name: "React",
    },
  ];

  return (
    <div className="about" id="about">
      <img src={profilePic} alt="profile picture" />
      <p className="paragraph">
        Full stack web developer with a certificate from the University of
        Wisconsin Coding Bootcamp leveraging extensive interdisciplinary
        teamwork experience in healthcare to build a new career in tech with a
        special passion for continuous learning through collaborative projects
        invlolving back-end data use and management problem solving.
      </p>
      <h2 className="skills-heading">Technical Skills Include:</h2>
      {/* dynamically render into <li> elements from an object "Skills" to be able to update easily in future>    HTML/ CSS JavaScript  Node.js  SQL  NoSQL  GraphQL  React*/}

      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default About;
