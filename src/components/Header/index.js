import React, { useState } from "react";
import Navigation from "../Navigation";
import ContactForm from "../Contactform";

const Header = (props) => {
  const { renderAbout, setRenderAbout } = props;
  const [titleSelected, setTitleSelected] = useState(false);
  const [contact, setContact] = useState(false);

  return (
    <header className="App-header">
      <div className="name-foot">
        <h1>Sarah Nguyen</h1>
      </div>
      <div className="flex-row">
        {contact ? (
          <>
            <ContactForm
              contact={contact}
              setContact={setContact}
              renderAbout={renderAbout}
              setRenderAbout={setRenderAbout}
            />
          </>
        ) : (
          <>
            <Navigation
              titleSelected={titleSelected}
              setTitleSelected={setTitleSelected}
              renderAbout={renderAbout}
              setRenderAbout={setRenderAbout}
              contact={contact}
              setContact={setContact}
            />
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
