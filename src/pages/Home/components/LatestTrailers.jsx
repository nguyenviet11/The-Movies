import { useContext } from 'react';
import CardStyles2 from '../../../components/card-styles/CardStyles2';
import TabUI from '../../../components/tab-ui/_index';
import { HomeContext } from '../Home';
import './../Home.scss';

function LatestTrailers() {
    let listDataInHome = useContext(HomeContext)
    const laTestTrailerTv = listDataInHome.laTestTrailerTv;
    const laTestTrailerMovies = listDataInHome.laTestTrailerMovies

    return (
        <div className='trailer'>
        <div className='trailer__wrap'>
            <TabUI
                header="Latest Trailers"
                border="hasBorder"
                themeTab="activeTabLight"
                list={[
                    {
                        title: <div className='title__default'>Latest Trailers</div>,
                        content: (
                            <div className='trailer__content'>
                                <CardStyles2 listData = {laTestTrailerTv} />
                            </div>
                        ),
                    },
                    {
                        title: <div className='title__default'>This Week</div>,
                        content: (
                            <div className='trailer__content'>
                                <CardStyles2 listData = {laTestTrailerMovies} />
                            </div>
                        ),
                    },
                ]}
            />
        </div>
        </div>
    );
}

export default LatestTrailers;
