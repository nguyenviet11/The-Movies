import moment from 'moment/moment';
import { useContext, useState } from 'react';
import { PersonContext } from '../../Person';
import './../../Person.scss';
import { handleGroupByKeyWord, handleObjectArray, handlePushYear } from './career';
import CareerContent from './CareerContent';
import CareerOption from './CareerOption';

function CareerDescription() {
  const listDataInPerson = useContext(PersonContext)
  const combinedCredits = listDataInPerson.credit;

  const cast = combinedCredits.cast;
  const crew = combinedCredits.crew;

  // B1: ADD YEAR TO ARRAY
  const castHasYear = handlePushYear(cast);
  const crewHasYear = handlePushYear(crew);
  // B2: GROUP MATCHING ELEMENTS BY KEY WORD
  const castGroupByYear = handleGroupByKeyWord(castHasYear, "year");
  const castGroupByMedia = handleGroupByKeyWord(castHasYear, "media_type");
  console.log(castGroupByMedia)
  // 
  const crewGroupByJob = handleGroupByKeyWord(crewHasYear, "job");
  const crewGroupByYear = [];
  const crewGroupByMedia = [];
  const allData = [];
  Object.entries(crewGroupByJob).forEach((item) => {
    crewGroupByYear.push(
      {
        header: item[0],
        content: Object.values(handleGroupByKeyWord(item[1], "year"))
      }
    )

    console.log(handleGroupByKeyWord(item[1], "media_type"))
  })

  console.log(crewGroupByMedia)

  allData.push(
    {
      header: 'Acting',
      content: Object.values(castGroupByYear)
    },
    ...crewGroupByYear,
  )


  return (
    <div className="career-description">
      <CareerOption />
      <CareerContent />
    </div>
  );
}

export default CareerDescription;