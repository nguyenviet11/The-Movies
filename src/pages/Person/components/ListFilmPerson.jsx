import { useContext } from 'react';
import CardStyles3 from '../../../components/card-styles/CardStyles3';
import { PersonContext } from '../Person';
import '../Person.scss';

function ListFilmPerson() {
    const listDataInPerson = useContext(PersonContext)
    const credit = listDataInPerson.credit;
    const listCast = credit.cast

    return (
        <div className="list-film-person">
            <div className="header__title--small">Known For</div>
            <div className="list-film-person__content">
                <CardStyles3  />
            </div>
        </div>
    );
}

export default ListFilmPerson;