import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import "./navigation.scss";

export default function Navigation() {
  return (
    <nav>
      <input type="checkbox" id="bars" />
      <label htmlFor="bars">
        <FaBars className="bars-icon" />
      </label>
      <ul className="list">
        <li className="list-item">Home</li>
        <li className="list-item">Experience</li>
        <li className="list-item">Skills</li>
        <li className="list-item">Projects</li>
      </ul>
    </nav>
  );
}
