import React, { useState, useEffect, useRef } from "react";
import TabUi from "./TabUi";
import "./TabUi.scss";

const discussions = [
  {
    id: 1,
    image:
      "https://www.themoviedb.org/t/p/w45_and_h45_face/r8eoIZtYZMoij1gTxwjK5pSm2NR.jpg",
    question: "Sequel snubbed at the Oscars 2023?",
    status: "open",
    number: "1",
    date: "Jan 25, 2023 at 2:12 PM",
    username: "wonder2wonder",
  },
  {
    id: 2,
    image:
      "https://www.themoviedb.org/t/p/w45_and_h45_face/40dKM5CIa8iu5rHaFZTGvQfYanW.jpg",
    question: "Box office Friday premiere: M3GAN beats Avatar 2",
    status: "open",
    number: "2",
    date: "Feb 08, 2023 at 4:37 AM",
    username: "Bubbathegut",
  },
];

const TabUiSocial = ({ nameMovie }) => {
  let TabsName = "Social";

  const [currentTab, setCurrentTab] = useState("tab2");

  const handleTabChange = (tabName) => {
    setCurrentTab(tabName);
  };

  const tabs = [
    {
      name: "tab1",
      title: "Reviews",
      quantity: 0,
      content: <p>We don't have any reviews for {nameMovie}.</p>,
    },
    {
      name: "tab2",
      title: " Discussions",
      quantity: 2,
      content: (
        <div className="discussions">
          {discussions.map((e) => (
            <div className="discussions__item" key={e.id}>
              <div className="discussions__item-info">
                <img src={e.image} alt="" />
                <a href="/">{e.question}</a>
              </div>
              <div className="discussions__item-status">
                <p>{e.status}</p>
              </div>
              <div className="discussions__item-">
                <p>{e.number}</p>
              </div>
              <div className="discussions__item-last">
                <p>
                  {e.date}
                  <br />
                  by <a href="/">{e.username}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
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

export default TabUiSocial;
