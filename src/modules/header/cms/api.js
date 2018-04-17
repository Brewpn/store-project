import axios from 'axios'

const BASE_URL = 'https://bookey-st.herokuapp.com';

const Authorize = {

    login (creds) {
        return axios.post(`${BASE_URL}/cms/auth/login`, {
            email: creds.username,
            password: creds.password
        })
    },

    logout () {
        return new Promise(resolve => setTimeout(resolve, 1000));
    },
};

export default Authorize;