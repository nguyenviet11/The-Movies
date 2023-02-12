import { useCallback, useContext, useState } from 'react';
import { PersonContext } from '../../Person';
import './../../Person.scss';
import  { handleAll, 
          handleFilm, 
          handleGetListKey, 
          handleGetResultByKeyWord, 
          handleGroupByKeyWord, 
          handleJob, 
          handleNewListJobs, 
          handlePushYear, 
          handleResultMoviesTv 
        } 
      from './career';
import CareerContent from './CareerContent';
import CareerOption from './CareerOption';

function CareerDescription() {
  const [status, setStatus] = useState('All');
  // - HANDLE CLICK CHANGE EVENT TITLE
  const handleStatus = useCallback((title) => {
    setStatus(title)
  }, [])
  const listDataInPerson = useContext(PersonContext);
  // HANDLE DATA IN API
  const combinedCredits = listDataInPerson.credit;
  const cast = combinedCredits.cast;
  const crew = combinedCredits.crew;
  // // B1: ADD YEAR TO ARRAY
  const castHasYear = handlePushYear(cast);
  const crewHasYear = handlePushYear(crew);
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