import { memo, useContext } from 'react';
import { listWidthImages } from '../../constant';
import { PersonContext } from '../../pages/Person/Person';
import Images from '../images/Images';
import './CardStyles.scss'

function CardStyles3() {
    const listDataInPerson = useContext(PersonContext)
    const credit = listDataInPerson.credit;
    const listCast = credit.cast
    return (
        <>
            {
                listCast.map((value) => (
                    <li className="card-style3" key={value.id}>
                        <a className="card-style3__link" href="/person/3131-antonio-banderas">
                            <Images
                                pathImage={value.backdrop_path}
                                width={listWidthImages.w500}
                                titleAlt={value.title}
                            />
                        </a>

                        <p className="card-style3__name">
                            <a href="/person/3131-antonio-banderas">{value.title || value.original_title}</a>
                        </p>
                    </li>
                ))
            }
        </>

    );
}

export default memo(CardStyles3);
