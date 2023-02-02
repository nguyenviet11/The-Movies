import classNames from 'classnames/bind';
// import moment from 'moment/moment';
import styles from './CardStyles.module.scss';
import { Link } from 'react-router-dom';
import PieChart from '../Chart/PieChart/PieChart';

const cx = classNames.bind(styles);

function CardStyles1({ list, small = false, medium = false }) {
    const classes = cx('cdstl1', {
        small,
        medium,
    });

    return (
        <>
            {list.map((item) => (
                <div className={classes} key={item.id}>
                    <div className={cx(`cdstl1`)}>
                        <div className={cx('cdstl1__image')}>
                            <div className={cx('cdstl1__wrapper')}>
                                <div
                                    className={cx('cdstl1__image')}

                                >
                                    <img
                                        loading="lazy"
                                        className={cx('cdstl1__poster')}
                                        src=""
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div
                                className={cx('cdstl1__options')}
                                data-id="843794"
                                data-object-id="60d1bd7ebf31f2007eddf9a9"
                                data-media-type="movie"
                                data-role="tooltip"
                            >
                                <div className={cx('cdstl1__click')} href="#">
                                    <div className={cx('cdstl1__glyphicons')}></div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('cdstl1__content')}>
                            <div className={cx('cdstl1__piechart')}>
                                <PieChart vote_average={item.vote_average} small />
                            </div>

                            <div className={cx('cdstl1__name')}>
                                {/* <Link title={item.title}>
                                    {item.title}
                                </Link> */}
                            </div>
                            <p className={cx('cdstl1__time')}></p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default CardStyles1;
