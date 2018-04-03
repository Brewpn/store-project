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
        return axios.get(`${BASE_URL}/cms/book/list?search=${book}&page=1&count=2`);
    },

    get (creds = {}) {

        let route = '';
        if (!!creds._id) route = `&filter%5Bcategory%5D%5B%5D=${creds._id}`;
        return axios.get(`${BASE_URL}/mobile/book/list?page=1&count=15${route}`)
    },

    editImage (imageFile) {
        return axios.post(`${BASE_URL}/cms/image`, {
            profileImage: imageFile
        })
            .then(response => response.data)
            .catch(err => console.log(err))
    }

};