/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import App from "../../App";
import "./style.css";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <h3>War Of Kaos</h3>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
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
                href="#team"
              >
                Team
              </a>
            </div>
          </div>
        </div>
      </nav>

      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-md-6 col-12">
              <h1 className="fw-light t-shadow">Welcome to</h1>
              <h1 className="fw-light t-shadow">War Of Kaos</h1>
              <p className="lead text-justify desc">
                First NFT collection focused on the decentralization of E-SPORTS
                under the SOLANA network We plan to build our own PROFESSIONAL
                TEAM and compete in games like League of Legends, Warzone,
                Valory, Free Fire.
              </p>
              <App />
            </div>
          </div>
        </div>
      </header>

      {/* <section className="py-5">
        <div className="container">
          <h2 className="fw-light">Page Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus ab nulla dolorum autem nisi officiis blanditiis
            voluptatem hic, assumenda aspernatur facere ipsam nemo ratione
            cumque magnam enim fugiat reprehenderit expedita.
          </p>
        </div>
      </section> */}
    </>
  );
}
