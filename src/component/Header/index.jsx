/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import App from "../../App";
import "./style.css";
import Logo from "../../assets/images/logo.png";
import Gif from "../../assets/images/gif.gif";
import App from "../../App";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top ">
        <div className="container">
          <img src={Logo} alt="logo" className="img-fluid" width="50px" />
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
              <a
                className="nav-link font-weight-bolder text-light"
                href="#roadmap"
              >
                Roadmap
              </a>
              <a className="nav-link font-weight-bolder text-light" href="#faq">
                Faq
              </a>
              <a
                className="nav-link font-weight-bolder text-light"
                href="#rarity"
              >
                Rarity
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-6 left">
              <h1 className="fw-light t-shadow text-uppercase">
                Expansion ThugBirdz
              </h1>
              <p className="lead text-justify desc">
                Expansion ThugBirdz are a collection of 3,333 uniquely generated
                NFTs on the #Solana blockchain
              </p>
              <App />
            </div>
            <div className="col-md-6">
              <img
                src={Gif}
                alt="gif"
                className="img-fluid gif rounded-circle ml-auto d-block"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
