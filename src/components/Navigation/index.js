const Navigation = (props) => {
  const { handleToggleSelected, titleSelected } = props;

  return (
    <nav>
      {/* <pre>{JSON.stringify(titleSelected, null, 2)}</pre> */}
      <ul className="flex-row">
        <li className="mx-1">
          <a
            href="#about"
            className={`${titleSelected.about && "navActive"}`}
            onClick={() => handleToggleSelected("about")}
          >
            About me
          </a>
        </li>

        <li className="mx-1">
          <span>
            <a
              href="#contact"
              className={`${titleSelected.contact && "navActive"}`}
              onClick={() => handleToggleSelected("contact")}
            >
              Contact
            </a>
          </span>
        </li>

        <li className="mx-1">
          <span>
            <a
              href="#portfolio"
              className={`mx-1 ${titleSelected.portfolio && "navActive"}`}
              onClick={() => handleToggleSelected("portfolio")}
            >
              Portfolio
            </a>
          </span>
        </li>

        <li className="mx-1">
          <a
            href="https://docs.google.com/document/d/1fvtAXBnKPUashYuDOm_EK92x79q88v2M7fkp_GVR_Js/edit?usp=sharing"
            className={`mx-1 ${titleSelected.resume && "navActive"}`}
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
