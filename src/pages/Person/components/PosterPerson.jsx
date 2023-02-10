import { useContext } from 'react';
import Images from '../../../components/images/Images';
import { listWidthImages } from '../../../constant';
import { PersonContext } from '../Person';
import '../Person.scss';

function PosterPerson() {
  const listDataInPerson = useContext(PersonContext)
  const personList = listDataInPerson.person;

  return (
    <section className="poster-person">
      <div className="poster-person__profile">
        <div className="poster-person__content">
          <Images pathImage= {personList.profile_path} 
                  width={listWidthImages.w300  } 
                  titleAlt={personList.name} 
          />
        </div>
      </div>
    </section>
  );
}

export default PosterPerson;