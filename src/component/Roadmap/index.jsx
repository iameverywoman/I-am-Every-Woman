import React from "react";
import "./style.css";
import Roadmap1 from "../../assets/images/3.png";
import Roadmap2 from "../../assets/images/4.png";

export default function Roadmap() {
  return (
    <section id="roadmap" className="roadmap">
      <div
        className="container py-5"
        style={{ borderBottom: "1px solid white" }}
      >
        <div className="row">
          <div class="col-md-6">
            <h1 className="t-shadow ">Roadmap</h1>
            <div class="timeline">
              <div class="outer">
                <div class="card" data-aos="fade-up">
                  <div class="info">
                    <h3 class="title">Mint - Sold out (done)</h3>
                    <p>Early February 2022</p>
                  </div>
                </div>
                <div class="card" data-aos="fade-up">
                  <div class="info">
                    <h3 class="title">Distribution of mint giveaways (done)</h3>
                    <p>February 2022</p>
                  </div>
                </div>
                <div class="card" data-aos="fade-up">
                  <div class="info">
                    <h3 class="title">Trading Lieutenant first release</h3>
                    <p>End Q1 - 2022</p>
                  </div>
                </div>
                <div class="card" data-aos="fade-up">
                  <div class="info">
                    <h3 class="title">NFT Analyser first release</h3>
                    <p>End Q1 - 2022</p>
                  </div>
                </div>
                <div class="card" data-aos="fade-up">
                  <div class="info">
                    <h3 class="title">Cute Otters Club relase.</h3>
                    <p>End Q1 - 2022</p>
                  </div>
                </div>
                <div class="card" data-aos="fade-up">
                  <div class="info">
                    <h3 class="title">Metaverse Placement</h3>
                    <p>Q2, Q3 - 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 right">
            <img
              src={Roadmap1}
              alt=""
              srcset=""
              class="img-fluid mb-3"
              data-aos="fade-up"
            />
            <img
              src={Roadmap2}
              alt=""
              srcset=""
              class="img-fluid mb-3"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
