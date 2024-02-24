import React from "react";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Home,
} from "./components";

const HomePage = () => {
  return (
    <>
      <Navbar links={true} />
      <div className="relative z-0 bg-primary">
        <div className=" bg-cover bg-no-repeat bg-center">
          <Home />
        </div>
        <About />
        {/* <Experience /> */}
        {/* <Tech /> */}
        <Works />
        <Hero />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  );
};

export default HomePage;
