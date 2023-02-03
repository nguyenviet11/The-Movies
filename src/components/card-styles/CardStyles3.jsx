import './CardStyles.scss'

function CardStyles3() {
    return (
        <li className="card-style3">
            <a className="card-style3__link" href="/person/3131-antonio-banderas">
                <img
                    loading="lazy"
                    className="card-style3__profile"
                    src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cQvc9N6JiMVKqol3wcYrGshsIdZ.jpg"
                    alt='hi'
                />
            </a>

            <p className="card-style3__name">
                <a href="/person/3131-antonio-banderas">The Mandalorian</a>
            </p>
            <p className="card-style3__charector"></p>
        </li>
    );
}

export default CardStyles3;
