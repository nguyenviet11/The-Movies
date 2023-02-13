import axiosClient from "../../../services/axiosClient";
import { axiosUrl } from "../../../services/axiosUrl";

let urlSearchMovie = `/search/movie?api_key=${axiosUrl.apiKey}`;
let urlSearchPeople = `/search/person?api_key=${axiosUrl.apiKey}`;
let urlSearchTv = `/search/tv?api_key=${axiosUrl.apiKey}`;

export const getSearchMovies = (params, page) => {
    return axiosClient.get(`${urlSearchMovie}&language=en-US&query=${params}&page=${page}&include_adult=false`)
}

export const getSearchTvShow = (params, page) => {
    return axiosClient.get(`${urlSearchTv}&language=en-US&page=${page}&query=${params}&include_adult=false`)
}

export const getSearchPeople = (params, page) => {
    return axiosClient.get(`${urlSearchPeople}&language=en-US&query=${params}&page=${page}&include_adult=false`)

}
