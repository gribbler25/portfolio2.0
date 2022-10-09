import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Contactform";

function App() {
  // insert useState here
  const [renderAbout, setRenderAbout] = useState(true);
  return (
    <div className="App">
      <Header renderAbout={setRenderAbout} />
      <main>
        {renderAbout ? (
          <>
            <About />
          </>
        ) : (
          <Project />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
