import ColumnChart from '../../../components/chart/ColumnChart/ColumnChart';
import ColumnChartHeader from '../../../components/chart/ColumnChart/ColumnChartHeader';


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
