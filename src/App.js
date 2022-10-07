import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="name">
          <h1>Sarah Nguyen</h1>
          <a href="https://github.com/gribbler25" target="blank">
            GitHub
          </a>
        </div>
        <div class="flex-row">
          <Nav />
        </div>
      </header>
      <main>
        <About />
      </main>
    </div>
  );
}

export default App;
