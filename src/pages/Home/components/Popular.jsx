import CardStyles1 from '../../../components/card-styles/CardStyles1';
import TabUI from '../../../components/tab-ui/_index';

function PopularHome({ listDataTrendingDay, listDataTrendingWeek }) {
    return (
        <div className='list-film'>
            <TabUI
                header="Popular Home"
                border="hasBorder"
                themeTab="activeTabDark"
                list={[
                    {
                        title: <div className='title__default'>Today</div>,
                        content: (
                            <div className='list-film__content'>
                                <CardStyles1 list={listDataTrendingDay} size="small" />
                                <div className='shadow'></div>
                            </div>
                        ),
                    },
                    {
                        title: <div className='title__default'>This Week</div>,
                        content: (
                            <div className='list-film__content'>
                                <CardStyles1 list={listDataTrendingWeek} size="small" />
                                <div className='shadow'></div>
                            </div>
                        ),
                    },
                ]}
            />
        </div>
    );
}

export default PopularHome;
