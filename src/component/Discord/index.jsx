/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.css";

export default function Discord() {
  return (
    <section className="message text-center" id="discord">
      <h4 className="headline mb-4">Join the Community</h4>
      <p className="sub-headline text-center">
        Follow our Twitter and Discord for more The Guy On The Couch
        announcements
      </p>
      <div>
        <a href="https://discord.gg/NHjDtm7N" className="mt-3">
          <div className="button_slide slide_down mx-3">Discord</div>
        </a>
        <a href="https://twitter.com/Imeverywomannft" className="mt-3">
          <div className="button_slide slide_down mx-3">Twitter</div>
        </a>
        <a href="https://www.instagram.com/imeverywomannft/" className="mt-3">
          <div className="button_slide slide_down mx-3">Instagram</div>
        </a>
      </div>
    </section>
  );
}
