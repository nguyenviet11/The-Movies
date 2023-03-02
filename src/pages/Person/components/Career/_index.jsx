import { useCallback, useContext, useState } from 'react';
import { PersonContext } from '../../Person';
import './../../Person.scss';
import {
  handleAll,
  handleFilm,
  handleGetListKey,
  handleGetResultByKeyWord,
  handleGroupByKeyWord,
  handleJob,
  handleNewListJobs,
  handlePushYear,
  handleResultMoviesTv
}
  from '../../common/career';
import CareerContent from './CareerContent';
import CareerOption from './CareerOption';
import moment from 'moment';
const _ = require('lodash');

function CareerDescription() {
  const [status, setStatus] = useState('All');
  // - HANDLE CLICK CHANGE EVENT TITLE
  const handleStatus = useCallback((title) => {
    setStatus(title)
  }, [])
  const listDataInPerson = useContext(PersonContext);
  // HANDLE DATA IN API

  console.log(listDataInPerson.person) // cái này là thằng slidbar bên trái


  const combinedCredits = listDataInPerson.credit;
  const cast = combinedCredits.cast;
  const crew = combinedCredits.crew;

  // ------------------------------------------------------ DONE ----------------------------------------------------
  const handlePushYear = (array) => {
    return _.map(array, (value) => {
      const year = moment(value.release_date).year();
      return _.assign({}, value, { year });
    });
  };

  const castHasYear = handlePushYear(cast);
  const crewHasYear = handlePushYear(crew);
  // list acting

  const acting = _.toArray(_.groupBy(castHasYear, 'year')); // acting: là cái cast đã được chia theo từng năm
  const listAllJobs = _.groupBy(crewHasYear, 'job')


  const test = _.toArray(listAllJobs)

  const listJobsByYear = _.map(test, job => { // bảng trả về các jobs đã được phân tách theo year: muốn lấy tên job thì truy cập vào giá trị job nhé.
    return _.groupBy(job, 'year');
  });

  const listTypeCast = _.groupBy(cast, 'media_type')
  const listTypeCrew = _.groupBy(crew, 'media_type')
  const merged = _.concat(listTypeCast.movie, listTypeCrew.movie, listTypeCast.tv, listTypeCrew.tv); // gộp tất cả các mảng vào một mảng
  const flattened = _.flatten(merged); // làm phẳng mảng
  const grouped = _.groupBy(flattened, (o) => o.hasOwnProperty("title") ? "movies" : "tv"); // nhóm theo kiểu phương tiện
  const movies = grouped.movies || []; // Lấy danh sách phim (nếu có)
  const tv = grouped.tv || []; // Lấy danh sách TV show (nếu có)

  const listNameJobs = _.uniq(['Acting',
    ..._.keys(listAllJobs),
    ..._.keys(listTypeCast),
    ..._.keys(listTypeCrew)]) // ['Acting', 'Director'] : mục đích cái này là lặp qua để nhét vào phần filter


  // ------------------------------------------------------ DONE ----------------------------------------------------














  // // B1: ADD YEAR TO ARRAY

  // B2: GROUP MATCHING ELEMENTS BY KEY WORD
  const castGroupByYear = handleGroupByKeyWord(castHasYear, "year");
  const crewGroupByJob = handleGroupByKeyWord(crewHasYear, "job");
  // B3: ADD ACTING
  const actingList = { Acting: Object.values(castGroupByYear) };
  const listJobs = { ...handleJob(crewGroupByJob, "year"), ...actingList }
  // B4: GET LIST MOVIE AND TV
  const listMovies = handleResultMoviesTv(handleFilm(listJobs), 'movie');
  const listTv = handleResultMoviesTv(handleFilm(listJobs), 'tv');
  // B5: CREATE LIST ALL
  const listAll = handleAll(listJobs)
  // B6: RETURN LIST DATA END  
  const lastResult = {
    All: listAll,
    Movie: listMovies,
    Tv: listTv,
    ...handleNewListJobs(listJobs)
  }
  // RENDER UI
  return (
    <div className="career-description">
      <CareerOption
        listKey={handleGetListKey(lastResult)}
        onClickTitle={handleStatus}
      />
      <CareerContent listData={handleGetResultByKeyWord(lastResult, status)} />
    </div>
  );
}

export default CareerDescription;