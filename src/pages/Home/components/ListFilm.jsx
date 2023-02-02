import React from 'react'
import './../Home.scss'
import CardStyles1 from '../../../components/card-styles/CardStyles1';
import TabUI from '../../../components/tab-ui/_index';

const ListFilm = ({  header, border, themeTab, listTitle, listTrending }) => {
    
    return (
        <div className='list-film'>
            <TabUI
                header={header} 
                border= {border}
                themeTab={themeTab}
                list={
                    [
                        {
                            title: <div className='title__default'>{listTitle.day}</div>,
                            content: (
                                <div className='list-film__content'>
                                    <CardStyles1 size="small" list={listTrending.day} />
                                    <div className='shadow'></div>
                                </div>
                            ),
                        },
                        {
                            title: <div className='title__default'>{listTitle.week}</div>,
                            content: (
                                <div className='list-film__content'>
                                    <CardStyles1 size="small" list={listTrending.week}  />
                                    <div className='shadow'></div>
                                </div>
                            ),
                        },
                    ]
                }
            />
        </div>
       
  )
}

export default ListFilm