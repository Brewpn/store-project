import axios from 'axios'

const BASE_URL = 'https://bookey-st.herokuapp.com';

export const AxiosCategories = {
    add (creds) {
        return axios.post(`${BASE_URL}/cms/category`, {
            title: creds.title,
            description: creds.description
        });
    },

    get (page, count = 3) {
        return axios.get(`${BASE_URL}/cms/category/list?page=${page}&count=${count}`)
    }
};

export const AxiosBooks = {
    add (creds) {
        return axios.post(`${BASE_URL}/cms/category`, {
            title: creds.title,
            description: creds.description
        })
            .then(response => response.data)
            .catch(error => {console.log('Error : ' + error)});
    },

    search (book) {
        return axios.get(`${BASE_URL}/cms/book/list?search=${book}&page=1&count=3`);
    },

    get (book) {
        return axios.get(`${BASE_URL}/cms/book/list`)
            .then(response => response.data)
            .catch(error => error)
    }
};