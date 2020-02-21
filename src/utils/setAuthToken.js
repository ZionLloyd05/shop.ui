import axios from 'axios';

const setAuthToken = token => {
    if(token) {
        // apply token to all request
        axios.defaults.headers.common['Authorizeion'] = token;
    }else {
        // delete auth header
        delete axios.defaults.headers.common['Authorization'];
    }
};


export default setAuthToken;