import React from "react";
import "./style.css";
import Roadmap1 from "../../assets/images/roadmap.png";

export default function Roadmap() {
  return (
    <section id="roadmap" className="roadmap">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-12">
            <h1 className="fw-light t-shadow text-center">Roadmap</h1>
          </div>
          <div
            className="col-md-12"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img src={Roadmap1} alt="roadmap" className="img-fluid" />
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-bottom-1644075407">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}
