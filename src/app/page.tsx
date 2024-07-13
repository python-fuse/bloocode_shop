import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TopProducts from "@/components/TopProducts";
import React from "react";

const page = () => {
  // Main application rendering all our components

  return (
    <>
      <Header />
      <Hero />
      <TopProducts />
      <Footer />
    </>
  );
};

export default page;
