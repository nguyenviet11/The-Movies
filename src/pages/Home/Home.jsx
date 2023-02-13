import './Home.scss'

import Introduce from './components/Introduce';
import Layout from '../../components/layout/Layout';
import Trending from './components/Trending';

import LatestTrailers from './components/LatestTrailers';
import TheBestMovie from './components/TheBest';
import PopularHome from './components/Popular';
import LeaderBoard from './components/LeaderBoard';
import { useCallback, useEffect, useState } from 'react';


function Home() {
    const [y, setY] = useState(window.scrollY);


    const handleNavigation = (
        e => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                const test = document.querySelector('header');
                test.style.visibility = 'visible';
                test.style.transition = '1s linear';
            } else if (y < window.scrollY) {
                const test = document.querySelector('header');
                test.style.visibility = 'hidden';
                test.style.transition = '1s linear';
            }
            setY(window.scrollY);
            console.log("window.scrollY: ", window.scrollY); console.log("y: ", y);
        })

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    return (
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
    );
}

export default Home;
