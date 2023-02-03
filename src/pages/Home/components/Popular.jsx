import ListFilm from './ListFilm';

function PopularHome({ listPopularTV, listPopularMovies }) {
    return (
       <ListFilm 
            header="What's Popular" 
            border='hasBorder' 
            themeTab='activeTabDark' 
            listTitle = {{day: 'On TV', week: 'In Theaters'}} 
            listTrending = {{day: listPopularTV, week: listPopularMovies}}
       />
    );
}

export default PopularHome;
