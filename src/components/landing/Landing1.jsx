import Hero from "components/Hero";
import Pricing from "components/Pricing";
import FacebookCard from "components/card/FacebookCard";
import InstagramCard from "components/card/InstagramCard";
import TwitterCard from "components/card/TwitterCard";
import React from "react";

const Landing1 = () => {
  return (
    <div >
      <Hero />
      <div className="  flex flex-wrap gap-10 ">
        <InstagramCard />
        <FacebookCard />
        <TwitterCard />
      </div>
      <Pricing />
    </div>
  );
};

export default Landing1;
