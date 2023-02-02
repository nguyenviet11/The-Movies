import { useEffect, useState } from 'react';
import CardStyles1 from '../../../components/card-styles/CardStyles1';
import TabUI from '../../../components/tab-ui/_index';
import { getListTrendingDay } from '../services/api';


function Trending() {
    const [isDataDay, setIsDataDay] = useState([]);
    const [isDataThisWeek, setIsDataThisWeek] = useState([]);
    const [data, setData] = useState();
    // const [isLoading, setIsLoading] = useState(false);

    // const getTrending = async () => {
    //     try {
    //         const res = await getListTrendingDay()
    //         setData(res)
    //         console.log(res);
    //     } catch (error) {
    //         console.log(error);
    //     }
    //     finally {
    //         setIsLoading(true);
    //     }
    // }

    // useEffect(() => {
    //     getTrending();
    // }, []);

    return (
        <div className='trending'>
            <TabUI
                header="Trending"
                border="hasBorder"
                themeTab="activeTabDark"
                list={[
                    {
                        title: <div className='title__default'>Today</div>,
                        content: (
                            <div className='trending__content'>
                                {isDataDay.length === 0 ? '' : <CardStyles1 list={isDataDay} size="small" />}
                                <div className='shadow'></div>
                            </div>
                        ),
                    },
                    {
                        title: <div className='title__default'>This Week</div>,
                        content: (
                            <div className='trending__content'>
                                {isDataThisWeek.length === 0 ? (
                                    ''
                                ) : (
                                    <CardStyles1 list={isDataThisWeek} size="small" />
                                )}
                                <div className='shadow'></div>
                            </div>
                        ),
                    },
                ]}
            />
        </div>
    );
}

export default Trending;
