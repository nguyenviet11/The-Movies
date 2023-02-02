import ListFilm from './ListFilm';

function PopularHome({ listDataTrendingDay, listDataTrendingWeek }) {
    return (
       <ListFilm 
            header='Popular Movies' 
            border='hasBorder' 
            themeTab='activeTabDark' 
            listTitle = {{day: 'Today', week: 'This Week'}} 
            listTrending = {{day: listDataTrendingDay, week: listDataTrendingWeek}}
       />
    );
}

export default PopularHome;
