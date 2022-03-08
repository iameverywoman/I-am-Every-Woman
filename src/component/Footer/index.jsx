/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div class="footer-basic">
      <footer>
        <div class="social">
          <a
            href="https://discord.com/invite/PHNnh5ZP"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-discord"></i>
          </a>
          <a
            href="https://twitter.com/NFTOttersClub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </div>

        <p class="copyright">Cute Otters Club Story © 2022</p>
      </footer>
    </div>
  );
}
