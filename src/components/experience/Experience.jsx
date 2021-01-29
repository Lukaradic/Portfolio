import React from "react";
import "./experience.scss";

export default function Experience() {
  const data = [
    {
      company: "IM Republic",
      date: "may 2020. - present",
      title: "Front end dev",
    },
    {
      company: "Cubes d.o.o.",
      date: "oct 2019. - may 2020.",
      title: "Front end dev - intern",
    },
  ];

  function createDiv() {
    return data.map((item, i) => (
      <div className="experience-div">
        <span className="experience-div-title">{item.title}</span>
        <span className="experience-div-company">{item.company}</span>
        <span className="experience-div-date">{item.date}</span>
      </div>
    ));
  }
  return (
    <section id="experience">
      <h3 className="experience-title">My Experience</h3>
      <div className="expeprience-wrapper">{createDiv()}</div>
    </section>
  );
}
