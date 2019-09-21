import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from './types';
import axios from 'axios';
import { setAlert } from './alert';
import {setAuthToken, setToken, getAsyncStorage, deleteAsyncStorage} from './utils/setAuthToken'
import {AsyncStorage} from 'react-native';

 
const MyToken = {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNWNlZDhmZDkwYzUwZWFmOTZjNzJjOTFlIn0sImlhdCI6MTU2NjIzMDQ2MCwiZXhwIjoxNTY2MjY2NDYwfQ.irJnctH34aYFJXXK7Kt7gqRFzxPxlwY4kvCeHsBlp_U"}
 
export const AuthorizedUser = () => async dispatch => {
   
    
 
    try{

        token = await AsyncStorage.getItem('Usertoken');
        // console.log(`observing token: ${token}`)
        const config = {
            headers: { 
                'Content-type': 'application/json',
            }
        }

        
        const res = await axios.post('http://192.168.254.10:5000/api/auth/getuser', token, config);
    
       

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
        
  
    }catch(err){
        // console.log('loaduser error')

        dispatch({ 
            type: AUTH_ERROR
        })
    }

} 




export const loadUser = (token) => async dispatch => {

    // console.log(`loaduser fired here boy ${token}`)
    if(token){
        setToken(token)


    }else{
         getAsyncStorage()

    }
         
    try{
        const res = await axios.get('http://192.168.254.10:5000/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
        
  
    }catch(err){
        // console.log('loaduser error')

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
        const res = await axios.post('http://192.168.254.10:5000/api/users', body, config);
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
    // console.log(`LOGIN ACTION FIRED`)
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
      
    const body = JSON.stringify({ email, password});

    try{
        const res = await axios.post('http://192.168.254.10:5000/api/auth', body, config);
       
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
    // console.log('logout action fired');
    dispatch({ type: LOGOUT })
}
