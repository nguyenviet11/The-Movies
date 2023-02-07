import { useEffect, useState, useContext } from 'react';
import Button from '../../../components/button/Button';
import { secure_base_url_images } from '../../../constant';
import './../Home.scss';

import { HomeContext } from '../Home';


function Introduce() {
    // Tại provides value là thì thì ở đây là cái đó 
    let listPopularMovies = useContext(HomeContext)
    listPopularMovies = listPopularMovies.popularMovies;
    // ------------------------------------------------------------
    const [isBackgroundImage, setIsBackgroundImage] = useState(null)
    const listPathImage = [];
    let pathBackGround;

    const handleImageBackground = (pathImage) => {
        return `${secure_base_url_images}w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/${pathImage}`;
    }

    listPopularMovies.forEach(element => {
        listPathImage.push(element.backdrop_path);
    });

    const getRandomArbitrary = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    useEffect(() => {
        const max = listPathImage.length - 1;
        getRandomArbitrary(0, max)
        pathBackGround = listPathImage[getRandomArbitrary(0, max)]
        setIsBackgroundImage(
            `linear-gradient(to right, rgba(3, 37, 65, 0.8) 0%, rgba(3, 37, 65, 0) 100%),
            url('${handleImageBackground(pathBackGround)}')`
        )
    }, [])


    return (
        <section className='introduce'
            style={isBackgroundImage === null ? {} : { backgroundImage: isBackgroundImage }} >
            <div className='introduce__media'>
                <div className='introduce__wrapper'>
                    <div className='introduce__content'>
                        <div className='introduce__title'>
                            <h2 className='introduce__welcome'>Welcome.</h2>
                            <h3 className='introduce__description'>
                                Millions of movies, TV shows and people to discover. Explore now.
                            </h3>
                        </div>

                        <div className='introduce__search'>
                            <form className='introduce__form'>
                                <label>
                                    <input
                                        placeholder="Search for a movie, tv show, person......"
                                        className='introduce__input'
                                    />
                                </label>
                                <div className='introduce__btn'>
                                    <Button primary rounded big>
                                        Search
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Introduce;
