/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <a href="https://discord.gg/fpCaWbEum9">
            <i className="fab fa-discord"></i>
          </a>
          <a href="https://twitter.com/JaguarClubNFT">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">Jaguar Club © 2022</p>
      </footer>
    </div>
  );
}
