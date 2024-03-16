import React from "react";
import CommunityBanner from "../CommunityBanner/CommunityBanner";
import AboutCommunity from "../AboutCommunity/AboutCommunity";
import EventArea from "../EventArea/EventArea";
import ProjectArea from "../ProjectArea/ProjectArea";
import LatestUpdate from "../../Home/LatestUpdate/LatestUpdate";

const Community = () => {
  return (
    <div>
      <CommunityBanner />
      <AboutCommunity />
      <EventArea />
      <ProjectArea />
      <LatestUpdate />
    </div>
  );
};

export default Community;
