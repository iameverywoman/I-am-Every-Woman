import React from "react";
import "./style.css";
import ImgAbout from "../../assets/images/about.png";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container h-100">
        <div className="row py-5 h-100 align-items-center">
          <div
            className="col-md-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h1 className="t-shadow pb-3">About</h1>
            <p className="">
              Expansion ThugBirdz is on a mission to pay homage to their O.G.
              feathered homies, the ThugBirdz. The Expansion ThugBirdz
              collection features a distinct “yellow” background. These birdz
              are truly unique and each has a different set of traits, making
              each one-of-a-kind. This flock of ThugBirdz are pecking their way
              up the ranks in the underworld of the Metaverse, so be on the
              lookout!
            </p>
            <h3 className="t-shadow"> Different Gang, Same Street Cred.</h3>
            <p>
              Expansion ThugBirdz is not affiliated with ThugBirdz, but we pay
              homage to our homies. The Expansion ThugBirdz collection contains
              no duplicates of the original ThugBirdz Assortment.
            </p>
          </div>
          <div
            className="col-md-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img src={ImgAbout} alt="wok-collapse" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}
