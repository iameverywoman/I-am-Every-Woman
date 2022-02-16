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
            <h1 className="t-shadow pb-3">What is The Jaguar Club</h1>
            <p className="text-justify">
              The Jaguar Club is a collection of 1,111 Jaguars that live in the
              Jaguar Club City. Each Jaguar is unique and combines itself with
              different traits. It is a community-driven NFT project that offers
              great benefits to all holders. The team is excited to put all
              their creativity and focus into building a great community for all
              Jaguars. Not only is it a nice PFP, but also a project offering
              incredible experiences to our DAO.
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
