import React from "react";
import HeroSection from "./components/HeroSection";
import ContactInfo from "./components/ContactInfo";
import MapEmbed from "./components/MapEmbed";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <HeroSection />
      <ContactInfo />
      <MapEmbed />
      <Footer />
    </>
  );
};

export default App;
