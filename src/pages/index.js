import React, { useState } from "react";
import HeroSection from "../component/HeroSection";
import InfoSection from "../component/InfoSection";
import Services from "../component/ServicesSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
} from "../component/InfoSection/Data";
import Navbar from "../component/Navbar";
import Sidebar from "../component/Sidebar";

const Home = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} /> <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} /> 
      <InfoSection {...homeObjTwo} />
      <Services {...homeObjThree} /> 
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
