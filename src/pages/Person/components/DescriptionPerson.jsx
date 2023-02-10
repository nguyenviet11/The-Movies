/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext } from 'react';
import { PersonContext } from '../Person';
import ReadMoreReact from 'read-more-react';
import '../Person.scss';

function DescriptionPerson() {
    const listDataInPerson = useContext(PersonContext)
    const personList = listDataInPerson.person;

    return (
        <div className="description-person">
            <section>
                <div className="description-person__title" dir="auto">
                    <h2 className="description-person__title">
                        <a href="/person/1083010-letitia-wright">Letitia Wright</a>
                    </h2>
                </div>
            </section>
            <section className="description-person__wrap">
                <div dir="auto" className='header__title--small'>Biography</div>
                <div dir="auto" className="description-person__biography">
                    <div className="description-person__content">
                        <div className="description-person__text">
                            <ReadMoreReact 
                                text={personList.biography}
                                min={80}
                                ideal={950}
                                max={2000}
                                readMoreText={"Read More"} 
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DescriptionPerson;