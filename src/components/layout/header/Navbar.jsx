import React from 'react'

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const Navbar = () => {
    return (
        <div className={cx('nav')}>
        <a href="/" className={cx('link__logo')}>
            <img
                src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
                alt="logo"
                className={cx('logo')}
            ></img>
        </a>
        <ul className={cx('nav__list')}>
            <li className={cx('nav__item')}>
                <span className={cx('navItem__title')}>Movies</span>
                {/* <div className={cx('item__menu')}>
                </div> */}
            </li>
            <li className={cx('nav__item')}>
                <span className={cx('navItem__title')}>TV Shows</span>
            </li>
            <li className={cx('nav__item')}>
                <span className={cx('navItem__title')}>People</span>
            </li>
            <li className={cx('nav__item')}>
                <span className={cx('navItem__title')}>More</span>
            </li>
        </ul>
    </div>
    )
}

export default Navbar