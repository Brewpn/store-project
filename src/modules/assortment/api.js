import axios from 'axios'

const BASE_URL = 'https://bookey-st.herokuapp.com';

export class AxiosCategories {
    static add (creds) {
        return axios.post(`${BASE_URL}/cms/category`, {
            title: creds.title,
            description: creds.description
        });
    }

    static get (page) {
        return axios.get(`${BASE_URL}/cms/category/list`)
    }

    static edit (creds) {

        return axios.put(`${BASE_URL}/cms/category/${creds._id}`, {...creds});
    }
}

export class AxiosBooks {
    add (creds) {
        return axios.post(`${BASE_URL}/cms/category`, {
            title: creds.title,
            description: creds.description
        })
            .then(response => response.data)
            .catch(error => {console.log('Error : ' + error)});
    }

    static search (book) {
        return axios.get(`${BASE_URL}/cms/book/list?search=${book}&page=1&count=2`);
    }

    static get (creds = {}) {

        let route = '';
        if (!!creds._id) route = `&filter%5Bcategory%5D%5B%5D=${creds._id}`;
        return axios.get(`${BASE_URL}/mobile/book/list?page=1&count=15${route}`)
    }

    static editImage (imageFile) {
        console.log(imageFile);
        return axios.post(`${BASE_URL}/cms/image`, imageFile)
            .then(response => response.data)
            .catch(err => console.log(err))
    }

    static edit (editedBook) {
        return axios.put(`${BASE_URL}/cms/book/${editedBook._id}`, editedBook)
    }

}