import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaMap } from "react-icons/fa";

import "./contact.scss";

export default function Contact() {
  return (
    <footer id="contact">
      <div className="contact-wrapper">
        <h4 className="contact-title">Get in touch</h4>
        <ul className="list">
          <li className="list-item">
            <FaEnvelope className="list-item-icon" />
            radic.luka17@gmail.com
          </li>
          <li className="list-item">
            <FaPhone className="list-item-icon" />
            060/672-30-23
          </li>
          <li className="list-item">
            <FaMapMarkerAlt className="list-item-icon" />
            Belgrade, Serbia
          </li>
        </ul>
      </div>
    </footer>
  );
}
