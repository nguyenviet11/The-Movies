import { useEffect, useState } from 'react';
import './ColumnChart.scss'

function ColumnChart({ leaderBoard }) {
    const [listColorAvt, setListColorAvt] = useState('')

    const handlePercentOfDay = (number) => {
        const maxNumberOfDay = 1000000;
        return `${number / maxNumberOfDay * 100}%`;
    }

    const handlePercentOfWeek = (number) => {
        const maxNumberOfWeek = 20000;
        return `${number / maxNumberOfWeek * 100}%`;
    }

    const handleAvt = (string) => {
        return string.charAt(0)
    }

    const handleRandomColor = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    }

    useEffect(() => {
        const maxLength = leaderBoard.length;
        const number1 = handleRandomColor(0, maxLength) + 150
        const number2 = handleRandomColor(0, maxLength) + 150
        const number3 = handleRandomColor(0, maxLength) + 150
        setListColorAvt(`rgba(${number1}, ${number2}, ${number3}, 1)`)
    }, [])

    return (
        <>
            {leaderBoard.map((value => (
                <div className='column' key={value.id}>
                    <div className='content__wrapper'>
                        <div className='column__wrap'>
                            <div className='column__content'>
                                <ol className='column__leader'>
                                    <li className='column__item'>
                                        <span className='column__avatar'>
                                            <a className='column__link' href="/u/marsters">
                                                <span className='column__round' 
                                                    style={{ backgroundColor: listColorAvt } }>
                                                        {handleAvt(value.name)}
                                                </span>
                                            </a>
                                        </span>

                                        <div className='column__data'>
                                            <h3 className='column__name'>
                                                <a href="/u/marsters">{value.name}</a>
                                            </h3>
                                            <div className='column__meter'>
                                                <div className='column__gauge' 
                                                    style={{ width: handlePercentOfDay(value.day)}}
                                                >
                                                </div>
                                                <h4 className='column__number'>{value.day}</h4>
                                            </div>
                                            <div className='column__meter-week'>
                                                <div className='column__gauge1' style={{ width: handlePercentOfWeek(value.week) }}></div>
                                                <h4 className='column__number'>{value.week}</h4>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            )))}

        </>

    );
}

export default ColumnChart;
