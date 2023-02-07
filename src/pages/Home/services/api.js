import { api_key } from "../../../constant";
import axiosClient from "../../../services/axiosClient";


export const getListTrending = (time) => {
    return axiosClient.get(`/trending/all/${time}?api_key=${api_key}`)
}

export const getListPopular = (params, page) => {
    return axiosClient.get(`/${params}/popular?api_key=${api_key}&language=en-US&page=${page}`)
}


export const getLatestTrailer = (params, page) => {
    return axiosClient.get(`/${params}/top_rated?api_key=${api_key}&language=en-US&page=${page}`)
}