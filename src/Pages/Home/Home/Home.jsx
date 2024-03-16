import React from "react";
import Banner from "../Banner/Banner";
import CommunityCard from "../CommunityCard/CommunityCard";
import ClimateArea from "../ClimateArea/ClimateArea";
import MainArea from "../MainArea/MainArea";
import Platform from "../Platform/Platform";
import Ecosystem from "../Ecosystem/Ecosystem";
import GrowthSection from "../GrowthSection/GrowthSection";
import Building from "../Building/Building";
import LatestUpdate from "../LatestUpdate/LatestUpdate";

const Home = () => {
  return (
    <div>
      <Banner />
      <CommunityCard />
      <ClimateArea />
      <MainArea />
      <Platform />
      <Ecosystem />
      <GrowthSection />
      <Building />
      <LatestUpdate />
    </div>
  );
};

export default Home;
