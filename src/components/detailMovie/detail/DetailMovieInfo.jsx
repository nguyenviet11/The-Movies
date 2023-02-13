import React from "react";

const DetailMovieInfo = ({ tagline, overview, infoPeople }) => {
  return (
    <div className="DetailMovie__page-container__info">
      <h3 className="info__tagline">{tagline}</h3>
      <h3>Overview</h3>
      <div className="info__overview">
        <p>{overview}</p>
      </div>
      <ul className="info__people">
        {infoPeople.map((e) => (
          <li className="info__people-profile" key={e.id}>
            <a href="/">{e.name}</a>
            <p>{e.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailMovieInfo;
