import React from "react";
import Enterprise from "./Enterprise";
import AboutCompany from "./AboutCompany";
import Hero from "./Hero";
import Industry from "./Industry";
import Perks from "./Perks";
import ContactUs from "./ContactUs";
import ClientsReviews from "./ClientsReviews";

const Home = () => {
  return (
    <>
      <Hero />
      <ContactUs />
      <ClientsReviews />
      <Enterprise />
      <AboutCompany />
      <Industry />
      <Perks />
    </>
  );
};

export default Home;
