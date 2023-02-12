import './../../Person.scss'

function CareerOption({ listKey, onClickTitle }) {
    const listMovieAndTv = [];
    const listOther = [];
    listKey.map((value) => {
        if (value === 'Movie' || value === 'Tv') {
            listMovieAndTv.push(value);
        } else {
            listOther.push(value);
        }
    })

    return (
        <div className="career-description__filter">
            <ul className="career-description__filter-list">
                <li className="career-description__filter-item">All
                    <i className="career-description__filter-icon fa-solid fa-caret-down"></i></li>
                <div>
                    {
                        listMovieAndTv.map((value) => (
                            <div key={value} 
                                onClick={
                                    () => { onClickTitle(value) }
                                }
                            >{value}</div>
                        ))
                    }
                </div>
                <li className="career-description__filter-item">Department
                    <i className="career-description__filter-icon fa-solid fa-caret-down"></i></li>
                <div>
                    {
                        listOther.map((value) => (
                            <div key={value}
                            onClick={() => {onClickTitle(value)}}
                        >{value}</div>
                        ))
                    }
                </div>
            </ul>
        </div>
    );
}

export default CareerOption;