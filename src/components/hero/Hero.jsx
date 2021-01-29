import React from "react";
import "./hero.scss";
import About from "../about/About";
export default function Hero() {
  return (
    <div id="hero">
      <p className="hero-text">
        Hello, i am <br /> Luka Radic
      </p>
      <About />
    </div>
  );
}
