import '../Person.scss';

function SocialPerson() {
    return ( 
        <div class="social-person">
            <div>
                <a  class="social-person__link" 
                    title="Visit Instagram" 
                    href="https://instagram.com/letitiawright/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    data-role="tooltip"
                >
                   <i className="social-person__icon fa-brands fa-instagram"></i>
                </a>
            </div>
        </div>
     );
}

export default SocialPerson;