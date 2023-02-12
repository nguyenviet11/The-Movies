import './../../Person.scss'
import CareerItem from './CareerItem';

function CareerContent({ listData }) {
    return (
        <div >
            {/*  cái to này cần lặp */}
            {
                listData.map((value, index) => (
                    <div key={index}>
                        <h3 className="career-description__header">{Object.keys(value)}</h3>
                        <table
                            className="career-description__card"
                            border="0"
                            cellSpacing="0"
                            cellPadding="0"
                        >
                            {
                                Object.values(value).map((item, index) => (
                                    <tbody className="career-description__tbody" key={index}>
                                        {
                                            item.map((contentByYear, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <table className="career-description__credit">
                                                            <tbody className="career-description__tbody">
                                                                {
                                                                    contentByYear.map((child) => (
                                                                        <CareerItem key={child.id} listContent = {child} />
                                                                    ))
                                                                }
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                        {/* cái tr này cần lặp */}
                                    </tbody>
                                ))
                            }

                        </table>
                    </div>
                ))
            }
        </div>
    );
}

export default CareerContent;