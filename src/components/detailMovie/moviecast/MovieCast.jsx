import React from "react";

const MovieCast = ({ moviecast }) => {
  return (
    <div className="MovieCast__list">
      {moviecast?.map((e) => (
        <div className="MovieCast__list-item" key={e.id}>
          {e.profile_path === null ? (
            <img
              src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
              alt=""
            />
          ) : (
            <img
              src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${e.profile_path}`}
              alt=""
            />
          )}

          <div className="MovieCast__list-item__detail">
            <h3 className="MovieCast__list-item__detail-name">{e.name}</h3>
            <p className="MovieCast__list-item__detail-character">
              {e.character}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieCast;
