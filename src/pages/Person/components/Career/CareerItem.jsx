function CareerItem() {
    return (
        <tr className="career-description__wrap" >
            <td className="career-description__time">2022
            </td>
            <td className="career-description__year">—</td>
            <td className="career-description__separator">
                <i className="fa-regular fa-circle"></i>
            </td>
            <td className="career-description__acc">
                <a className="career-description__tooltip" href="/movie/908267">
                    <bdi>
                        nguyễn văn hưng
                    </bdi>
                </a>
                <span className="career-description__group">  …
                    <span className="career-description__role">
                        dev
                    </span>
                </span>
            </td>
        </tr>
    );
}

export default CareerItem;