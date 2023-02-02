import './ColumnChart.scss'

function ColumnChart() {
    return (
        <div className='column'>
            <div className='content__wrapper'>
                <div className='column__wrap'>
                    <div className='column__content'>
                        <ol className='column__leader'>
                            <li className='column__item'>
                                <span className='column__avatar'>
                                    <a className='column__link' href="/u/marsters">
                                        <span className='column__round'>m</span>
                                    </a>
                                </span>

                                <div className='column__data'>
                                    <h3 className='column__name'>
                                        <a href="/u/marsters">marsters</a>
                                    </h3>
                                    <div className='column__meter'>
                                        <div className='column__gauge'></div>
                                        <h4 className='column__number'>91975</h4>
                                    </div>
                                    <div className='column__meter-week'>
                                        <div className='column__gauge1'></div>
                                        <h4 className='column__number'>47712</h4>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColumnChart;
