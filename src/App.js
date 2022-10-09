import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  // insert useState here
  const [renderAbout, setRenderAbout] = useState(true);
  return (
    <div className="App">
      <Header renderAbout={renderAbout} setRenderAbout={setRenderAbout} />
      <main>
        {!renderAbout ? (
          <>
            <Project />
          </>
        ) : (
          <About />
        )}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
