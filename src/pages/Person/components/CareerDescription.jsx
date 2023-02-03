import '../Person.scss';

function CareerDescription() {
    return ( 
        <div className="career-description">
          <div className="career-description__filter">
              <ul className="career-description__filter-list">
                <li className="career-description__filter-item">Clear
                <i class="career-description__filter-icon fa-solid fa-caret-down"></i></li>
                <li className="career-description__filter-item">All
                <i class="career-description__filter-icon fa-solid fa-caret-down"></i></li>
                <li className="career-description__filter-item">Department
                <i class="career-description__filter-icon fa-solid fa-caret-down"></i></li>
              </ul>
          </div>
          <div>
            <h3 class="career-description__header">Production</h3>
            <table class="career-description__card" border="0" cellspacing="0" cellpadding="0">
              <tbody class="career-description__tbody">
                <tr>
                  <td>
                    <table class="career-description__credit">
                      <tbody class="career-description__tbody">
                        <tr>
                        <td class="career-description__year">—</td>
                          <td class="career-description__separator">
                            <i class="fa-regular fa-circle"></i>
                          </td>
                        <td class="career-description__acc">
                          <a class="career-description__tooltip" href="/movie/908267">
                            <bdi>Things I Never Told My Father</bdi>
                          </a>
                          <span class="career-description__group">  … 
                            <span class="career-description__role">Writer</span>
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