/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <footer className="text-center text-white sticky-bottom " id="footer">
      <div className="container pt-4">
        <div className="row follow" data-aos="flip-up">
          <div className="col-md-6 p-3 ">
            <h1 className="fw-light t-shadow text-center mb-5 pt-5">
              Join The <br /> Community
            </h1>
          </div>
          <div className="col-md-6 p-3">
            <p className="text-dark foot-desc">
              Follow our Twitter, Facebook and Discord for more War of Kaos
              announcements
            </p>
            <a href="https://twitter.com/WarofKaos">
              <button className="my-1 btn-twitter">
                <span>Follow Twitter</span>
              </button>{" "}
            </a>
            <br />
            <a href="https://discord.gg/ecEhbGyeZw">
              <button className="my-1 btn-discord">
                <span>Follow Discord</span>
              </button>
            </a>
            <br />
            <a href="https://www.facebook.com/Kaos-Trading-Club-153992940126800">
              <button className="my-1 btn-fb">
                <span>Follow Facebook</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright: Kaos Trading Club
      </div>
    </footer>
  );
}
