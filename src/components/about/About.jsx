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
          <a href="https://github.com/Lukaradic" target="_blank">
            <FaGithub className="list-icon" />
          </a>
        </li>
        <li className="list-item">
          <a
            href="https://www.linkedin.com/in/luka-radic-b3529215b/"
            target="_blank"
          >
            <FaLinkedinIn className="list-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
}
