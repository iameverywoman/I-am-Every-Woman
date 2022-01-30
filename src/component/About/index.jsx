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
              <span className="text-light">Our Mission:</span> Build a community
              of winners
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
        <div class="custom-shape-divider-bottom-1643483443">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              class="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
