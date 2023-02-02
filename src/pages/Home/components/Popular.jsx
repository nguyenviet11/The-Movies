import axios from 'axios';
import { useEffect, useState } from 'react';
import CardStyles1 from '../../../components/card-styles/CardStyles1';
import TabUI from '../../../components/tab-ui/_index';
import './../Home.scss'

function PopularHome() {
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
                header="What's Popular"
                border="hasBorder"
                themeTab="activeTabDark"
                list={[
                    {
                        title: <div className='title__default'>On TV</div>,
                        content: (
                            <div className='trending__content'>
                                {isDataDay.length === 0 ? '' : <CardStyles1 size="small" list={isDataDay} />}
                                <div className='shadow'></div>
                            </div>
                        ),
                    },
                    {
                        title: <div className='title__default'>In Theaters</div>,
                        content: (
                            <div className='trending__content'>
                                {isDataThisWeek.length === 0 ? (
                                    ''
                                ) : (
                                    <CardStyles1 size="small" list={isDataThisWeek}  />
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

export default PopularHome;
