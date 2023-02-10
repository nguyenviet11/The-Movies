import './../../Person.scss'
import CareerItem from './CareerItem';

function CareerContent() {
    return (
        <div >
            <>
                <h3 className="career-description__header">Acting</h3>
                <table
                    className="career-description__card"
                    border="0"
                    cellSpacing="0"
                    cellPadding="0"
                >
                    <tbody className="career-description__tbody">
                        <tr >
                            <td>
                                <table className="career-description__credit">
                                    <tbody className="career-description__tbody">
                                        <CareerItem />
                                    </tbody>
                                </table>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </>
        </div>
    );
}

export default CareerContent;