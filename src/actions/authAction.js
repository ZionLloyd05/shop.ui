import {GET_ERRORS,SET_CURRENT_USER} from '../actions/type';
import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import store from '../store';

// Register user
export const registerUser = (userData, history) => dispatch => {
    
    axios.post('/api/v1.0/auth/register', userData)
        .then(res => history.push('/login'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data  
            })
        );
}

// Login user
export const loginUser = (userData) => dispatch => {
    axios.post('/api/v1.0/auth/login', userData)
    .then(res => {
        // save token to local storage
        const {data} = res;
        // set token to Localstorage
        localStorage.setItem('jwtToken', data.data);
        // Set token auth header
        setAuthToken(data.data);
        // Decode token to get user data
        const decoded = jwt_decode(data.data);
        // Set current user
        dispatch(setCurrentUser(decoded));

        // check for expired token
        const currentTime = Date.now() / 1000;
        if(decoded.exp < currentTime){
            // log user out
            store.dispatch(logoutUser());

            window.location.href = '/login';
        }
    })
    .catch(err => 
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data  
        })
    );
}

// Log user out
export const logoutUser = () => dispatch => {
    // remove item from local storage;
    localStorage.removeItem('jwtToken');

    // remove auth header
    setAuthToken(false);

    // set curr user to {} and is authenticated = false
    dispatch(setCurrentUser({}));
}

// set logged in user
export const setCurrentUser = (decoded) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}