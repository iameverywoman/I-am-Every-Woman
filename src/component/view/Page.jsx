import React from "react";
import Header from "../Header";
import About from "../About";
import Roadmap from "../Roadmap";
import Faq from "../Faq";
import Footer from "../Footer";
import Team from "../Team";
import Join from "../Join";

export default function Page() {
  return (
    <>
      <Header />
      <About />
      <Join />
      <Roadmap />
      <Faq />
      <Team />
      <Footer />
      <div className="bg"></div>
    </>
  );
}
