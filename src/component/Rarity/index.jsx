import React from "react";
import "./style.css";

export default function Rarity() {
  return (
    <section className="rarity" id="rarity">
      <div className="container">
        <h1 className="fw-light t-shadow text-center mb-5">Rarity</h1>
        <div className="row">
          <div>
            <button id="btn-bg" className="btn-rarity">
              Backgrounds 
            </button>
            <button id="btn-clothes" className="btn-rarity">
              Clothes
            </button>
            <button id="btn-head" className="btn-rarity">
              Head
            </button>
            <button id="btn-mouth" className="btn-rarity">
              Mouth
            </button>
            <button id="btn-eyes" className="btn-rarity">
              Eyes
            </button>
          </div>
          <div id="content">
            <p className="txt" style={{ display: "none" }}>
              TXT Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur, odio pariatur quam nostrum eos deleniti maiores rerum
              neque obcaecati similique est quae illo nihil fugiat enim eligendi
              ullam possimus labore?
            </p>
            <p className="html">
              HTML Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur, odio pariatur quam nostrum eos deleniti maiores rerum
              neque obcaecati similique est quae illo nihil fugiat enim eligendi
              ullam possimus labore?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
