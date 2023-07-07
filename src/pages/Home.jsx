import React from "react";
import { Hero, About, HowToBuy } from "../components";

const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <HowToBuy/>
    </React.Fragment>
  );
};

export default Home;
