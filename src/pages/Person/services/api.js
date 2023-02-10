import { api_key } from "../../../constant"
import axiosClient from "../../../services/axiosClient"

export const getPersonInformation = (keyPerson) => {
    return axiosClient.get(`/person/${keyPerson}?api_key=${api_key}&language=en-US`)
}

export const getPersonCredit = (keyCredit) => {
    return axiosClient.get(`/person/${keyCredit}/combined_credits?api_key=${api_key}&language=en-US`)

}