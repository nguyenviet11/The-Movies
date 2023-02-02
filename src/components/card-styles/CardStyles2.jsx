import { useState } from 'react';
// import VideoModal from '../Modal/modalVideo/VideoModal';
import './CardStyles.scss'

function CardStyles2() {
    const [isOpen, setOpen] = useState(false);

    const handleShowVideo = () => {
        setOpen(!isOpen);
    };

    return (
        <div>
            <div className="card-style2">
                <div className="card-style2__image">
                    <div className="card-style2__wrapper" onClick={handleShowVideo}>
                        <div
                            className="card-style2__trailer"
                            data-id="E5tSO9aR2Ds"
                            data-title="The Weeks Ahead Trailer"
                            title="Những Người Còn Sót Lại"
                        >
                            <img
                                loading="lazy"
                                className="card-style2__backdrop"
                                src="https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg"
                                alt=""
                            />

                            <div className="card-style2__play">
                                {/* NÚT CLICK */}
                                <span className="card-style2__glyphicons"></span>
                            </div>
                        </div>
                    </div>

                    <div
                        className="card-style2__options"
                        data-id="100088"
                        data-object-id="5e614cd3357c00001631a6f4"
                        data-media-type="tv"
                        data-role="tooltip"
                    >
                        <div className="card-style2__click" href="#">
                            <div className="card-style2__glyphiconsv3"></div>
                        </div>
                    </div>
                </div>
                <div className="card-style2__content">
                    <div className="card-style2__name">
                        <a href="/movie/843794" title="JUNG_E">
                            Những Người Còn Sót Lại
                        </a>
                    </div>
                    <p className="card-style2__description">The Weeks Ahead Trailer</p>
                </div>
            </div>
            {/* <VideoModal isOpen={isOpen} close={handleShowVideo} /> */}
        </div>
    );
}

export default CardStyles2;
