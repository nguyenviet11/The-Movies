import React, { useEffect, useRef, useState } from "react";
import TabUi from "./TabUi";
import "./TabUi.scss";

const TabUiMedia = () => {
  let TabsName = "Media";
  const [currentTab, setCurrentTab] = useState("tab1");

  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);
  };

  const tabs = [
    {
      name: "tab1",
      title: "Most Popular",
      content: <p>This is the content of Tab 1</p>,
    },
    {
      name: "tab2",
      title: "Videos",
      quantity: 1,
      content: <p>This is the content of Tab 2</p>,
    },
    {
      name: "tab3",
      title: "Backdrops",
      quantity: 42,
      content: <p>This is the content of Tab 3</p>,
    },
    {
      name: "tab4",
      title: "Posters",
      quantity: 10,
      content: <p>This is the content of Tab 4</p>,
    },
  ];

  return (
    <div className="container">
      <TabUi
        TabsName={TabsName}
        tabs={tabs}
        currentTab={currentTab}
        handleTabChange={handleTabChange}
      />
    </div>
  );
};

export default TabUiMedia;
