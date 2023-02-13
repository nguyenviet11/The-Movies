import React from "react";

const TabUi = ({ tabs, currentTab, handleTabChange, TabsName }) => {
  return (
    <div className="tab__ui">
      <ul className="tabs">
        <h3 className="MovieCast__title">{TabsName}</h3>
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`tab-item ${currentTab === tab.name ? "active" : ""}`}
            onClick={() => handleTabChange(tab.name)}
          >
            {tab.title}
            <span>{tab.quantity}</span>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div key={index}>{currentTab === tab.name ? tab.content : null}</div>
        ))}
      </div>
    </div>
  );
};

export default TabUi;
