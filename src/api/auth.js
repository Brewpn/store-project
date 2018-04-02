import fetch from 'cross-fetch'
import axios from 'axios'

const BASE_URL = 'https://localhost:3000';

export const Authorize = {

    login (creds) {
        return axios.post(`/cms/auth/login`, {
            email: creds.username,
            password: creds.password
        })
    },

    logout () {
        return new Promise(resolve => setTimeout(resolve, 0));
    },
};