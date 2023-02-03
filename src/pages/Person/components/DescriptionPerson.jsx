/* eslint-disable jsx-a11y/anchor-is-valid */
import '../Person.scss';

function DescriptionPerson() {
    return ( 
        <div className="description-person">
            <section>
                <div className="description-person__title" dir="auto">
                    <h2 className="description-person__title">
                        <a href="/person/1083010-letitia-wright">Letitia Wright</a>
                    </h2>
                </div>
            </section>
            <section className="description-person__wrap">
                <div dir="auto" className='header__title--small'>Biography</div>
                <div dir="auto" className="description-person__biography">
                    <div className="description-person__content">
                        <div className="description-person__text">
                            <p>Letitia Michelle Wright (born 31 October 1993) is a Guyanese-British actress. Beginning her professional career in 2011, she has played roles in several British TV series, including Top Boy (2011), Coming Up (2013), Chasing Shadows (2014), Humans (2016), the Doctor Who episode "Face the Raven" (2015) and the Black Mirror episode "Black Museum" (2017); for the latter, she received a Primetime Emmy Award nomination for Outstanding Supporting Actress in a Limited Series or Movie.</p>
                            <p>The British Academy of Film and Television Arts named Wright among the 2015 group of BAFTA Breakthrough Brits for her role in the award-winning film Urban Hymn (2015). In 2018, she achieved global recognition for her portrayal of Shuri in the Marvel Cinematic Universe film Black Panther. She reprised the role in Avengers: Infinity War (2018), Avengers: Endgame (2019) and Black Panther: Wakanda Forever (2022). In 2019, she received the BAFTA Rising Star Award.</p>
                            <p>Description above is from the Wikipedia article Letitia Wright, licensed under CC-BY-SA, full list of contributors on Wikipedia.</p>
                        </div>
                        <div className="description-person__read">
                            <a className="description-person__read" href="#">Read More 
                                <i className="description-person__icon fa-solid fa-chevron-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
     );
}

export default DescriptionPerson;