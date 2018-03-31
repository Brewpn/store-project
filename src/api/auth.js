import fetch from 'cross-fetch'
import axios from 'axios'

const BASE_URL = 'https://bookey-st.herokuapp.com';

export const Authorize = {
    login (creds) {
        // const config = {
        //     method: 'post',
        //     credentials: 'same-origin',
        //     url: `${BASE_URL}/cms/auth/login`,
        //     headers: {
        //         'Content-Type':'application/x-www-form-urlencoded'
        //     },
        //     data: `email=${creds.username}&password=${creds.password}`
        // };

        return axios.post(`${BASE_URL}/cms/auth/login`, {
            email: creds.username,
            password: creds.password
        });
    },

    logout () {
        return new Promise(resolve => setTimeout(resolve, 0));
    },
};