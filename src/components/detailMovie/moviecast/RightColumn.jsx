import React from "react";

const leaders = [
  {
    id: 1,
    score: 42,
    name: "Jco_15",
    avatar:
      "https://www.gravatar.com/avatar/a4ce4464842d22406ecad1288bb6e1ba.jpg?s=45",
  },
  {
    id: 2,
    score: 40,
    name: "Seanliu",
    avatar:
      "https://www.themoviedb.org/t/p/w45_and_h45_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg",
  },
  {
    id: 3,
    score: 39,
    name: "MovieMadMatt",
    avatar:
      "https://www.gravatar.com/avatar/a4ce4464842d22406ecad1288bb6e1ba.jpg?s=45",
  },
  {
    id: 4,
    score: 38,
    name: "Seanliu",
    avatar:
      "https://www.themoviedb.org/t/p/w45_and_h45_face/yYG7Rhn9HfFpssIMeNiDynvxC14.jpg",
  },
];

const RightColumn = ({ data, dataKeywords }) => {
  return (
    <div className="right__column">
      <section className="facts">
        <div className="social__links">
          <i class="fa-brands fa-square-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram link"></i>
          <i class="fa-solid fa-link"></i>
        </div>

        <p className="wrap">
          <strong>Original Title</strong>
          {data?.original_title}
        </p>
        <p className="wrap">
          <strong>Status</strong>
          {data?.status}
        </p>
        <p className="wrap">
          <strong>Original Language</strong>
          Tiếng Anh
        </p>
        <p className="wrap">
          <strong>Budget</strong>
          {data?.budget === 0
            ? `-`
            : `$${data?.budget.toLocaleString("en-US")}`}
        </p>
        <p className="wrap">
          <strong>Revenue</strong>
          {data?.revenue === 0
            ? `-`
            : `$${data?.revenue.toLocaleString("en-US")}`}
        </p>
      </section>
      <section className="keywords">
        <h4>Keywords</h4>
        <ul className="keywords__List">
          {dataKeywords?.map((e) => (
            <li key={e.id}>
              <a href="/">{e.name}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className="content__score">
        <h4>Content Score</h4>
        <div className="score">100</div>
        <p>Yes! Looking good!</p>
      </section>
      <section className="leaderboard">
        <h4>Top Contributors</h4>
        <div className="leaders">
          {leaders.map((e) => (
            <div className="leaders__item" key={e.id}>
              <img src={e.avatar} alt="" />
              <div className="leaders__item-info">
                <p class="edit_count">{e.score}</p>
                <a href="/">{e.name}</a>
              </div>
            </div>
          ))}
        </div>
        <a href="/" className="leadersView">
          View Edit History
        </a>
      </section>
      <section className="popularity_trend">
        <h4>Popularity Trend</h4>
        <div>
          <span style={{ width: 203, height: 50, display: "block" }}>
            <svg
              style={{
                width: "100%",
                height: "100%",
                overflow: "hidden",
                left: " 0px",
                top: "-0.550018px",
              }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
            >
              <defs />
              <g>
                <path d="M0 0 L 203 0 203 50 0 50Z" stroke="none" fill="none" />
                <path
                  d="M2 3 L 200 3 200 48 2 48Z"
                  stroke="none"
                  fill="#fff"
                  fillOpacity="0"
                />
                <g>
                  <g />
                  <g />
                  <g>
                    <path
                      style={{ display: "none" }}
                      d="M44.429 3 L 44.429 48"
                      stroke="#8e8e8e"
                      strokeWidth="2"
                      fill="none"
                    />
                  </g>
                  <g />
                  <g>
                    <g>
                      <path
                        d="M16.143 17.063 L 44.429 22.688 72.714 33.938 101 45.188 129.286 36.75 157.571 39.563 185.857 31.125"
                        stroke="#20200b"
                        strokeWidth="2"
                        fill="none"
                      />
                    </g>
                  </g>
                </g>
                <g />
              </g>
            </svg>
          </span>
        </div>
      </section>

      <div className="btn__login">
        <a href="/">
          <i class="fa-solid fa-lock"></i>
          Login to edit
        </a>
      </div>
      <div className="keyboard__shortcut">
        <a href="/">
          <i class="fa-solid fa-keyboard"></i>
          Keyboard Shortcuts
        </a>
      </div>
      <div className="report__issue">
        <a href="/">
          <i class="fa-solid fa-circle-exclamation"></i>
          Login to report an issue
        </a>
      </div>
    </div>
  );
};

export default RightColumn;
