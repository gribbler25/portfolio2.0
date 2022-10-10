import React from "react";
import Navigation from "../Navigation";

const Header = (props) => {
  return (
    <header className="App-header">
      <div className="name-foot">
        <h1>Sarah Nguyen</h1>
      </div>
      <div className="flex-row">
        <Navigation {...props} />
      </div>
    </header>
  );
};
export default Header;
