import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="name-foot">
          <h1>Sarah Nguyen</h1>
        </div>
        <div className="flex-row">
          <Nav />
        </div>
      </header>
      <main>
        <About />

        <Portfolio />
      </main>
      <footer className="name-foot">
        <a href="https://github.com/gribbler25" target="blank">
          GitHub profile
        </a>
        <a href="https://www.linkedin.com/in/snguyen25/">linkedin profile</a>
        <a href="https://stackoverflow.com/users/18156590/gribbler25">
          stackoverflow profile
        </a>
      </footer>
    </div>
  );
}

export default App;
