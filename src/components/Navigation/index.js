import React from "react";

const Navigation = (props) => {
  const { titleSelected, setTitleSelected, renderAbout, setRenderAbout } =
    props;

  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-1">
          <a
            href="#about"
            data-testid="about"
            onClick={() => {
              setTitleSelected(true);
              setRenderAbout(true);
            }}
          >
            About me
          </a>
        </li>

        <li className={`mx-1 ${titleSelected && "navActive"}`}>
          <span
            onClick={() => {
              setTitleSelected(true);
              setRenderAbout(false);
            }}
          >
            Contact
          </span>
        </li>

        <li className={`mx-1 ${titleSelected && "navActive"}`}>
          <span
            onClick={() => {
              setTitleSelected(true);
              setRenderAbout(false);
            }}
          >
            Portfolio
          </span>
        </li>

        <li className={`mx-1 ${titleSelected && "navActive"}`}>
          <a
            href="https://docs.google.com/document/d/1fvtAXBnKPUashYuDOm_EK92x79q88v2M7fkp_GVR_Js/edit?usp=sharing"
            onClick={() => setTitleSelected(true)}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
