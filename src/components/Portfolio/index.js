// import React, { useEffect } from "react";

const Portfolio = () => {
  const myWork = [
    {
      name: "Weather-App",
      image: "../../assets/images/weather-app.png",
      url: "gribbler25.github.io/weather-app/",
    },
    {
      name: "Weather-App",
      image: "../../assets/images/weather-app.png",
      url: "gribbler25.github.io/weather-app/",
    },
  ];

  return (
    <section id="portfolio">
      <ul>
        <li>
          {myWork[0].name}
          <a href={myWork[0].url}>
            <img
              src={require("../../assets/images/weather-app.png")}
              alt={myWork[0].name}
            />
          </a>
        </li>
      </ul>
    </section>
  );
};
export default Portfolio;
