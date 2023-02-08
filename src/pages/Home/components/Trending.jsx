import { useContext } from "react";
import { HomeContext } from "../Home";
import ListFilm from "./ListFilm";


function Trending() {
    let listDataInHome = useContext(HomeContext)
    const trendingDay = listDataInHome.trendingDay;
    const trendingWeek = listDataInHome.trendingWeek

    return (
        <ListFilm
            header='Trending' 
            border='hasBorder' 
            themeTab='activeTabDark' 
            listTitle = {{day: 'Today', week: 'This Week'}} 
            listTrending = {{day: trendingDay, week: trendingWeek}}
        />
    );
}

export default Trending;
