
import axios from 'axios';
import {AsyncStorage} from 'react-native';
import { loadUser2 } from '../actions/auth';

// export const setAuthToken = async (token) => {
//     if(token){ 
//       const value = await AsyncStorage.getItem('Usertoken');

//         console.log(`YOUR SETAUTHTOKEN ACTION: ${value}`)
//         axios.defaults.headers.common['x-auth-token'] = value;

//     }else {
//         delete axios.defaults.headers.common['x-auth-token'];
//     }
// }

 
export  const setToken = async (token) => {
    console.log(`SET TOKEN FIRED - whats right here ${token}`);
   
    if(token){
      const Mytoken = JSON.parse(token)
      const TheToken = Mytoken.token
      // const Stringed = JSON.stringify(Mytoken.token)
 
      // String(TheToken)
      
      axios.defaults.headers.common['x-auth-token'] = TheToken;
      console.log(`set auth token fired: ${TheToken}`)
      const HEADER = axios.defaults.headers
      console.log(`this is header in setToken: ${JSON.stringify(HEADER)}`) 
 
 
  }else {  
      delete axios.defaults.headers.common['x-auth-token'];
  } 
           
    try { 
      await AsyncStorage.setItem('Usertoken', token);

    } catch (error) {
      // Error retrieving data
    }
  };  

       

  export  const getAsyncStorage = async () => {
    console.log(`getItem auth token fired:`)
      
    try {  
       Value = await AsyncStorage.getItem('Usertoken');
        console.log(`THIS IS REAL TOKEN IN HEADER ${Value}`)
       const Mytoken = JSON.parse(Value)
        // const TheToken = JSON.stringify(Mytoken.token)
         const TheToken = Mytoken.token
      //  console.log(`what is vaue of header stripped down: ${Value}`)
     
       axios.defaults.headers.common['x-auth-token'] = TheToken;
        const HEADER = axios.defaults.headers
          
        console.log(`this is header getAsyncStorage: ${JSON.stringify(HEADER)}`) 
    } catch (error) {
      // Error retrieving data
    }
    
  };  






   
  export  const deleteAsyncStorage = async () => {
    try {
        const value = await AsyncStorage.removeItem('Usertoken');
        

        if (value !== null) {
          // We have data!!
          console.log(`DELETE ASYNC FIRED - HERES VALUE ${value}`);
        }
      } catch (error) {
        // Error retrieving data
      }
  };



// export default setAuthToken; 