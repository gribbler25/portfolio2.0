// import React, { useEffect } from "react";

const Nav = () => {
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-1">
          <a href="#about">About me</a>
        </li>
        <li className="mx-1">
          <a href="#contact">Contact</a>
        </li>
        <li className="mx-1">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="mx-1">
          <a href="https://docs.google.com/document/d/1fvtAXBnKPUashYuDOm_EK92x79q88v2M7fkp_GVR_Js/edit?usp=sharing">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
