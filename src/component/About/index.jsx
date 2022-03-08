import React from "react";
import "./style.css";
import ImgAbout from "../../assets/images/about.png";

export default function About() {
  return (
    <section className="about" id="about">
      <div
        className="container h-100"
        style={{ borderBottom: "1px solid white" }}
      >
        <div className="row py-5 h-100 align-items-center">
          <div
            className="col-md-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h1 className="t-shadow pb-3">Cute Otters Club Story</h1>
            <p className="">
              Yetis have been living in the coldest and most threatening region
              of the Metaverse for ages: the Ketra tundra. <br />
              The Elders charged the entire tribe to embark on a quest to find a
              mysterious force that will save the village from chaos. <br />
              One day, a gentle citizen stumbled upon the Visai, an Artificial
              Intelligence rune. <br />
              Yetis became YetAis, a tribe reborn and ready to shake the
              Metaverse. <br />
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
