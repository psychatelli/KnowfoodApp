import { REGISTER_SUCCESS, MYTOKEN, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT} from '../actions/types';
import {AsyncStorage} from 'react-native';

 


 
const initialState = {
    token: '',
    isAuthenticated: null,
    loading: true,
    user: null
};
    
 
export default function(state = initialState, action) {

    switch(action.type) {
        case MYTOKEN:
            console.log(`AUTH TOKEN REDUCER ${action.payload}`)
            return{
                ...state,
                token: action.payload
            }
        case USER_LOADED:
            
        return({
            ...state,
            isAuthenticated: true,
            loading: false,
            user: action.payload
        })
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:  

            return { 
                ...state,
                ...action.payload,
                token: action.payload,
                isAuthenticated: true,
                loading: false
            }      
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
            AsyncStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }  
        default:
         return state;
    }   
}    