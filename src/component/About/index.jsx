import React from "react";
import "./style.css";
import ImgAbout from "../../assets/images/about.png";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container h-100">
        <div className="row py-5 h-100 align-items-center">
          <div className="col-12">
            <h1 className="text-center t-shadow pb-3">
              <span style={{ color: "red" }}>Our Mission:</span> Build a
              community of winners
            </h1>
          </div>
          <div
            className="col-md-6"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <p className="text-justify">
              First NFT collection focused on the decentralization of E-SPORTS
              under the SOLANA network We plan to build our own PROFESSIONAL
              TEAM and compete in games like League of Legends, Warzone, Valory,
              Free Fire. <br /> <br /> Kaos Trading Club launches the collection
              WAR OF KAOS limiting access to the club to only 888 pieces that
              will have utilities within the KAOS ecosystem, The main of these
              will be the formation of an E-SPORTS team that will compete in
              official leagues and tournaments, our owners will be the owners of
              said team, thus having decision-making and royalties from what has
              been achieved. We intend to create a quality roster, which is why
              we will have tournaments and transfers to achieve the desired
              roster of the team. <br />
              <br /> Collaborating with different influencers and celebrities
              from the GAMING environment All this generates a state of constant
              FOMO for wanting to have our collection, Unlike many projects, we
              will not only focus on creating a video game and the token,
              (because projects that only have this game and token feature fail
              because they are not scalable over time) WAR OF KAOS will have its
              video game and token but it will not be based on just that, the
              E-SPORTS team will have membership to the club to see exclusive
              market analysis. They will be some of the utilities of the
              collection. As a club of TRADERS, we will apply market strategies
              to always have a high Floor Price
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
