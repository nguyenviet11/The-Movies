import { useEffect, useState } from 'react';
import { listWidthImages } from '../../constant';
import Images from '../images/Images';
import VideoModal from '../modal/modalVideo/index';
import './CardStyles.scss'
import { getDetailTV } from './services/api';

function CardStyles2({ listData }) {
    const [isOpen, setOpen] = useState(false);
    const [detailMovies, setDetailMovies] = useState();
    const [idMovie, setIdMovie] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [detailMovieError, setDetailMovieError] = useState(null);

    const handleShowVideo = (id) => {
        setOpen(!isOpen);
        setIdMovie(id);
    };

    const listDetailTV = async (id) => {
        try {
            setIsLoading(true);
            const responseDetailMovies = await getDetailTV(id);
            setDetailMovies(responseDetailMovies.data.results)
        } catch (err) {
            setDetailMovieError(err)
        }
    }

    useEffect(() => {
        listDetailTV(idMovie);
    }, [idMovie])




    return (
        <div className='card-wrap'>
            {listData.map((value) => (
                <div className="card-style2" key={value.id}>
                    <div className="card-style2__image">
                        <div className="card-style2__wrapper" onClick={() => handleShowVideo(value.id)}>
                            <div
                                className="card-style2__trailer"
                                data-id={value.id}
                                data-title={value.name || value.title}
                                title={value.name || value.title}
                            >
                                <Images pathImage={value.poster_path}
                                    width={listWidthImages.w1280}
                                    titleAlt={value.title || value.name}
                                    stylesImage='poster'
                                />

                                <div className="card-style2__play">
                                    <span className="card-style2__glyphicons"></span>
                                </div>
                            </div>
                        </div>

                        <div
                            className="card-style2__options"
                            data-id={value.id}
                            data-role="tooltip"
                        >
                            <div className="card-style2__click" href="#">
                                <div className="card-style2__glyphiconsv3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="card-style2__content">
                        <div className="card-style2__name">
                            <a href="/movie/843794">
                                {value.title || value.name}
                            </a>
                        </div>
                        <p className="card-style2__description">{value.first_air_date}</p>
                    </div>
                </div>
            ))}
            {
                (detailMovies) && (
                    <VideoModal
                        isOpen={isOpen}
                        close={handleShowVideo}
                        keyVideo={detailMovies[0].key}
                    />
                )
            }
        </div>
    );
}

export default CardStyles2;
