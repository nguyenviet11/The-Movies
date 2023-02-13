import React from "react";

const Recommendations = ({ movieSimilar }) => {
  return (
    <div className="MovieCast__recommendations">
      {movieSimilar?.map((e) => (
        <div className="MovieCast__recommendations-item" key={e.id}>
          <div className="MovieCast__recommendations-item__image">
            {e.backdrop_path === null ? (
              <img
                src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg
              "
                alt=""
              />
            ) : (
              <img
                src={`https://www.themoviedb.org/t/p/w250_and_h141_face/${e.backdrop_path}`}
                alt=""
              />
            )}

            <div className="item__date">
              <i class="fa-solid fa-calendar-days"></i>
              {e.release_date}
            </div>
          </div>
          <div className="MovieCast__recommendations-item__title">
            <a href="/">{e.title}</a>
            <span>{(e.vote_average * 10).toFixed()}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommendations;
