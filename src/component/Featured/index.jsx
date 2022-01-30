import React from "react";
import Ff from "../../assets/images/ff.png";
import Lol from "../../assets/images/lol.png";
import Ml from "../../assets/images/ml.png";
import Warzone from "../../assets/images/warzone.png";
import Logo from "../../assets/images/kaos-trading.png";
import "./style.css";

export default function Featured() {
  return (
    <section className="featured" id="featured">
      <div className="container-fluid py-5 h-100">
        <div className="row h-100 align-items-center">
          <div className="col-md-3 featured-item">
            <img src={Lol} alt="lol" className="img-fluid" />
          </div>
          <div className="col-md-2 featured-item">
            <img src={Warzone} alt="warzone" className="img-fluid" />
          </div>
          <div className="col-md-2 featured-item">
            <img src={Ff} alt="ff" className="img-fluid" />
          </div>
          <div className="col-md-2 featured-item">
            <img src={Ml} alt="ml" className="img-fluid" />
          </div>
          <div className="col-md-3 featured-item">
            <img src={Logo} alt="kaos" className="img-fluid w-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
