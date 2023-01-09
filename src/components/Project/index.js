// import React, { useEffect } from "react";
import weatherApp from "../../assets/images/weatherApp.png";
import techBlog from "../../assets/images/tech-blog.png";
import pizzaHunt from "../../assets/images/pizza-hunt.png";
import runBuddy from "../../assets/images/run-buddy.png";
import cookies from "../../assets/images/cookies.png";
import iReadit from "../../assets/images/iReadit-app.png";

const Project = () => {
  const myWork = [
    {
      name: "Weather-App",
      image: weatherApp,
      url: "https://gribbler25.github.io/weather-app/",
      gitHub: "https://github.com/gribbler25/weather-app",
    },
    {
      name: "Tech-Blog",
      image: techBlog,
      url: "https://infinite-brook-92959.herokuapp.com",
      gitHub: "https://github.com/gribbler25/tech-blog",
    },
    {
      name: "Pizza-Hunt",
      image: pizzaHunt,
      url: "https://limitless-brushlands-77601.herokuapp.com/",
      gitHub: "https://github.com/gribbler25/pizza-hunt",
    },
    {
      name: "Run-Buddy",
      image: runBuddy,
      url: "https://gribbler25.github.io/run-buddy/",
      gitHub: "https://github.com/gribbler25/run-buddy",
    },
    {
      name: "Quick Cookies",
      image: cookies,
      url: "https://thawing-basin-74038.herokuapp.com/",
      gitHub: "https://github.com/Boywondr84/mern-subscription",
    },
    {
      name: "iReadit-app",
      image: iReadit,
      url: "https://immense-ravine-74376.herokuapp.com/",
      gitHub: "https://github.com/Boywondr84/iReadIt",
    },
  ];

  return (
    <section id="portfolio">
      <h2 className="skills-heading">My Work</h2>
      <ul className="portfolio">
        {/* dynamically create the 6 <li> elements with the project data** */}
        {myWork.map((work) => (
          <li className="portfolio-list" key={work.name}>
            <a href={work.url}>
              <img src={work.image} alt="" />
            </a>
            {work.name}
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Project;
