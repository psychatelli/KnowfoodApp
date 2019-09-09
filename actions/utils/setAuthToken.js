
import axios from 'axios';
import {AsyncStorage} from 'react-native';

 
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
      
    try {  
       Value = await AsyncStorage.getItem('Usertoken');
       const Mytoken = JSON.parse(Value)
         const TheToken = Mytoken.token
     
       axios.defaults.headers.common['x-auth-token'] = TheToken;
        const HEADER = axios.defaults.headers
            
    } catch (error) {
      // Error retrieving data
    }
    
  };  

  

  export  const deleteAsyncStorage = async () => {
    try {
        const value = await AsyncStorage.removeItem('Usertoken');
        

        if (value !== null) {
          // We have data!!
        }
      } catch (error) {
        // Error retrieving data
      }
  };


