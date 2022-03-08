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
            <span>Grilled Flatfish With Pistachio-Herb Sauce</span>
          </li>
          <li class="">
            <span>Coconut Cod Chowder With Seasoned Oyster Crackers</span>
          </li>
          <li class="">
            <span>Tamarind-Glazed Black Bass With Coconut-Herb Salad</span>
          </li>
          <li class="">
            <span>Spicy Sweet-and-Sour Salmon With Dates</span>
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
