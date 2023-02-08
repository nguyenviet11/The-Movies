import { useEffect, useState } from 'react';
import ColumnChart from '../../../components/chart/ColumnChart/ColumnChart';
import ColumnChartHeader from '../../../components/chart/ColumnChart/ColumnChartHeader';
import { getLeaderBoard } from '../services/api';


function LeaderBoard() {
    const [leaderBoard, setLeaderBoard] = useState();
    const [leaderBoardError, setLeaderBoardError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const getListLeaderBoard = async () => {
        try {
            setIsLoading(true)
            const responseListPopularTv = await getLeaderBoard('leaderboard');
            setLeaderBoard(responseListPopularTv.data);
        }
        catch (err) {
            setLeaderBoardError(err)
        }
    }

    useEffect(() => {
        getListLeaderBoard()
    }, [])

    return (
        <div className='leader-board'>
            <ColumnChartHeader />

            <div className='chart__wrap'>
                {
                    leaderBoard && (
                        <div className='chart'>
                            <ColumnChart leaderBoard={leaderBoard} />
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default LeaderBoard;
