import React from 'react'

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Navbar from './Navbar';
import Manipulation from './Manipulation';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('header')}>
           <Navbar />
           <Manipulation />
        </header>
    );
}

export default Header;
