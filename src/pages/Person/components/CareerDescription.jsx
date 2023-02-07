import '../Person.scss';

function CareerDescription() {
    return ( 
        <div className="career-description">
          <div className="career-description__filter">
              <ul className="career-description__filter-list">
                <li className="career-description__filter-item">Clear
                <i className="career-description__filter-icon fa-solid fa-caret-down"></i></li>
                <li className="career-description__filter-item">All
                <i className="career-description__filter-icon fa-solid fa-caret-down"></i></li>
                <li className="career-description__filter-item">Department
                <i className="career-description__filter-icon fa-solid fa-caret-down"></i></li>
              </ul>
          </div>
          <div>
            <h3 className="career-description__header">Production</h3>
            <table className="career-description__card" border="0" cellSpacing="0" cellPadding="0">
              <tbody className="career-description__tbody">
                <tr>
                  <td>
                    <table className="career-description__credit">
                      <tbody className="career-description__tbody">
                        <tr>
                        <td className="career-description__year">—</td>
                          <td className="career-description__separator">
                            <i className="fa-regular fa-circle"></i>
                          </td>
                        <td className="career-description__acc">
                          <a className="career-description__tooltip" href="/movie/908267">
                            <bdi>Things I Never Told My Father</bdi>
                          </a>
                          <span className="career-description__group">  … 
                            <span className="career-description__role">Writer</span>
                          </span>
                        </td>
                      </tr>
                    </tbody></table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    );
}
  
export default CareerDescription;