import React, { useState } from 'react'
import './CardSearch.scss'

const CardSearch = (prop) => {
    const { data } = prop

    return (
        <>
            <div className='search-header__image'>
                {data && data.results.map((item, index) =>
                (
                    <div className='image-wrapper' key={index}>
                        <div className='image-poster'>
                            {item.poster_path || item.backdrop_path || item.profile_path ? <a href='#!'> <img src={`https://image.tmdb.org/t/p/w500${item.poster_path || item.backdrop_path || item.profile_path}`} alt='movies' /></a> : <a href='#!'> <img src='https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png' alt='movies' /></a>}
                        </div>
                        <div className='image-info'>
                            <div className='image-info__name'>
                                <a href='#!'><h3>{item.title || item.name}</h3></a>
                                <span>{item.release_date || item.first_air_date}</span>
                            </div>
                            <div className='image-info__desc'>
                                <p>{item.overview}</p>
                            </div>
                        </div>
                    </div>)
                )}
            </div>

        </>

    );
}

export default CardSearch;