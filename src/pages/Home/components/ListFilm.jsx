import React from 'react'
import './../Home.scss'
import CardStyles1 from '../../../components/card-styles/CardStyles1';
import TabUI from '../../../components/tab-ui/_index';

const ListFilm = ({listFilm, header, border, themeTab}) => {
  return (
    <div className='trending'>
        <TabUI
            header="What's Popular"
            border="hasBorder"
            themeTab="activeTabDark"
            list={[
                {
                    title: <div className='title__default'>On TV</div>,
                    content: (
                        <div className='trending__content'>
                            <CardStyles1 size="small" list={[]} />
                            <div className='shadow'></div>
                        </div>
                    ),
                },
                {
                    title: <div className='title__default'>In Theaters</div>,
                    content: (
                        <div className='trending__content'>
                            <CardStyles1 size="small" list={[]}  />
                            <div className='shadow'></div>
                        </div>
                    ),
                },
            ]}
        />
</div>
  )
}

export default ListFilm