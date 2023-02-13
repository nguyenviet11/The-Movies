import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../components/layout/Layout'
import { getSearchMovies, getSearchPeople, getSearchTvShow } from './services/api';
import statusCode from '../../constant';
import './Search.scss';
import ReactPaginate from 'react-paginate';
import CardSearch from '../../components/CardSearch/CardSearch';
import NotFound from '../../components/NotFoundSearch/NotFound';
import MovieItem from '../../components/MovieItem/MovieItem';


const Search = () => {
    const [data, setData] = useState();
    const [isCheck, setIsCheck] = useState(true);
    const [apiDataPeople, setApiDataPeople] = useState();
    const [apiDataTvShow, setApiDataTvShow] = useState();

    const apiTotal = () => {
        const getSearchMovie = getSearchMovies('ad', 1)
        const getTvShow = getSearchTvShow('ad', 1);
        const getPeople = getSearchPeople('ad', 1);

        Promise.all([getSearchMovie, getTvShow, getPeople]).then(function (values) {
            setData(values[0].data)
            setApiDataPeople(values[1].data)
            setApiDataTvShow(values[2].data)
        });
    }

    const apiGetMovie = async () => {
        setIsCheck(true)
        try {
            const response = await getSearchMovies('an', 1)
            const { status } = response

            if (status == statusCode.success) {
                setData(response.data);
            }
        } catch (error) {
            console.log("error: ", error);
        }
    }

    const apiGetPeople = async () => {
        setIsCheck(false)
        try {
            const response = await getSearchPeople('an', 1)
            const { status } = response
            if (status == statusCode.success) {
                setData(response.data);
            }
        } catch (error) {
            console.log("error: ", error);
        }
        setIsCheck(false)
    }

    const handlePageClick = async (data) => {
        const page = data.selected + 1
        if (!isCheck) {
            try {
                const response = await getSearchPeople('an', page)
                const { status } = response

                if (status == statusCode.success) {
                    setData(response.data);
                }
            } catch (error) {
                console.log("error: ", error);
            }
        } else {
            try {
                const response = await getSearchMovies('an', page)
                const { status } = response

                if (status == statusCode.success) {
                    setData(response.data);
                }
            } catch (error) {
                console.log("error: ", error);
            }
        }

    }


    useEffect(() => {
        apiTotal();
    }, []);

    return (
        <>
            <Layout>
                <div id='top' className='search-header'>
                    <div className='search-container'>
                        <div className='search-header__result'>

                            {data && apiDataPeople && apiDataTvShow && <MovieItem apiMovie={data} apiDataPeople={apiDataPeople} apiDataTvShow={apiDataTvShow} handleGetPeople={apiGetPeople} handleGetMovie={apiGetMovie} />}
                            {data && data?.results?.length > 0 ? <CardSearch data={data} /> : <NotFound />}
                        </div>
                    </div>
                </div>
                <div className='search-pagination'>
                    <ReactPaginate
                        breakLabel={'...'}
                        nextLabel="Next >"
                        previousLabel="< Previous"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        pageCount={data && data.total_pages}
                        marginPagesDisplayed={3}
                        activeClassName={"active"}
                        className="pagination-item"
                    />
                </div>
            </Layout>
        </>
    )
}

export default Search