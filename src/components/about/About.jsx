import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./about.scss";

export default function About() {
  return (
    <div id="about">
      <h2 className="about-title">About Me</h2>
      <p className="about-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta et
        pariatur rerum iure sapiente, quibusdam deleniti libero inventore
        consectetur reprehenderit.
      </p>
      <ul className="list">
        <li className="list-item">
          <FaGithub className="list-icon" />
        </li>
        <li className="list-item">
          <FaLinkedinIn className="list-icon" />
        </li>
      </ul>
    </div>
  );
}
