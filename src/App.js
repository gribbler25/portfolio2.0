import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import ContactForm from "./components/Contactform";

function App() {
  const [titleSelected, setTitleSelected] = useState({
    about: true,
    contact: false,
    portfolio: false,
    resume: false,
  });

  const [currentSelection, setCurrentSelection] = useState("about");

  const handleToggleSelected = (selected) => {
    //this selected value will be either about/contact/portfolio/resume
    setTitleSelected(({ about, contact, portfolio, resume }) => {
      const currentTitle = {
        about: false,
        contact: false,
        portfolio: false,
        resume: false,
      };
      currentTitle[selected] = true;
      setTitleSelected(currentTitle); //first make them all(titles) false , then set the one that's in the arguments above to 'true' to change the color
      return currentTitle;
    });

    setCurrentSelection(selected); //then set a state of 'currentSelection' from above to that same title's name so currentSelection can be used as a value below
  };

  const renderMain = (
    currentSelect //renderMain is a function that can be called to select which component to render based on currentSelect value
  ) =>
    ({
      about: <About />,
      contact: <ContactForm />,
      portfolio: <Project />,
      resume: "",
    }[currentSelect]);

  return (
    <div className="App">
      <Header
        handleToggleSelected={handleToggleSelected}
        titleSelected={titleSelected}
      />

      <main>{renderMain(currentSelection)}</main>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
