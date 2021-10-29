import React from "react";
import Headshot from "../../assets/headshot.jpg";
import "./header.scss";
import { data } from "./data";

const Header = () => {
  return (
    <div className="header">
      <div className="headshot">
        <img src={Headshot} alt="headshot" />
      </div>
      <div className="summary">
        {data.map((item) => (
          <div className={item.label}>
            {item.image ? <img src={item.image} alt={item.label} /> : ""}
            {item.link ? <a href={item.link}>{item.link}</a> : ""}
            {item.bold ? <b>{`${item.bold} `}</b> : ""}
            {item.value || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
