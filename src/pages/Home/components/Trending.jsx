import axios from 'axios';
import { useEffect, useState } from 'react';
import CardStyles1 from '../../../components/card-styles/CardStyles1';
import TabUI from '../../../components/tab-ui/_index';


function Trending() {
    const [isDataDay, setIsDataDay] = useState([]);
    const [isDataThisWeek, setIsDataThisWeek] = useState([]);

    useEffect(() => {
        axios
            .get('https://api.themoviedb.org/3/trending/movie/day?api_key=5805c824a6a796dd7b66b4d53e70d510')
            .then(function (response) {
                setIsDataDay(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios
            .get('https://api.themoviedb.org/3/trending/movie/week?api_key=5805c824a6a796dd7b66b4d53e70d510')
            .then(function (response) {
                setIsDataThisWeek(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

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
                                {isDataDay.length === 0 ? '' : <CardStyles1 size="small" list={isDataDay} small />}
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
                                    <CardStyles1 size="small" list={isDataThisWeek} small />
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
