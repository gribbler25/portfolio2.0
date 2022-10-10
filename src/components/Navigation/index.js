const Navigation = (props) => {
  const { handleToggleSelected, titleSelected } = props;

  return (
    <nav>
      <ul className="flex-row">
        <li className={`mx-1 ${titleSelected.about && "navActive"}`}>
          <a href="#about" onClick={() => handleToggleSelected("about")}>
            About me
          </a>
        </li>

        <li className={`mx-1 ${titleSelected.contact && "navActive"}`}>
          <span>
            <a href="#contact" onClick={() => handleToggleSelected("contact")}>
              Contact
            </a>
          </span>
        </li>

        <li className={`mx-1 ${titleSelected.portfolio && "navActive"}`}>
          <span>
            <a
              href="#portfolio"
              onClick={() => handleToggleSelected("portfolio")}
            >
              Portfolio
            </a>
          </span>
        </li>

        <li className={`mx-1 ${titleSelected.resume && "navActive"}`}>
          <a
            href="https://docs.google.com/document/d/1fvtAXBnKPUashYuDOm_EK92x79q88v2M7fkp_GVR_Js/edit?usp=sharing"
            onClick={() => handleToggleSelected("resume")}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
