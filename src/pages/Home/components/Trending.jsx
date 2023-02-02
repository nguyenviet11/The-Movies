import ListFilm from "./ListFilm";

function Trending({ listDataTrendingDay, listDataTrendingWeek }) {
    return (
        <ListFilm
            header='Trending' 
            border='hasBorder' 
            themeTab='activeTabDark' 
            listTitle = {{day: 'Today', week: 'This Week'}} 
            listTrending = {{day: listDataTrendingDay, week: listDataTrendingWeek}}
        />
    );
}

export default Trending;
