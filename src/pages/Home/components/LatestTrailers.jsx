import CardStyles2 from '../../../components/card-styles/CardStyles2';
import TabUI from '../../../components/tab-ui/_index';
import './../Home.scss';

function LatestTrailers() {
    return (
        <div className='trailer'>
        <div className='trailer__wrap'>
            <TabUI
                header="Trailer"
                border="hasBorder"
                themeTab="activeTabLight"
                list={[
                    {
                        title: <div className='title__default'>Latest Trailers</div>,
                        content: (
                            <div className='trailer__content'>
                                <CardStyles2 />
                            </div>
                        ),
                    },
                    {
                        title: <div className='title__default'>This Week</div>,
                        content: (
                            <div className='trailer__content'>
                                <CardStyles2 />
                            </div>
                        ),
                    },
                ]}
            />
        </div>
        </div>
    );
}

export default LatestTrailers;
