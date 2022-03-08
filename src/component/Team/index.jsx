/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import Team1 from "../../assets/images/3.png";

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
                <h3 className="card-title">Paul</h3>
                <h5 className="card-title">
                  <i class="fa-solid fa-certificate"></i> Marketing Genius
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mt-3" style={{ Width: "18rem" }}>
              <img src={Team1} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h3 className="card-title">Joni</h3>
                <h5 className="card-title">
                  <i class="fa-solid fa-certificate"></i> Community Psycho.
                </h5>

                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card mt-3" style={{ Width: "18rem" }}>
              <img src={Team1} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h3 className="card-title">Steven</h3>
                <h5 className="card-title">
                  <i class="fa-solid fa-certificate"></i> Blockchain Freak
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
