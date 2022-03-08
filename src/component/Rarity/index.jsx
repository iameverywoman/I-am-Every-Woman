/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./style.css";
import RarityImg from "../../assets/images/rarity.jpeg";

export default function Rarity() {
  return (
    <section className="rarity" id="rarity">
      <div
        className="container py-5"
        style={{ borderBottom: "1px solid white" }}
      >
        <div className="row">
          <div className="col-md-6">
            <h1 className="t-shadow">RARITY CHART</h1>
            <p>
              If you want to analyze rarest traits by looking at the pictures,
              our rarity chart may be exactly what you are looking for.
            </p>
            <h4 className="t-shadow">EXTRAORDINARY ITEMS FOR CUTE OTTERS</h4>
            <p>
              It's easy to find the rarest pieces on this chart, which is filled
              with more than 180 creative traits.
            </p>
            <h4 className="t-shadow">MYTHIC, LEGENDARY, EPIC ?</h4>
            <p>
              Traits under the Mythic, Legendary, Epic, Rare categories can be
              considered as the rarest items in the collection.
            </p>
          </div>

          <div className="col-md-6">
            <img
              id="myImg"
              src={RarityImg}
              alt="Rarity Chart"
              class="img-fluid rarity-img"
            />
          </div>
        </div>
      </div>
      <div id="myModal" class="modal">
        <span class="close">
          <i
            class="fa fa-close"
            aria-hidden="true"
            style={{ color: "red !important" }}
          ></i>
        </span>
        <img class="modal-content" id="img01" />
        <div id="caption"></div>
      </div>
    </section>
  );
}
