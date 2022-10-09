// import React, { useEffect } from "react";
import weatherApp from "../../assets/images/weatherApp.png";
import techBlog from "../../assets/images/tech-blog.png";
import pizzaHunt from "../../assets/images/pizza-hunt.png";

const Portfolio = () => {
  const myWork = [
    {
      name: "Weather-App",
      image: "../../assets/images/weather-app.png",
      url: "https://gribbler25.github.io/weather-app/",
      gitHub: "https://github.com/gribbler25/weather-app",
    },
    {
      name: "Tech-Blog",
      image: "../../assets/images/tech-blog.png",
      url: "https://infinite-brook-92959.herokuapp.com",
      gitHub: "https://github.com/gribbler25/tech-blog",
    },
    {
      name: "Pizza-Hunt",
      image: "../../assets/images/pizza-hunt.png",
      url: "https://limitless-brushlands-77601.herokuapp.com/",
      gitHub: "https://github.com/gribbler25/pizza-hunt",
    },
    {
      name: "Run-Buddy",
      image: "../../assets/images/tech-blog.png",
      url: "https://gribbler25.github.io/run-buddy/",
      gitHub: "https://github.com/gribbler25/run-buddy",
    },
    {
      name: "Taskinator",
      image: "../../assets/images/tech-blog.png",
      url: "https://gribbler25.github.io/Taskinator/",
      gitHub: "https://github.com/gribbler25/Taskinator",
    },
    {
      name: "Photo-Port",
      image: "../../assets/images/tech-blog.png",
      url: " https://gribbler25.github.io/photo-port/",
      gitHub: "https://github.com/gribbler25/photo-port",
    },
  ];

  return (
    <section id="portfolio">
      <ul>
        {/* dynamically create the 6 <li> elements with the project data** */}
        <li className="portfolio-list">
          {myWork[0].name}
          <a href={myWork[0].url}>
            <img src={weatherApp} alt={myWork[0].name} />
          </a>
        </li>
        <li className="portfolio-list">
          {myWork[1].name}
          <a href={myWork[1].url}>
            <img src={techBlog} alt={myWork[1].name} />
          </a>
        </li>
        <li className="portfolio-list">
          {myWork[2].name}
          <a href={myWork[2].url}>
            <img src={pizzaHunt} alt={myWork[2].name} />
          </a>
        </li>
      </ul>
    </section>
  );
};
export default Portfolio;
