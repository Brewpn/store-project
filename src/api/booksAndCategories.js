import axios from 'axios'

const BASE_URL = 'https://localhost:3000';

export const AxiosCategories = {
    add (creds) {
        return axios.post(`${BASE_URL}/cms/category`, {
            title: creds.title,
            description: creds.description
        });
    },

    get (page, count = 3) {
        return axios.get(`${BASE_URL}/cms/category/list?page=${page}&count=${count}`)
    },

    edit (creds) {

        return axios.put(`${BASE_URL}/cms/category/${creds._id}`, {...creds});
    },
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

    get (category) {
        return axios.get(`${BASE_URL}/cms/book/list?page=1&count=15`, {
            filter: {
                category: ['5abfba10c6d5492671c75637]']
            }
        })
    },

};