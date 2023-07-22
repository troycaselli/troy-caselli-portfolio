import React from "react";
import "../../styling/divider.css";

function Divider() {
  return (
    <section className="divider">
      <div className="divider__half"></div>
      <div className="divider__outer-diamond">
        <div className="divider__inner-diamond"></div>
      </div>
      <div className="divider__half"></div>
    </section>
  );
}

export default Divider;
