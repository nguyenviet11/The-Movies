import axiosClient from "../../../services/axiosClient";

// let url = '/trending/movie/day?api_key=5805c824a6a796dd7b66b4d53e70d510';

export const getListTrending = () => {
    return axiosClient.get('/trending/movie/day?api_key=5805c824a6a796dd7b66b4d53e70d510')
}
