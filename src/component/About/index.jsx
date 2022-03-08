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
            <h1 className="t-shadow pb-3">Cute Otters Club Story</h1>
            <p className="">
              The Otters are tired of living in lakes and rivers, which is why
              they decided to move to the city to live with humans. Although the
              otters found the human way of life strange, they enjoyed the
              internet quite a lot. After spending too much time on the
              internet, they turned into geeks and decided to live with humans
              forever in Metaverse.
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
