import axios from "axios";
import React, { useEffect, useState } from "react";
import DetailMovieActions from "../../components/detailMovie/detail/DetailMovieActions";
import DetailMovieInfo from "../../components/detailMovie/detail/DetailMovieInfo";
import DetailMoviePoster from "../../components/detailMovie/detail/DetailMoviePoster";
import LeftColumn from "../../components/detailMovie/moviecast/LeftColumn";
import RightColumn from "../../components/detailMovie/moviecast/RightColumn";

// import "./TabUi.scss";
import "./DetailMovie.scss";

const infoPeople = [
  {
    id: 1,
    name: "Joel Crawford",
    character: "Director",
  },
  {
    id: 2,
    name: "Paul Fisher",
    character: "Screenplay",
  },
  {
    id: 3,
    name: "Tom Wheeler",
    character: "Story",
  },
  {
    id: 4,
    name: "Tommy Swerdlow",
    character: "Screenplay, Story",
  },
];

const Detail = ({ id }) => {
  const [data, setData] = useState(null);
  const [dataCast, setDataCast] = useState(null);
  const [dataSimilar, setDataSimilar] = useState(null);
  const [dataKeywords, setDataKeywords] = useState(null);
  const [dataTrailer, setDataTrailer] = useState(null);

  // const id = "505642";
  const API_KEY = "a44cced0c76f16a355dbd9e71afd5ed6";

  const getData = async () => {
    const [response1, response2, response3, response4, response5] =
      await Promise.all([
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}/casts?api_key=${API_KEY}`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}/keywords?api_key=${API_KEY}`
        ),
        axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
        ),
      ]);
    setData(response1.data);
    setDataCast(response2.data.cast);
    setDataSimilar(response3.data.results);
    setDataKeywords(response4.data.keywords);
    setDataTrailer(response5.data.results);
  };

  useEffect(() => {
    getData();
  }, [id]);
  return (
    <div className="Detail">
      <div
        className="DetailMovie"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
        }}
      >
        <div className="DetailMovie__page">
          <div className="DetailMovie__page-container">
            <div className="DetailMovie__page-container__image">
              <img
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${data?.poster_path}`}
                alt=""
              />
            </div>
            <div className="Center__row">
              <DetailMoviePoster poster={data} />

              <DetailMovieActions data={data} dataTrailer={dataTrailer} />

              <DetailMovieInfo
                tagline={data?.tagline}
                overview={data?.overview}
                infoPeople={infoPeople}
                // infoPeople={data}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="MovieCast">
        <div className="MovieCast__wrapper">
          <LeftColumn
            moviecast={dataCast}
            movieSimilar={dataSimilar}
            nameMovie={data?.title}
          />
          <RightColumn data={data} dataKeywords={dataKeywords} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
