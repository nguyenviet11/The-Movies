import CardStyles3 from '../../../components/card-styles/CardStyles3';
import '../Person.scss';

function ListFilmPerson() {
    return ( 
        <div className="list-film-person">
            <div className="header__title--small">Known For</div>
            <div className="list-film-person__content">
                <CardStyles3 />
                <CardStyles3 />
                <CardStyles3 />
                <CardStyles3 />
                <CardStyles3 />
                <CardStyles3 />
                <CardStyles3 />
                <CardStyles3 />
                <CardStyles3 />
            </div>
        </div>
    );
}

export default ListFilmPerson;