import '../Person.scss';

function InfoPerson() {
    return ( 
        <div className="info-person">
            <div className="info-person__header">
                Personal Info
            </div>
            <div className="info-person__container">
                <div className="info-person__card">
                    <div className="info-person__card-header">
                        Known For
                    </div>
                    <div className="info-person__card-content">
                        Acting
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoPerson;