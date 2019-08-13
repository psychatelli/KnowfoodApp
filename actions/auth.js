import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from './types';
import axios from 'axios';
import { setAlert } from './alert';
import {setAuthToken, setToken, deleteAsyncStorage} from '../utils/setAuthToken'
import {AsyncStorage} from 'react-native';







// export const removeToken = () => async dispatch => {

//     console.log('ran removeToken Action')
//     try {
//         await AsyncStorage.removeItem('token');
//         return true;
//       }
//       catch(exception) {
//         return false;
//       }

// } 

export const loadUser = (token) => async dispatch => {
    console.log(`loaduser token: ${token}`)

    if(token){
        // setAuthToken(token)
        setToken(token)
    }

    try{
        const res = await axios.get('http://10.0.0.85:5000/api/auth');
        console.log(`USER DATA FROM LOADUSER ACTION: ${res.data}`)
        dispatch({
            type: USER_LOADED,
            payload: res.data
        })

        const Data = JSON.stringify(res.data)
        console.log(`LOADUSER ACTION USER DATA ${Data.username}`)

              // await AsyncStorage.setItem('Usertoken', TheToken);

  
    }catch(err){
        console.log('loaduser error')

        dispatch({ 
            type: AUTH_ERROR
        })
    }

} 
 
export const register = ({username, email, password }) => async dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    
    const body = JSON.stringify({ username, email, password});

    try{
        const res = await axios.post('http://10.0.0.85:5000/api/users', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        })

        dispatch(loadUser())

    }catch(err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch( setAlert(error.msg, 'danger') ))
        }
        dispatch({
            type: REGISTER_FAIL
        })
    }
} 



export const login = ({email, password}) => async dispatch => {
    console.log(`LOGIN ACTION FIRED`)
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    
    const body = JSON.stringify({ email, password});

    try{
        const res = await axios.post('http://10.0.0.85:5000/api/auth', body, config);
        //  AsyncStorage.setItem('token', res.data);
        // console.log(`LOGIN ACTION DATA: ${JSON.stringify(res.data)}`)
            let token = JSON.stringify(res.data);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: token,
        })

        dispatch(loadUser(token))

    }catch(err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger') ))
        }
        dispatch({
            type: LOGIN_FAIL
        })
    }
} 


export const logout = () => dispatch => {
    deleteAsyncStorage()
    console.log('logout action fired');
    dispatch({ type: LOGOUT })
}
