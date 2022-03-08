/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

export default function Join() {
  return (
    <section className="join container-fluid my-2">
      <div className="container py-5">
        <h1 className="t-shadow">Benefits of joining our Club</h1>
        <br />
        <p>Every Cute Otter owner will recive:</p>

        <ol>
          <li class="">
            <span>
              Reward system - from 0.2 SOL to 2.0 SOL back on your purchase for
              every NFT you buy
            </span>
          </li>
          <li class="">
            <span>
              Trading Lieutentant – crypto trading assitant for passive income
              with crypto
            </span>
          </li>
          <li class="">
            <span>
              NFT Analyser – to evaluate NFT project and make a big profit
            </span>
          </li>
          <li class="">
            <span>Join Metaverse – enter the Metaverse with the Club.</span>
          </li>
        </ol>

        <br />
        <a href="https://discord.com/invite/ABDmmEtUKX" target="_blank">
          <button className="button-53">Join Discord</button>
        </a>
      </div>
    </section>
  );
}
