import React from "react";
import { data } from "./data/index";
import "./content.scss";

const Content = ({ page }) => {
  return (
    <div className="content">
      {data[page].map((item, index) => {
        if (item.value === "thematic-break")
          return <div className="thematic-break" />;
        else if (item.value === null) return <div />;
        else if (item.type === "experience") {
          return (
            <div className={item.type}>
              <div className="degree-grade">
                <div>
                  <strong>{item.value.designation}</strong>
                </div>
                <div>
                  <em>@ {item.value.company}</em>
                </div>
              </div>
              <ul>
                {item.value.tasks.map((task) => (
                  <li>{task}</li>
                ))}
              </ul>
            </div>
          );
        } else if (item.type === "education") {
          return (
            <div className={item.type}>
              <div className={"degree-grade"}>
                <div>
                  <strong>{item.value.degree}</strong>
                </div>
                <div>
                  <strong>{item.value.grade}</strong>
                </div>
              </div>
              <div>{item.value.school}</div>
            </div>
          );
        } else if (item.type === "projects") {
          return (
            <div className={item.type}>
              {item.value.map((project) => {
                return (
                  <React.Fragment>
                    <div>
                      <b>{project.name}</b>
                    </div>
                    <ul>
                      <li>{project.description}</li>
                    </ul>
                  </React.Fragment>
                );
              })}
            </div>
          );
        } else if (item.type === "extras") {
          return (
            <div className={item.type}>
              <ul>
                {item.value.map((extra) => {
                  return <li>{extra}</li>;
                })}
              </ul>
            </div>
          );
        } else if (item.type === "language") {
          return (
            <div className={item.type}>
              <table>
                <tr>
                  <th>Language</th>
                  <th>Listening</th>
                  <th>Reading</th>
                  <th>Speaking</th>
                  <th>Writing</th>
                </tr>
                {item.value.map((language) => {
                  return (
                    <tr>
                      <th>{language.name}</th>
                      <td>{language.listening}</td>
                      <td>{language.reading}</td>
                      <td>{language.speaking}</td>
                      <td>{language.writing}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
          );
        } else if (item.type === "technical") {
          return (
            <div className={item.type}>
              {item.value.map((extra) => {
                return <li>{extra}</li>;
              })}
            </div>
          );
        } else if (item.type === "professional") {
          return (
            <div className={item.type}>
              <ul>
                {item.value.map((extra) => {
                  return <li>{extra}</li>;
                })}
              </ul>
            </div>
          );
        } else return <div className={item.label || null}>{item.value}</div>;
      })}
    </div>
  );
};

export default Content;
