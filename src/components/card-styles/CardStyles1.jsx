// import moment from 'moment/moment';
import PieChart from '../chart/PieChart/PieChart';
import './CardStyles.scss'

function CardStyles1({ list, size}) {
    
    return (
        <>
            {list.map((item) => (
                <div className={size} key={item.id}>
                    <div className="card-style1">
                        <div className="card-style1__image">
                            <div className="card-style1__wrapper">
                                <div
                                    className="card-style1__image"
                                >
                                    <img
                                        loading="lazy"
                                        className="card-style1__poster"
                                        src=""
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div
                                className="card-style1__options"
                                data-id="843794"
                                data-object-id="60d1bd7ebf31f2007eddf9a9"
                                data-media-type="movie"
                                data-role="tooltip"
                            >
                                <div className="card-style1__click" href="#">
                                    <div className="card-style1__glyphicons"></div>
                                </div>
                            </div>
                        </div>
                        <div className="card-style1__content">
                            <div className="card-style1__chart">
                                <PieChart vote_average={item.vote_average} size="small" />
                            </div>

                            <div className="card-style1__name">
                                {/* <Link title={item.title}>
                                    {item.title}
                                </Link> */}
                            </div>
                            <p className="card-style1__time"></p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CardStyles1;
