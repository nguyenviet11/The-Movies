import { api_key } from "../../../constant";
import axiosClient from "../../../services/axiosClient";

// /tv/130392/videos?api_key=5805c824a6a796dd7b66b4d53e70d510&language=en-US
export const getDetailTV = (idMovies) => {
    return axiosClient.get(`/tv/${idMovies}/videos?api_key=${api_key}&language=en-US`)
}
