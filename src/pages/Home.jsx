import React from "react";
import { Hero, About, HowToBuy, Tokenomics, Roadmap, Contact } from "../components";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <HowToBuy/>
      <Tokenomics/>
      <Roadmap/>
      <Contact/>
    </React.Fragment>
  );
};

export default Home;
