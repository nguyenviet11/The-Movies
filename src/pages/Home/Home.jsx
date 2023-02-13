/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import tmdbApi, { movieType } from "../../api/tmdbApi";
const Home = () => {
  const [listMovie, setListMovie] = useState([]);
  const [currentType, setCurrentType] = useState(movieType.top_rated);

  const getListMovie = async () => {
    const res = await tmdbApi.getMoviesList(currentType);
    setListMovie(res.results);
  };

  useEffect(() => {
    getListMovie();
  }, []);
  console.log(listMovie);

  return (
    <>
      {listMovie?.map((movie) => (
        <div key={movie?.id} style={{ cursor: "pointer" }}>
          <Link to={`/detail/${movie?.id}`}>{movie?.title}</Link>
        </div>
      ))}
    </>
  );
};

export default Home;
