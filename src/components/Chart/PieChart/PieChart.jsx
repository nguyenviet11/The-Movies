import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import './PieChart.scss'

function PieChart({ vote_average, size}) {
    let classes;
    if (size === 'small') {
        classes = 'small-pie-chart'
    } else if (size === 'big') {
        classes = 'big-pie-chart'
    } else return;

    const isColorCircular = (percent) => {
        let isColor;
        if (percent >= 0 && percent <= 4) isColor =  'rgb(219,35,96)'
        else if (percent >= 4 && percent <= 7) isColor = 'rgb(210,213,49)'
        else isColor = 'rgb(33,208,122)'
        return isColor;
    }
   

    return (
        <div className={classes} >
            <div className="pie-chart">
                <div className="pie-chart__action">
                    <div className="pie-chart__step">
                        {vote_average === undefined || null ? (
                            ''
                        ) : (
                            <div className="pie-chart__progressbar">
                                <CircularProgressbar
                                    className="progressbar__circular"
                                    value={vote_average * 10}
                                    styles={
                                        buildStyles({ pathColor: isColorCircular(vote_average) })
                                    }
                                />
                                <div className="progressbar__inside">
                                    <span className="value__percent">{Math.floor(vote_average * 10)}</span>
                                    <span className="percent" style={{ fontSize: 'xx-small', color: 'white' }}>
                                        %
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PieChart;
