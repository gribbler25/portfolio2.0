import React, { useState } from "react";
import "./App.css";
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
    setTitleSelected(({ about, contact, portfolio, resume }) => {
      const currentTitle = {
        about: false,
        contact: false,
        portfolio: false,
        resume: false,
      };
      currentTitle[selected] = true;
      setTitleSelected(currentTitle);
      return currentTitle;
    });

    setCurrentSelection(selected);
  };

  const renderMain = (currentSelect) =>
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
