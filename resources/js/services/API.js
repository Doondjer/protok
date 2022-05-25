/*
 * This is the initial API interface
 * we set the base URL for the API
 */

import axios from "axios";

export const apiClient = axios.create({
   baseURL: "/api",
   withCredentials: true, // required to handle the CSRF token
});

/*
 * Add a response interceptor
 */
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {

        if (
            error.response &&
            (error.response.status === 401 || error.response.status === 419)
        ) {
            location.reload();
        }
        return Promise.reject(error);
    }
);
