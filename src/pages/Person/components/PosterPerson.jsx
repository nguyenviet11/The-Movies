import '../Person.scss';

function PosterPerson() {
    return ( 
        <section class="poster-person">
          <div class="poster-person__profile">
            <div class="poster-person__content">
                <img 
                    class="poster-person__img" 
                    src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i6fbYNn5jWA6swWtaqgzaj02RMc.jpg" 
                    alt="Letitia Wright" 
                    data-loaded="true" 
                />
            </div>
          </div>
        </section>
    );
}

export default PosterPerson;