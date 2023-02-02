/* eslint-disable no-unused-vars */
import './Home.scss'

import Introduce from './components/Introduce';
import Layout from '../../components/layout/Layout';
import Trending from './components/Trending';

import LatestTrailers from './components/LatestTrailers';
import TheBestMovie from './components/TheBest';
import PopularHome from './components/Popular';
import LeaderBoard from './components/LeaderBoard';
import { getListTrending } from './services/api';
import { useEffect, useState } from 'react';


function Home() {
    const [listDataTrendingDay, setListDataTrendingDay] = useState(null);
    const [listDataTrendingWeek, setListDataTrendingWeek] = useState(null);

    const [trendingError, setTrendingError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getTrending = async () => {
        try {
            setIsLoading(true)
            const responseListTrendingDay = await getListTrending('day');
            const responseListTrendingWeek = await getListTrending('week');
            setListDataTrendingDay(responseListTrendingDay.data.results)
            setListDataTrendingWeek(responseListTrendingWeek.data.results)
        } 
        catch (err) {
            setTrendingError(err)
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
                    <Introduce />
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
                        listDataTrendingDay === null && listDataTrendingWeek === null 
                        ? ''
                        : 
                        <PopularHome   listDataTrendingDay = {listDataTrendingDay}
                                    listDataTrendingWeek = {listDataTrendingWeek}
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
