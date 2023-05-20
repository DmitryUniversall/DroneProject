import axios from "axios";
import globalState from "../state/globalState";
import settings from "../state/settings";


const defaultClient = (token = undefined) => {
    if (token === undefined) {
        token = globalState.state.auth.token
    }

    let commonHeaders = {
        ...(token !== undefined? {Authorization: `${settings.auth.AuthTokenType} ${token}`} : {})
    }

    let axiosClient = axios.create({
            baseURL: settings.server.baseUrl,
            timeout: 15000,
            headers: {
                common: commonHeaders
            }
        }
    )

    axiosClient.interceptors.response.use(function (response) {
        // Вызывается при когда статус 200 - 299
        return response;
    }, function (error) {
        // Вызывается при когда статус НЕ 200 - 299
        if (error.response?.status === 403 && error.response.data.detail.startsWith("[AUTH_FAILED]")){
            console.log("LOGOUT")
        }
        return Promise.reject(error);
    });
    return axiosClient
}

export default defaultClient
