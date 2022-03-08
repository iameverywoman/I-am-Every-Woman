import React from "react";
import "./style.css";

export default function Faq() {
  return (
    <section id="faq" className="faq">
      <div
        className="container py-5"
        style={{ borderBottom: "1px solid white" }}
      >
        <h1 className="t-shadow ">Frequently Asked Questions</h1>
        <div className="row mt-5">
          <div className="col-md-12  mt-3">
            <div className="card-faq p-3">
              <h4>WHAT IS CUTE OTTERS CLUB?</h4>
              <p>
                It is NFT collection with 5555 Cute Otters on the Solana
                Blockchain. Every NFT gives you rewards for owning (From 0.2 SOL
                to 2.0 SOL back on every purchase). Our NFTs will be used in
                Metaverse in end of the year 2022. There are also no gas fees.
              </p>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="card-faq p-3">
              {" "}
              <h4>HOW CAN I BECOME A CUTE OTTER OWNER ?</h4>
              <p>
                Get one of the 5555 Cute Otters on the Solana Blockchain and
                join the Club.
              </p>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="card-faq p-3">
              <h4>WHAT DOES "MINT" MEAN?</h4>
              <p>
                Minting a Cute Otter NFT means that you’re buying a numeric
                piece of art that becomes part of the Solana Blockchain. Your
                piece of art is represented as a NFT, it can therefore be
                exchanged on the market and traced digitally.
              </p>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="card-faq p-3">
              <h4>WHICH BLOCKCHAIN IS CUTE OTTERS CLUB ON?</h4>
              <p>The Solana blockchain. That means there is no gas fees!</p>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="card-faq p-3">
              <h4>WHAT DOES "MINT" MEAN?</h4>
              <p>
                Minting a Cute Otter NFT means that you’re buying a numeric
                piece of art that becomes part of the Solana Blockchain. Your
                piece of art is represented as a NFT, it can therefore be
                exchanged on the market and traced digitally.
              </p>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="card-faq p-3">
              <h4>WHAT WILL BE THE PRICE OF THE MINT?</h4>
              <p>Price will be 2.0 SOL</p>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="card-faq p-3">
              <h4>WHAT’S THE MINT DATE?</h4>
              <p>Presale mint is on 30th March at 2PM EST.</p>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="card-faq p-3">
              <h4>
                WHAT WILL BE THE PRICE OF THE MINT?WHY ARE CUTE OTTER NFTS 100%
                SAFE?
              </h4>
              <p>
                Our smart contract is open source, audited and secured by a
                trusted team of professionals. To go beyond with security, every
                member of our team is identity verified via civic.com
              </p>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="card-faq p-3">
              <h4>HOW CAN I AVOID GETTING SCAMMED?</h4>
              <p>
                To limit risks, make sure to only follow our official Discord,
                Twitter & Instagram. WE WILL NEVER DIRECTLY SEND YOU A PRIVATE
                MESSAGE. For more info on security, check out the
                scam-prevention channel on our Discord server.
              </p>
            </div>
          </div>
          <div className="col-md-12 mt-3">
            <div className="card-faq p-3">
              <h4>WHAT’S THE METAVERSE?</h4>
              <p>
                Metaverse refers to a shared virtual experience where terrains,
                avatars and names can be bought and sold, often using
                cryptocurrency. Bored Cat will allow you to join the Metaverse
                using your asset as an avatar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
