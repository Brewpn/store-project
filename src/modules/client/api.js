import axios from 'axios'

const BASE_URL = 'https://bookey-st.herokuapp.com';

export const AxiosBooks = {

    search (book) {
        return axios.get(`${BASE_URL}/cms/book/list?search=${book}&page=1&count=2`);
    },

    get (creds = {}) {
        let route = '';
        if (!!creds._id) route = `&filter%5Bcategory%5D%5B%5D=${creds._id}`;
        return axios.get(`${BASE_URL}/mobile/book/list?page=1&count=15${route}`)
    },

};