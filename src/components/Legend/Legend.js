import React from "react";
import "./Legend.css";

function Legend(props) {
  return (
    <div className="legendContainer">
      {props.legends.map((item, index) => {
        return (
          <div key={index} className="legendItem">
            <div
              className="legendCircle"
              style={{ backgroundColor: item.color }}
            />
            <p>{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Legend;
