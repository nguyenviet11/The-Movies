import { api_key } from "../../../constant";
import axiosClient from "../../../services/axiosClient";


export const getListTrending = (time) => {
    return axiosClient.get(`/trending/all/${time}?api_key=${api_key}`)
}

export const getListPopular = (params, page) => {
    // https://api.themoviedb.org/3/movie/popular?api_key=5805c824a6a796dd7b66b4d53e70d510&language=en-US&page=1
    // https://api.themoviedb.org/3/tv/popular?api_key=5805c824a6a796dd7b66b4d53e70d510&language=en-US&page=1
    return axiosClient.get(`/${params}/popular?api_key=${api_key}&language=en-US&page=${page}`)
}
