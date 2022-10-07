const Nav = () => {
  return (
    <nav>
      <ul className="flex-row">
        <li className="mx-1">
          <a href="" data-testid="about">
            About me
          </a>
        </li>
        <li className="mx-1">
          <a href="">Contact</a>
        </li>
        <li className="mx-1">
          <a href="">Portfolio</a>
        </li>
        <li className="mx-1">
          <a href="">Resume</a>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
