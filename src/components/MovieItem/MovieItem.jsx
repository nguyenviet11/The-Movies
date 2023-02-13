import React from 'react'
import './MovieItem.scss';

const MovieItem = (prop) => {

    const apiDataPeople = prop.apiDataPeople
    const apiDataShow = prop.apiDataTvShow
    const apiMovie = prop.apiMovie
    const handleGetPeople = prop.handleGetPeople
    const handleGetMovie = prop.handleGetMovie

    return (
        <div className='result-wrapper'>
            <div className='results-title'>
                <h3>Search Results</h3>
                <div className='result-item'>
                    <ul>
                        <li className='result-item__item'>
                            <a onClick={handleGetMovie}>Movies</a>
                            {apiMovie && <span>{apiMovie.total_results}</span>}
                        </li>
                        <li className='result-item__item'>
                            <a >TV Shows</a>
                            {apiDataShow && <span>{apiDataShow.total_results}</span>}
                        </li>
                        <li className='result-item__item'>
                            <a onClick={handleGetPeople}>People</a>
                            {apiDataPeople && <span>{apiDataPeople.total_results}</span>}
                        </li>
                        <li className='result-item__item'>
                            <a >Companies</a>
                            <span>115,700</span>
                        </li>
                        <li className='result-item__item'>
                            <a href='#!'>Collections</a>
                            <span>5,700</span>
                        </li>
                        <li className='result-item__item'>
                            <a href='#!'>Keywords</a>
                            <span>5,700</span>
                        </li>
                    </ul>
                </div>
            </div>
            <i className="fa-sharp fa-solid fa-circle-info"></i><span className='result-note'>Tip: You can use the 'y:' filter to narrow your results by year. Example: 'star wars y:1977'.</span>
        </div>
    )
}

export default MovieItem