import './Home.scss'

import Introduce from './components/Introduce';
import Layout from '../../components/layout/Layout';
import Trending from './components/Trending';

import LatestTrailers from './components/LatestTrailers';
import TheBestMovie from './components/TheBest';
import PopularHome from './components/Popular';
import LeaderBoard from './components/LeaderBoard';



function Home() {
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
