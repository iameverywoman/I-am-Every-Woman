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
                    <h3 class="title">Title 1</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div class="card" data-aos="fade-up">
                  <div class="info">
                    <h3 class="title">Title 2</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div class="card" data-aos="fade-up">
                  <div class="info">
                    <h3 class="title">Title 3</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div class="card" data-aos="fade-up">
                  <div class="info">
                    <h3 class="title">Title 4</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
                <div class="card" data-aos="fade-up">
                  <div class="info">
                    <h3 class="title">Title 5</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12 right">
            <img src={Roadmap1} alt="" srcset="" class="img-fluid mb-3" />
            <img src={Roadmap2} alt="" srcset="" class="img-fluid mb-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
