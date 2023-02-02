import { srcImgSmall, srcSetImgSmall } from '~/components/logic/linkOverviewMovie';
import './CardStyles.scss'


function CardStyles3(listData) {
    const { listCast } = listData;
    return (
        <>
            {listCast.map((item) => (
                <li className="card-style3" key={item.id}>
                    <a className="card-style3__link" href="/person/3131-antonio-banderas">
                        <img
                            loading="lazy"
                            className="card-style3__profile"
                            src={srcImgSmall(item.profile_pat)}
                            srcSet={srcSetImgSmall(item.profile_pat)}
                            alt={item.name}
                        />
                    </a>

                    <p className="card-style3__name">
                        <a href="/person/3131-antonio-banderas">{item.name}</a>
                    </p>
                    <p className="card-style3__charector">{item.character}</p>
                </li>
            ))}
        </>
    );
}

export default CardStyles3;
