
"use client";
import { useState } from "react";
import { tabs, technologyIconsMap } from "../Development/Developmentapi"; 
import Card from "../Development/Card";

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].id);
  const [zoomedTab, setZoomedTab] = useState(null);
  const [currentTechnologyIcons, setCurrentTechnologyIcons] = useState(technologyIconsMap[selectedTab]);

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
    setZoomedTab(tabId);
    setCurrentTechnologyIcons(technologyIconsMap[tabId]);
    setTimeout(() => setZoomedTab(null), 300);
  };

  return (
    <Card 
      selectedTab={selectedTab} 
      handleTabClick={handleTabClick} 
      zoomedTab={zoomedTab} 
      currentTechnologyIcons={currentTechnologyIcons} 
    />
  );
};

export default TabComponent;
