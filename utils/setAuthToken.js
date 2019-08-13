
import axios from 'axios';
import {AsyncStorage} from 'react-native';

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
    console.log(`SET TOKEN FIRED`);
  
    if(token){
      const Mytoken = JSON.parse(token)
      const TheToken = Mytoken.token
      axios.defaults.headers.common['x-auth-token'] = TheToken;
  }else {  
      delete axios.defaults.headers.common['x-auth-token'];
  }
      
    try {
      await AsyncStorage.setItem('Usertoken', 'Adams Awsome');

    } catch (error) {
      // Error retrieving data
    }

    
  };

 
  export  const getAsyncStorage = async () => {
    try {
        const value = await AsyncStorage.getItem('Usertoken');
        console.log(`GETTOKEN FIRED - HERES VALUE ${value}`);


        if (value !== null) {
          // We have data!!
        }
      } catch (error) {
        console.log(`NO TOKEN`);

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