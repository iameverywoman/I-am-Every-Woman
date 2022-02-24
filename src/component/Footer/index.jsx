/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <div class="footer-basic">
      <footer>
        <div class="social">
          <a
            href="https://discord.gg/k6h6qmM6gU"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-discord"></i>
          </a>
          <a
            href="https://twitter.com/xthugbirdz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-twitter"></i>
          </a>
        </div>

        <p class="copyright">XThugBirdz © 2022</p>
      </footer>
    </div>
  );
}
