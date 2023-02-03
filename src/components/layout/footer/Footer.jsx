import React from 'react'
import './Footer.scss';

function Footer() {
    const linkPage = 'https://www.themoviedb.org';
    return (
        <div className='footer'>
            <nav className='footer__nav'>
                <div className='footer__join'>
                    <img
                        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                        alt="The Movie Database (TMDB)"
                        width="130"
                        height="94"
                        className='footer__img'
                    />

                    <a className='footer__logged' href="/u/nvhung1810">
                        Hi nvhung1810!
                    </a>
                </div>

                <div className='footer__information'>
                    <h3 className='footer__header'>The Basics</h3>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <a href={`${linkPage}/about`}>Giới thiệu về TMDB</a>
                        </li>
                        <li className='footer__item'>
                            <a href={`${linkPage}/about/staying-in-touch`}>Contact Us</a>
                        </li>
                        <li className='footer__item'>
                            <a href={`${linkPage}/talk`}>Support Forums</a>
                        </li>
                        <li className='footer__item'>
                            <a href={`${linkPage}/documentation/api`}>API</a>
                        </li>
                        <li className='footer__item'>
                            <a href={`${linkPage}https://status.themoviedb.org/`}>System Status</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__information'>
                    <h3 className='header__fotter'>Get Involved</h3>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <a href={`${linkPage}/bible`}>
                                <span className='glyphicons glyphicons-asterisk'></span> Contribution Bible
                            </a>
                        </li>
                        <li className='footer__item'>
                            <a href={`${linkPage}/movie/new`}>Add New Movie</a>
                        </li>
                        <li className='footer__item'>
                            <a href={`${linkPage}/tv/new`}>Add New TV Show</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__information'>
                    <h3 className='header__fotter'>Community</h3>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <a href={`${linkPage}/documentation/community/guidelines`}>Guidelines</a>
                        </li>
                        <li className='footer__item'>
                            <a href={`${linkPage}/discuss`}>Discussions</a>
                        </li>
                        <li className='footer__item'>
                            <a href={`${linkPage}/leaderboard`}>Leaderboard</a>
                        </li>
                        <li className='footer__item'>
                            <a href={`${linkPage}https://twitter.com/themoviedb`}>Twitter</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__information'>
                    <h3 className='header__fotter'>Legal</h3>
                    <ul className='footer__list'>
                        <li className='footer__item'>
                            <a href={`${linkPage}/documentation/website/terms-of-use`}>Terms of Use</a>
                        </li>
                        <li className='footer__item'>
                            <a href={`${linkPage}/documentation/api/terms-of-use`}>API Terms of Use</a>
                        </li>
                        <li className='footer__item'>
                            <a href={`${linkPage}/privacy-policy`}>Privacy Policy</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Footer;
