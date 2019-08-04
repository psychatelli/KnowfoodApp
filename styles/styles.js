
//import styles from './constants';
//import { primaryColor } from “../styles/common.js”;

import { StyleSheet, Platform } from 'react-native';



let opacityBackground = 'rgba(40,44,42,0.5)'; 
let borderGray = '#d6d7da';
let lightGrayBG = '#F1F1F3';

let lightText = 'white';
let darkText = '#d6d7da';
export let wittwerBlue = '#00aeef';
let darkgray = '#515A5A';
let test = Platform.OS === 'ios' ? 'yellow'  : 'blue';
let MainObjectsColor = Platform.OS === 'ios' ? '#F8F8F8' : '#2c3d43';


const GlobalStyles = StyleSheet.create({
  
  wittwerBlueFont : {
    color: '#00aeef',
  },
  Card: {
    backgroundColor: lightGrayBG
  },

 

// START STYLING INFORMATION SECTIONS    
  
    custom_wrapper: {
      //backgroundColor: opacityBackground,
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#d6d7da',
      marginBottom: 10,
      backgroundColor: lightGrayBG,
    },

    title_font: {
      color: 'white',
    },

    custom_label: { 
      backgroundColor: 'white',
      padding: 10,
      marginBottom: 5,
      borderLeftWidth: 1,
      borderColor: wittwerBlue,
      color: 'gray',
      fontSize: 20,
    },

    custom_label_text: {
      color: 'gray',
      fontSize: 20,
      //fontWeight: '500', 
    },

    custom_text: {
      color: 'gray',
      marginLeft: 5,
    },

    wrap: {
      flex: 1,
      flexWrap: 'wrap',
    },

    FlexRow: {
      flex: 1,
      flexDirection: 'row', 
    },
  
    custom_row: {
      flex: 1,
      marginBottom: 15,

    },

// END STYLING INFORMATION SECTIONS

    Carditem_Wrapper: { 
        flex: 1, 
        padding: 5, 
        flexDirection: 'row', 
        height: 'auto', 
        width: '100%', 
        justifyContent: 'space-between', 
        marginBottom: 5,
        borderLeftWidth: 2, 
        borderColor: wittwerBlue,
        backgroundColor: opacityBackground,

        // shadowOffset:{  width: 5,  height: 5,  },
        // shadowColor: 'gray',
        // shadowOpacity: 1.0, 
    },

   

 

    inputStyle: {
      flex: 1,
      height: 40, 
      marginBottom: 5,
      borderBottomWidth: 1,
      borderColor: '#d6d7da',
      margin: 5,
    },

   

    TextLight: {
      color: lightText,
      padding: 2,
      
    },

    TextDark: {
      color: darkText,
      padding: 2,
     
    },

  

});


export default GlobalStyles;



  