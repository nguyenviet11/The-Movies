import { useState } from 'react';
import { listWidthImages } from '../../constant';
import Images from '../images/Images';
import VideoModal from '../modal/modalVideo/index';
import './CardStyles.scss'

function CardStyles2({ listData }) {
    console.log(listData);

    const [isOpen, setOpen] = useState(false);

    const handleShowVideo = () => {
        setOpen(!isOpen);
    };

    return (
        <div className='card-wrap'>
            {listData.map((value) => (
                <div className="card-style2" key={value.id}>
                    <div className="card-style2__image">
                        <div className="card-style2__wrapper" onClick={handleShowVideo}>
                            <div
                                className="card-style2__trailer"
                                data-id={value.id}
                                data-title={value.name || value.title}
                                title={value.name || value.title}
                            >
                                <Images pathImage={value.poster_path}
                                    width={listWidthImages.w500}
                                    titleAlt={value.title || value.name}
                                    stylesImage='poster'
                                />

                                <div className="card-style2__play">
                                    {/* NÚT CLICK */}
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

            <VideoModal isOpen={isOpen} close={handleShowVideo} key="" />
        </div>
    );
}

export default CardStyles2;
