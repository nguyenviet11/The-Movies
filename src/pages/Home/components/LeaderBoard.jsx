import ColumnChart from '../../../components/Chart/ColumnChart/ColumnChart';
import ColumnChartHeader from '../../../components/Chart/ColumnChart/ColumnChartHeader';


function LeaderBoard() {
    return (
        <div className='leader-board'>
            <ColumnChartHeader />
            <div className='chart__wrap'>
                <div className='chart'>
                    <ColumnChart />
                </div>
                <div className='chart'>
                    <ColumnChart />
                </div>
                <div className='chart'>
                    <ColumnChart />
                </div>
                <div className='chart'>
                    <ColumnChart />
                </div>
                <div className='chart'>
                    <ColumnChart />
                </div>
                <div className='chart'>
                    <ColumnChart />
                </div>
            </div>
        </div>
    );
}

export default LeaderBoard;
