/* eslint-disable no-unused-vars */
import './Home.scss'

import Introduce from './components/Introduce';
import Layout from '../../components/layout/Layout';
import Trending from './components/Trending';

import LatestTrailers from './components/LatestTrailers';
import TheBestMovie from './components/TheBest';
import PopularHome from './components/Popular';
import LeaderBoard from './components/LeaderBoard';
import { getListPopular, getListTrending } from './services/api';
import { useEffect, useState } from 'react';
import { listKeyWords } from '../../constant';


function Home() {
    // GET LIST TRENDING
    const [listDataTrendingDay, setListDataTrendingDay] = useState(null);
    const [listDataTrendingWeek, setListDataTrendingWeek] = useState(null);
    const [trendingError, setTrendingError] = useState(null);

    // GET LIST POPULAR
    const [listPopularTV, setListPopularTV] = useState(null);
    const [listPopularMovies, setListPopularMovies] = useState(null);
    const [popularError, setPopularError] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const getTrending = async () => {
        try {
            setIsLoading(true)
            // GET LIST TRENDING
            const responseListTrendingDay = await getListTrending(listKeyWords.day);
            const responseListTrendingWeek = await getListTrending(listKeyWords.week);
            setListDataTrendingDay(responseListTrendingDay.data.results)
            setListDataTrendingWeek(responseListTrendingWeek.data.results)
            // GET LIST POPULAR
            const responseListPopularTv = await getListPopular(listKeyWords.tv, 1);
            const responseListPopularMovies = await getListPopular(listKeyWords.movie, 1);
            setListPopularTV(responseListPopularTv.data.results);
            setListPopularMovies(responseListPopularMovies.data.results);
        } 
        catch (err) {
            setTrendingError(err)
            setPopularError(err)
        } 
    }

    useEffect(() => {
        getTrending()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout>
            <div className='home-page'>
                <header>
                    {
                        listPopularMovies === null
                        ? ''
                        : 
                        <Introduce listPopularMovies = {listPopularMovies} />
                    }
                    <TheBestMovie />
                </header>
                <div className='home__content'>
                    {/* TRENDING */}
                    {
                        listDataTrendingDay === null && listDataTrendingWeek === null 
                        ? ''
                        : 
                        <Trending   listDataTrendingDay = {listDataTrendingDay}
                                    listDataTrendingWeek = {listDataTrendingWeek}
                        />
                    }
                    {/* LATEST TRAILERS */}
                    <LatestTrailers />
                    {/* POPULAR HOME */}
                    {
                        listPopularTV === null && listPopularMovies === null 
                        ? ''
                        : 
                        <PopularHome    listPopularTV = {listPopularTV}
                                        listPopularMovies = {listPopularMovies}
                        />
                    }
                    {/* LEADER BOARD */}
                    <LeaderBoard />
                </div>
            </div>
        </Layout>
    );
}

export default Home;
