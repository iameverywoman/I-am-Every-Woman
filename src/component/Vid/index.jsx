import React from "react";
import "./style.css";
import Promotion from "../../assets/images/promo.mp4";

export default function Vid() {
  return (
    <section class="vid" id="vid">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <h1 className="mt-5 text-center">
              I am <span style={{ color: "#f6037f" }}>Every Woman</span>
            </h1>
            <video src={Promotion} controls className="my-5"></video>
          </div>
        </div>
      </div>
    </section>
  );
}
