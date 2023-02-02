import React from 'react'

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Manipulation() {
    return (  
    <div className={cx('manipulation')}>
        <div className={cx('manipulation__iconPlus')}>
            <i className={cx('fa-solid fa-plus ')}></i>
            {/* <ShowMenuPlus /> */}
        </div>
        <div className={cx('manipulation__languages')}>
            <span className={cx('manipulation__languagesText')}>VI</span>
        </div>
    
        <div className={cx('manipulation__iconSearch')}>
            <i className={cx('fa-solid fa-magnifying-glass')}></i>
        </div>
    </div> 
    );
}

export default Manipulation;