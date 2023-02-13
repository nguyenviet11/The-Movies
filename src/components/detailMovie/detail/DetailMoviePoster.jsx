import React from "react";

const DetailMoviePoster = ({ poster }) => {
  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  const toYears = (totalYears) => {
    const date = new Date(totalYears);
    return date.getFullYear();
  };

  console.log(toYears(poster?.release_date));

  return (
    <div className="DetailMovie__page-container__poster">
      <div className="DetailMovie__page-container__poster-title">
        <h2>
          <a href="/">{poster?.title}</a>
          <span>({toYears(poster?.release_date)})</span>
        </h2>
      </div>
      <div className="DetailMovie__page-container__poster-facts">
        <span className="Facts__certification">TV-MA</span>
        <span className="Facts__date">{poster?.release_date}</span>
        {poster?.production_countries.map((e, index) => (
          <span key={index} className=" Facts__countries">
            ({e.iso_3166_1})
          </span>
        ))}
        <span className="Facts__genres">
          {poster?.genres.map((e) => (
            <a href="/" key={e.id}>
              {e.name}
              ,&nbsp;
            </a>
          ))}
        </span>
        <span className="Facts__runtime">
          {toHoursAndMinutes(poster?.runtime)}
        </span>
      </div>
    </div>
  );
};

export default DetailMoviePoster;
