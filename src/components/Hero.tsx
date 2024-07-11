import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="hero p-3 flex flex-col place-content-center  h-[350px]">
      <h2 className="text-4xl lg:text-8xl md:text-7xl text-link">
        Get 10% off
      </h2>
      <p className="text-3xl ml-2 text-link">Everything</p>
    </div>
  );
};

export default Hero;
