/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import Team1 from "../../assets/images/david.jpeg";
import Team2 from "../../assets/images/azra.jpeg";
import Team3 from "../../assets/images/ryan.png";

export default function Team() {
  return (
    <section id="team" className="team">
      <div
        className="container py-5"
        style={{ borderBottom: "1px solid white" }}
      >
        <h1 className="text-center t-shadow ">Team</h1>
        <div className="row mt-5 justify-content-center">
          <div className="col-md-3">
            <div className="card mt-3" style={{ Width: "18rem" }}>
              <img src={Team1} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h3 className="card-title">David</h3>
                <h5 className="card-title">
                  <i class="fa-solid fa-certificate"></i> Marketing
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mt-3" style={{ Width: "18rem" }}>
              <img src={Team2} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h3 className="card-title">Azra</h3>
                <h5 className="card-title">
                  <i class="fa-solid fa-certificate"></i> Digital Artist
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mt-3" style={{ Width: "18rem" }}>
              <img src={Team3} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h3 className="card-title">Ryan</h3>
                <h5 className="card-title">
                  <i class="fa-solid fa-certificate"></i> Blockchain Developer
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
