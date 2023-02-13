import React, { useEffect, useState } from "react";

import MovieCast from "./MovieCast";
import Recommendations from "./Recommendations";
import TabUiSocial from "./tabui/TabUiSocial";
import TabUiMedia from "./tabui/TabUiMedia";

const LeftColumn = ({ moviecast, movieSimilar, nameMovie }) => {
  return (
    <div className="left__column">
      <section className="panel top_billed">
        <h3 className="MovieCast__title">Series Cast</h3>
        <MovieCast moviecast={moviecast} />
        <p className="MovieCast__button">Full Cast & Crew</p>
      </section>
      <section className="panel season">
        <h3 className="MovieCast__title">Current Season</h3>
        <div className="MovieCast__season">
          <a className="MovieCast__season-image" href="/">
            <img
              src="https://www.themoviedb.org/t/p/w130_and_h195_bestv2/aUQKIpZZ31KWbpdHMCmaV76u78T.jpg"
              alt=""
            />
          </a>
          <div className="MovieCast__season-content">
            <div>
              <h2>Season 1</h2>
              <h4>2023 | 9 Episodes</h4>
              <p>
                Season 1 of Những Người Còn Sót Lại premiered on January 15,
                2023.
              </p>
            </div>
          </div>
        </div>
        <p className="MovieCast__button">View All Seasons</p>
      </section>

      <section className="panel">
        <div className="review">
          <TabUiSocial nameMovie={nameMovie} />
        </div>

        <p className="MovieCast__button">Go to Discussions</p>
      </section>

      <section className="panel season">
        <div className="review">
          <TabUiMedia />
        </div>
        <div className="MovieCast__season"></div>
      </section>

      <section className="panel recommendations">
        <h3 className="MovieCast__title">Recommendations</h3>
        <Recommendations movieSimilar={movieSimilar} />
      </section>
    </div>
  );
};

export default LeftColumn;
