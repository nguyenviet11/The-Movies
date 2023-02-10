import './../../Person.scss'

function CareerOption() {
    return (
        <div className="career-description__filter">
            <ul className="career-description__filter-list">
                <li className="career-description__filter-item">All
                    <i className="career-description__filter-icon fa-solid fa-caret-down"></i></li>
                    <div>
                        <div>Movies</div>
                        <div>TV Shows</div>
                    </div>
                <li className="career-description__filter-item">Department
                    <i className="career-description__filter-icon fa-solid fa-caret-down"></i></li>
                <div>
                    <div>Acting</div>
                    <div>Producer</div>
                    <div>Writer</div>
                </div>
            </ul>
        </div>
    );
}

export default CareerOption;