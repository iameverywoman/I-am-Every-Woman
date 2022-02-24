import React from "react";
import "./style.css";

export default function Roadmap() {
  return (
    <section id="roadmap" className="roadmap">
      <div
        className="container py-5"
        style={{ borderBottom: "1px solid white" }}
      >
        <h1>Roadmap</h1>
        <div className="q1">
          <p className="roadmap-tittle">Q1 2022</p>
          <ul>
            <li>Website launch</li>
            <li>Socials (Twitter, Discord, etc)</li>
            <li>Expansion ThugBirdz NFT launch</li>
            <li>Rarity Sniper listing </li>
            <li>Secondary marketplaces</li>
            <li>Team AMA</li>
            <li> Airdrops and giveaways</li>
            <li>Collaborations</li>
            <li>Phase I marketing</li>
          </ul>
        </div>
        <div className="q2">
          <p className="roadmap-tittle">Q2 2022</p>
          <ul>
            <li>xThugBirdz governance token launch</li>
            <li>Token airdrop to holders</li>
            <li>xThugBirdz Mansion Development</li>
            <li>Top-tier partnerships </li>
            <li>Community events</li>
            <li>More giveaways</li>
            <li>Phase II marketing</li>
          </ul>
        </div>
        <div className="q3">
          <p className="roadmap-tittle">Q3 2022</p>
          <ul>
            <li>xThugBirdz merchandise</li>
            <li>xThugBirdz Mansion live</li>
            <li>Brand ambassador</li>
            <li>Play-to-earn game development</li>
            <li>More collaborations</li>
            <li>Phase III marketing</li>
          </ul>
        </div>
        <div className="q4">
          <p className="roadmap-tittle">Q4 2022</p>
          <ul>
            <li>Play-to-earn game deployment</li>
            <li>xThugBirdz Mansion expansion</li>
            <li>xThugBirdz token airdrop</li>
            <li>xThugBirdz.org established</li>
            <li>Token exchange listings</li>
            <li>Phase III marketing push, continued</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
