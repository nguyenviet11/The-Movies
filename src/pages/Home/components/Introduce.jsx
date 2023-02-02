import Button from '../../../components/Button/Button';
import './../Home.scss';

function Introduce() {
    return (
        <section className='introduce' >
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
