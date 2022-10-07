// import React, { useEffect } from "react";

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
      <img src={require("../../assets/images/profilePic3.jpg")} />
      <p className="paragraph">
        Full stack web developer with a certificate from the University of
        Wisconsin Coding Bootcamp leveraging extensive interdisciplinary
        teamwork experience in healthcare to build a new career in tech with a
        special passion for continuous learning through collaborative projects
        invlolving back-end data use and management problem solving.
      </p>
      <h2>Technical Skills Include:</h2>
      {/* looking dynamically render into <li> elements from an object "Skills" to be able to update easily in future>    HTML/ CSS JavaScript  Node.js  SQL  NoSQL  GraphQL  React*/}
      <ul>
        <li>{skills[0].name}</li>
      </ul>
    </div>
  );
};
export default About;
