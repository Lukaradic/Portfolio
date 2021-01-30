import React from "react";
import { FaEye } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { BsFillLightningFill } from "react-icons/bs";

import "./skills.scss";

export default function Skills() {
  const arr = [
    "html",
    "css",
    "scss",
    "javascript",
    "typescript",
    "react",
    "redux",
    "rest",
    "git",
    "nodejs",
  ];

  function renderList() {
    return arr.map((item, i) => (
      <li className="list-item" key={i}>
        {item}
      </li>
    ));
  }
  return (
    <section id="skills">
      <div className="skills-div">
        <h4 className="skills-title">My Skills</h4>
        <div className="skills-icons">
          <div className="skills-icons-div">
            <FaEye className="skills-icon" />
            <h4 className="skills-icons-text">Eye For Details</h4>
          </div>
          <div className="skills-icons-div">
            <HiLightBulb className="skills-icon" />
            <h4 className="skills-icons-text">Problem Solver</h4>
          </div>
          <div className="skills-icons-div">
            <BsFillLightningFill className="skills-icon" />
            <h4 className="skills-icons-text">Fast Learner</h4>
          </div>
        </div>
        <h4 className="skills-list-title">Coing Skills</h4>
        <div className="skills-list">
          <ul className="list">{renderList()}</ul>
        </div>
      </div>
    </section>
  );
}
