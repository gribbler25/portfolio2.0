import React from "react";

const Navigation = (props) => {
  const {
    titleSelected,
    setTitleSelected,
    renderAbout,
    setRenderAbout,
    contact,
    setContact,
  } = props;

  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-1">
          <a
            href="#about"
            onClick={() => {
              setTitleSelected(true);
              setRenderAbout(true);
            }}
          >
            About me
          </a>
        </li>

        <li className={`mx-1 ${titleSelected && "navActive"}`}>
          <span>
            <a
              href="#contact"
              onClick={() => {
                setTitleSelected(true);
                setRenderAbout(false);
                setContact(true);
              }}
            >
              Contact
            </a>
          </span>
        </li>

        <li className={`mx-1 ${titleSelected && "navActive"}`}>
          <span>
            <a
              href="#portfolio"
              onClick={() => {
                setTitleSelected(true);
                setRenderAbout(false);
                setContact(false);
              }}
            >
              Portfolio
            </a>
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
