import React from "react";
import Header from "../Header";
import About from "../About";
import Rarity from "../Rarity";
import Roadmap from "../Roadmap";
import Faq from "../Faq";
import Footer from "../Footer";

export default function Page() {
  return (
    <>
      <Header />
      <About />
      <Rarity />
      <Roadmap />
      <Faq />
      <Footer />
      <div className="bg"></div>
    </>
  );
}
