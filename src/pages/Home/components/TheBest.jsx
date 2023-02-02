import Button from '../../../components/button/Button';
import './../Home.scss';

function TheBestMovie() {
    return (
        <section className='the-best'>
            <div className='the-best__media'>
                <div className='the-best__wrapper'>
                    <div className='the-best__content'>
                        <div className='the-best__header'>
                            <h2 className='the-best__taw'>
                                That's A<br />
                                Wrap 2022
                            </h2>
                        </div>

                        <div >
                            <p className='the-best__description'>The best (and worst) from 2022.</p>
                            <div className='the-best__button'>
                                <Button rounded borderWhite large>
                                    Check it out
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TheBestMovie;
