import React from "react";
import ImgFeat from "../../assets/images/featured.png";
import "./style.css";

export default function Featured() {
  return (
    <section className="featured" id="featured">
      <div className="container">
        <img src={ImgFeat} alt="" className="img-fluid" />
      </div>
    </section>
  );
}
