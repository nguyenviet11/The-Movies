import { api_key } from "../../../constant";
import axiosClient from "../../../services/axiosClient";


export const getListTrending = (time) => {
    return axiosClient.get(`/trending/all/${time}?api_key=${api_key}`)
}

