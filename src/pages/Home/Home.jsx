/* eslint-disable no-unused-vars */
import './Home.scss'

import Introduce from './components/Introduce';
import Layout from '../../components/layout/Layout';
import Trending from './components/Trending';

import LatestTrailers from './components/LatestTrailers';
import TheBestMovie from './components/TheBest';
import PopularHome from './components/Popular';
import LeaderBoard from './components/LeaderBoard';
import { getListPopular, getListTrending, getLatestTrailer } from './services/api';
import { createContext, useEffect, useState } from 'react';
import { listKeyWords } from '../../constant';

// 1. create context:
export const HomeContext = createContext()
// 2. provide: cung cấp
// 3. consumer: nơi nhận dữ liệu

function Home() {
    // GET LIST TRENDING
    const [listDataTrendingDay, setListDataTrendingDay] = useState();
    const [listDataTrendingWeek, setListDataTrendingWeek] = useState();
    const [trendingError, setTrendingError] = useState(null);

    // GET LIST POPULAR
    const [listPopularTV, setListPopularTV] = useState();
    const [listPopularMovies, setListPopularMovies] = useState();
    const [popularError, setPopularError] = useState(null);

    // GET LIST LATEST TRAILER
    const [listLaTestTrailerTV, setListLaTestTrailerTV] = useState();
    const [listLaTestTrailerMovies, setListLaTestTrailerMovies] = useState();
    const [laTestTrailerError, setLaTestTrailerError] = useState(null);

    // GET LIST LATEST 
    

    const [isLoading, setIsLoading] = useState(false);


    const getTrending = async () => {
        try {
            setIsLoading(true)
            // GET LIST TRENDING
            const responseListTrendingDay = await getListTrending(listKeyWords.day);
            const responseListTrendingWeek = await getListTrending(listKeyWords.week);
            setListDataTrendingDay(responseListTrendingDay.data.results)
            setListDataTrendingWeek(responseListTrendingWeek.data.results)
        }
        catch (err) {
            setTrendingError(err)
        }
    }

    const getPopular = async () => {
        try {
            setIsLoading(true)
            // GET LIST POPULAR
            const responseListPopularTv = await getListPopular(listKeyWords.tv, 1);
            const responseListPopularMovies = await getListPopular(listKeyWords.movie, 1);
            setListPopularTV(responseListPopularTv.data.results);
            setListPopularMovies(responseListPopularMovies.data.results);
        }
        catch (err) {
            setPopularError(err)
        }
    }

    const LatestTrailer = async () => {
        try {
            setIsLoading(true)
            // GET LIST POPULAR
            const responseLaTestTrailerTv = await getLatestTrailer(listKeyWords.tv, 1);
            const responseLaTestTrailerMovies = await getLatestTrailer(listKeyWords.movie, 1);
            setListLaTestTrailerTV(responseLaTestTrailerTv.data.results);
            setListLaTestTrailerMovies(responseLaTestTrailerMovies.data.results);
        }
        catch (err) {
            setPopularError(err)
        }
    }

    useEffect(() => {
        getTrending();
        getPopular();
        LatestTrailer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    // 

    return (
        <>
            {
                (   listDataTrendingDay && 
                    listDataTrendingWeek && 
                    listPopularTV && 
                    listPopularMovies &&
                    listLaTestTrailerTV && 
                    listLaTestTrailerMovies
                )
                && (
                    <HomeContext.Provider
                        value={
                            {
                                trendingDay: listDataTrendingDay,
                                trendingWeek: listDataTrendingWeek,
                                popularTV: listPopularTV,
                                popularMovies: listPopularMovies,
                                laTestTrailerTv: listLaTestTrailerTV,
                                laTestTrailerMovies: listLaTestTrailerMovies
                            }
                        }>  
                        <Layout>
                            <div className='home-page'>
                                <header>
                                    <Introduce />
                                    <TheBestMovie />
                                </header>
                                <div className='home__content'>
                                    <Trending />
                                    <LatestTrailers />
                                    <PopularHome />
                                    <LeaderBoard />
                                </div>
                            </div>
                        </Layout>
                    </HomeContext.Provider>
                )
            }
        </>
    );
}

export default Home;
