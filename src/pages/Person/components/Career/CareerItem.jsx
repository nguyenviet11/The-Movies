function CareerItem({ listContent }) {
    return (
        // nhiệm vụ cái này là nhận data từ obj cuối để hiển thị dữ liệu
        <>
            <tr className="career-description__wrap" >
                <td className="career-description__time">{isNaN(listContent.year) ? '' : listContent.year}
                </td>
                <td className="career-description__year">—</td>
                <td className="career-description__separator">
                    <i className="fa-regular fa-circle"></i>
                </td>
                <td className="career-description__acc">
                    <a className="career-description__tooltip" href="/movie/908267">
                        <bdi>
                            {listContent.original_title || listContent.title || listContent.name}
                        </bdi>
                    </a>
                    <span className="career-description__group">  …
                        <span className="career-description__role">
                            {listContent.character || listContent.job}
                            -
                            {listContent.media_type}
                        </span>
                    </span>
                </td>
            </tr>

        </>
    );
}

export default CareerItem;