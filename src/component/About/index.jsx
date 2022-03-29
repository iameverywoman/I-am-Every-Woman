import React from "react";
import "./style.css";
import Gif from "../../assets/images/gif.gif";

export default function About() {
  return (
    <section
      id="about"
      className="h-100 w-100 about"
      style={{ boxSizing: "border-box" }}
    >
      <div className="content-8-3" data-aos="zoom-in">
        <div className="container-xxl mx-auto main">
          <div className="mx-auto d-flex flex-lg-row flex-column position-relative gap-md-4 gap-0">
            {/* <!-- Left Column --> */}
            <div
              className="left-column flex-lg-grow-1 d-flex flex-column align-items-center text-center"
              style={{ zIndex: "10" }}
            >
              <div className="frame">
                <img className="w-100" src={Gif} alt="img" />
              </div>
            </div>

            {/* <!-- Right Column --> */}
            <div className="right-column flex-lg-grow-1 text-start d-block p-3">
              <h1 className="text-white t-shadow title-font">About Us</h1>
              <div>
                <h4>Who We Are</h4>
                <p className="text-gray-1 caption-text">
                  I am every woman. That's who we are! We are you, we are every
                  woman out there looking to have equal opportunity, craving for
                  the world to see what she has in store. We are a team looking
                  to create an NFT platform where women can tap into the
                  cryptocurrency and blockchain.
                </p>
              </div>
              <div>
                <h4>Our Vision</h4>
                <p className="text-gray-1 caption-text">
                  We are all about finding an even field for women. We
                  understand that the world is developing yet, equality and
                  equity are still amiss in some areas especially in
                  professional settings. We want to give women an opportunity to
                  soar beyond their potential. Hence, everyone in our NFT
                  community is treated as equals.
                </p>
              </div>
              {/* <div>
                <h4>Our Vision</h4>
                <p className="text-gray-1 caption-text">
                  Our vision is for every creator on our NFT Platform to be
                  successful. We plan on achieving this by providing the best
                  support that we can. The support will include publicity, the
                  right working tool, etc. We will create opportunities for
                  creators to be discovered by big names in the NFT community.
                  There will be maximum.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* svg */}
      <div class="custom-shape-divider-bottom-1647827281">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}
