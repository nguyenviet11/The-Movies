import './ColumnChart.scss'

function ColumnChartHeader() {
    return (
        <div className='column__header'>
            <h2 className='column__header-text'>Leader board</h2>
            <div>
                <div>
                    <span className='column__dot-all'></span> All Time Edits
                </div>
                <div className='column__mt4'>
                    <span className='column__this-week'></span> Edits This Week
                </div>
            </div>
        </div>
    );
}

export default ColumnChartHeader;
