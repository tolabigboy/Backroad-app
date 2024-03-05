import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
};

export default App;
