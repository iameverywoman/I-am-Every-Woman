import React from "react";
import "./style.css";
import Roadmap1 from "../../assets/images/roadmap-1.jpg";
import Roadmap2 from "../../assets/images/roadmap-2.png";

export default function Roadmap() {
  return (
    <section id="roadmap" className="roadmap">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-12">
            <h1 className="fw-light t-shadow text-center">Roadmap</h1>
          </div>
          <div
            className="col-md-4"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img src={Roadmap1} alt="roadmap-1" className="img-fluid py-4" />
            <img src={Roadmap2} alt="roadmap-2" className="img-fluid py-4" />
          </div>
          <div className="col-md-8">
            <ul
              className="timeline "
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <li className="timeline-item rounded ml-3 p-4 shadow">
                <div className="timeline-arrow"></div>
                <h2 className="h5 mb-0">PHASE 1</h2>
                <ul style={{ paddingLeft: "15px", marginTop: "10px" }}>
                  <li>
                    <p className="text-small font-weight-bold">Mint .</p>
                  </li>
                  <li>
                    <p className="text-small font-weight-bold">
                      The first round of CLUB KAOS gaming TOURNAMENTS begins
                      (key to recruit new talents).
                    </p>
                  </li>
                  <li>
                    <p className="text-small font-weight-bold">
                      Airdrop for our WAR OF KAOS owners.
                    </p>
                  </li>
                  <li>
                    <p className="text-small font-weight-bold">
                      Acquisition of the E-SPORTS team.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="timeline-item rounded ml-3 p-4 shadow">
                <div className="timeline-arrow"></div>
                <h2 className="h5 mb-0">PHASE 2</h2>
                <ul style={{ paddingLeft: "15px", marginTop: "10px" }}>
                  <li>
                    <p className="text-small font-weight-bold">
                      Game available first Beta WAR OF KAOS (morpg).
                    </p>
                  </li>
                  <li>
                    <p className="text-small font-weight-bold">
                      Free NFT apparel featuring your minted NFT during Phase 4.
                    </p>
                  </li>
                  <li>
                    <p className="text-small font-weight-bold">
                      Second round of TOURNAMENTS.
                    </p>
                  </li>
                  <li>
                    <p className="text-small font-weight-bold">
                      GEM KAOS token launch (1/3 rounds).
                    </p>
                  </li>
                  <li>
                    <p className="text-small font-weight-bold">
                      Interactions with the METAVERSE. Unique to our owners.
                    </p>
                  </li>
                  <li>
                    <p className="text-small font-weight-bold">
                      Participation of our E-SPORTS team in unofficial and
                      third-party tournaments.
                    </p>
                  </li>
                </ul>
              </li>
              <li className="timeline-item rounded ml-3 p-4 shadow">
                <div className="timeline-arrow"></div>
                <h2 className="h5 mb-0">PHASE 3</h2>
                <ul style={{ paddingLeft: "15px", marginTop: "10px" }}>
                  <li>
                    <p className="text-small font-weight-bold">
                      Release of the official game WAR OF KAOS.
                    </p>
                  </li>
                  <li>
                    <p className="text-small font-weight-bold">
                      Third round of TOURNAMENTS.
                    </p>
                    <li>
                      <p className="text-small font-weight-bold">
                        Collaboration with brands and companies, unique benefits
                        for our holders.
                      </p>
                    </li>
                    <li>
                      <p className="text-small font-weight-bold">
                        Participation of our E-sports team in official
                        tournaments and leagues.
                      </p>
                    </li>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        {/* svg */}
        <div className="custom-shape-divider-bottom-1643483921">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
