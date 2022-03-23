import React from "react";
import Header from "../Header";
import About from "../About";
import Explore from "../Explore";
import Footer from "../Footer";
import Vid from "../Vid";
import Discord from "../Discord";
import Faq from "../Faq";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Vid />
      <Explore />
      <Discord />
      <Faq />
      <Footer />
    </>
  );
}
