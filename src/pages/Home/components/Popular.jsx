import { useContext } from 'react';
import { HomeContext } from '../Home';
import ListFilm from './ListFilm';

function PopularHome({ listPopularTV, listPopularMovies }) {
    let listDataInHome = useContext(HomeContext)
    const popularTV = listDataInHome.popularTV;
    const popularMovies = listDataInHome.popularMovies
    return (
       <ListFilm 
            header="What's Popular" 
            border='hasBorder' 
            themeTab='activeTabDark' 
            listTitle = {{day: 'On TV', week: 'In Theaters'}} 
            listTrending = {{day: popularTV, week: popularMovies}}
       />
    );
}

export default PopularHome;
