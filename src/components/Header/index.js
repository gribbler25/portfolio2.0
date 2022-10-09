import React, { useState } from "react";

const Header = (props) => {
  const { renderAbout, setRenderAbout } = props;
  const [titleSelected, setTitleSelected] = useState(false);
  // const [renderAbout, setRenderAbout] = useState(true);
  return (
    <header className="App-header">
      <div className="name-foot">
        <h1>Sarah Nguyen</h1>
      </div>
      <div className="flex-row">
        <Navigation
          titleSelected={titleSelected}
          setTitleSelected={setTitleSelected}
          renderAbout={renderAbout}
          setRenderAbout={setRenderAbout}
        />
      </div>
    </header>
  );
};
export default Header;
