import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListUl,
  faHeart,
  faBookmark,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import Modal from "./videoModal";

const Pie = ({ percent }) => (
  <div className="pie animate" style={{ "--p": percent, "--c": "#21D07A" }}>
    {percent}%
  </div>
);

const PieContainer = ({ percent }) => (
  <div className="Actions__chart-details">
    <Pie percent={percent} />
  </div>
);

const ChartText = () => (
  <div className="Actions__chart-text">
    User
    <br />
    Score
  </div>
);

const Icon = ({ icon }) => (
  <li className="Actions__chart icon">
    <FontAwesomeIcon icon={icon} />
  </li>
);

const DetailMovieActions = ({ data, dataTrailer }) => (
  <ul className="DetailMovie__page-container__actions">
    <li className="Actions__chart">
      <PieContainer percent={(data?.vote_average * 10).toFixed()} />
      <ChartText />
    </li>
    <Icon icon={faListUl} />
    <Icon icon={faHeart} />
    <Icon icon={faBookmark} />
    <Icon icon={faStar} />

    <Modal dataTrailer={dataTrailer} />
  </ul>
);

export default DetailMovieActions;
