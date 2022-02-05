/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import Jhasper from "../../assets/images/jhasper.jpg";
import Lusmi from "../../assets/images/lusmi.jpg";
import Tere from "../../assets/images/teresforbest.jpg";
import Ryan from "../../assets/images/ryan.png";
import Alopecan from "../../assets/images/alopecan.png";
import Aytha from "../../assets/images/aytha.jpg";
import Dan from "../../assets/images/dan.jpg";

export default function Team() {
  return (
    <section className="team" id="team">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-12 mb-5">
            <h1 className="fw-light t-shadow text-center">The Team</h1>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="team-member">
              <div className="team-img">
                <img src={Dan} alt="team member" className="img-fluid" />
              </div>
              <div className="team-hover">
                <div className="desk pt-5">
                  <p>
                    Co-Founder Fireworks Game, Co-Founder Investgoo, Synthetic
                    indices Trader
                  </p>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Dan Cruz</h5>
              <span>Founder</span>
            </div>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="team-member">
              <div className="team-img">
                <img src={Jhasper} alt="team member" className="img-fluid" />
              </div>
              <div className="team-hover">
                <div className="desk pt-5">
                  <br />
                  <p>
                    CEO Kaos Trading Club, Psychologist, Analyst Trader Position
                    number 3 at the Bolivian level
                  </p>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Jhasper Soliz</h5>
              <span>Founder</span>
            </div>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="team-member">
              <div className="team-img">
                <img src={Lusmi} alt="team member" className="img-fluid" />
              </div>
              <div className="team-hover">
                <div className="desk pt-5">
                  Economist, DAY TRADER, High frequency trade
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Lusmilingdx</h5>
              <span>Founder</span>
            </div>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="team-member">
              <div className="team-img">
                <img src={Aytha} alt="team member" className="img-fluid" />
              </div>
              <div className="team-hover">
                <div className="desk pt-5">
                  <p>Cryptocurrency Investor ,Day Trader</p>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Aytha Suarez</h5>
              <span className="text-danger">New </span>
              <span>Founder</span>
            </div>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="team-member">
              <div className="team-img">
                <img src={Tere} alt="team member" className="img-fluid" />
              </div>
              <div className="team-hover">
                <div className="desk pt-5">
                  <p>Computer scientist, Analyst Trader, Trader</p>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Teresforbest</h5>
              <span>Co - Founder</span>
            </div>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="team-member">
              <div className="team-img">
                <img src={Alopecan} alt="team member" className="img-fluid" />
              </div>
              <div className="team-hover">
                <div className="desk pt-5">
                  <p>Actions Investor, Day Trader</p>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Alopecan</h5>
              <span>Co - Founder</span>
            </div>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="team-member">
              <div className="team-img">
                <img src={Ryan} alt="team member" className="img-fluid" />
              </div>
              <div className="team-hover">
                <div className="desk pt-5">
                  <p>Site Developer/Technician, Expert Blockchain Developer</p>
                </div>
              </div>
            </div>
            <div className="team-title">
              <h5>Ryan</h5>
              <span className="text-danger">New</span>
              <span> Co - Founder </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
