/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";
import Logo from "../../assets/images/logo.png";
import App from "../../App";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <div className="container">
          <img src={Logo} alt="logo" className="img-fluid" width="50px" />
          {/* <h1>I am Every Woman</h1> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="">
              <i className="fa-solid fa-bars" style={{ color: "red" }}></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">
              <a className="nav-link font-weight-bolder text-light" href="#">
                Home
              </a>
              <a
                className="nav-link font-weight-bolder text-light"
                href="#about"
              >
                About
              </a>
              <a className="nav-link font-weight-bolder text-light" href="#vid">
                Promotion
              </a>
              <a className="nav-link font-weight-bolder text-light" href="#faq">
                Faq
              </a>
              <a
                className="nav-link font-weight-bolder text-light"
                href="https://www.instagram.com/imeverywomannft/"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                className="nav-link font-weight-bolder text-light"
                href="https://discord.gg/nq5zZ8DD"
              >
                <i class="fab fa-discord"></i>
              </a>
              <a
                className="nav-link font-weight-bolder text-light"
                href="https://twitter.com/Imeverywomannft"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center" data-aos="zoom-in">
              {/* <img src={Logo} alt="logo" className="img-fluid w-50" /> */}
              <h1>
                I am <span style={{ color: "#f6037f" }}>Every Woman</span>
              </h1>
              <p className="text-center">This was made by Amber Billionaire.</p>

              {/* countdown */}
              <div className="countdown row justify-content-md-center">
                <div className="launch-time my-3">
                  <div className="countdown-card">
                    <p id="days">00</p>
                    <span>Days</span>
                  </div>
                  <div className="countdown-card ml-3">
                    <p id="hours">00</p>
                    <span>Hours</span>
                  </div>
                  <div className="countdown-card ml-3">
                    <p id="minutes">00</p>
                    <span>Minutes</span>
                  </div>
                  <div className="countdown-card ml-3">
                    <p id="seconds">00</p>
                    <span>Seconds</span>
                  </div>
                </div>
              </div>
              <h4 className="countdown-title">Public Sale Countdown</h4>
              <div className="mint-btn">
                <App />
              </div>
            </div>
          </div>
        </div>
        {/* svg */}
        <div class="custom-shape-divider-bottom-1647825201">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </header>
    </>
  );
}
