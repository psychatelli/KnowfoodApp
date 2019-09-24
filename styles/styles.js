
//import styles from './constants';
//import { primaryColor } from “../styles/common.js”;

import { StyleSheet, Platform } from 'react-native';
import { whileStatement } from '@babel/types';



export let DarkOpacity =  'rgba(40, 40, 40, 0.482)';
export let MidOpacity =  'rgba(87, 86, 86, 0.482)';
export let LightOpacity =  'rgba(188, 186, 186, 0.222)';
export let veryLightOpacity = 'rgba(205, 203, 203, 0.859)'

export let PrimaryTextColor = 'white';
export let SecondaryTextColor = 'rgba(42, 231, 171, 0.564)';


export let CardBackground = '#4a4a49';
export let AccentColor1 = '#2AE7AA';
export let AccentColor2 = '#1D1D8D';



// let test = Platform.OS === 'ios' ? 'yellow'  : 'blue';
// let MainObjectsColor = Platform.OS === 'ios' ? '#F8F8F8' : '#2c3d43';


const GlobalStyles = StyleSheet.create({

  Show: {
    display: 'flex',
  },
  Hide: {
    display: 'none',
  },
  AccentColor1Font: {
    color: AccentColor1
  },
  AccentColor1Background: {
    backgroundColor: AccentColor1
  },
  FooterAndHeader: {
    backgroundColor: '#5c5c58'
  },
  DarkOpacityBackground: {
    backgroundColor: DarkOpacity,
 
  },
  MidOpacityBackground: {
    backgroundColor: MidOpacity,

  },
  LightOpacityBackground: {
    backgroundColor: LightOpacity,

  },
  InputStyle: {
    backgroundColor: 'white',
    marginBottom: 10,
  },

  PrimaryButton: {
    backgroundColor: AccentColor1,
    marginTop: 10,
    marginBottom: 10,
  },

// START STYLING INFORMATION SECTIONS 
    CardBackground: {
      backgroundColor: CardBackground,
    },
    loginWrapper: {
      // backgroundColor: '#202649',
      backgroundColor: CardBackground,
      color: PrimaryTextColor,
      paddingRight: 20,
      paddingLeft: 20,
      justifyContent: 'center',      
    },
    LoginContainer: {
      // backgroundColor: LightOpacity,
      padding: 10
    },
    LoginTitle: {
      alignSelf: 'center',
      fontSize: 30,
      color: PrimaryTextColor,
      marginBottom: 40
    },

    custom_wrapper: {
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#d6d7da',
      marginBottom: 10,
      // backgroundColor: lightGrayBG,
    },

    title_font: {
      color: 'white',
    },
    white_font: {
      color: 'white',
    },

    custom_label: { 
      backgroundColor: 'white',
      padding: 10,
      marginBottom: 5,
      borderLeftWidth: 1,
      color: SecondaryTextColor,
      fontSize: 20,
    },

    custom_label_text: {
      color: SecondaryTextColor,
      fontSize: 20,
      //fontWeight: '500', 
    },

    custom_text: {
      color: SecondaryTextColor,
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

        // shadowOffset:{  width: 5,  height: 5,  },
        // shadowColor: 'gray',
        // shadowOpacity: 1.0, 
    },

   
    danger: {
      backgroundColor: '#F37463',
      padding: 10,
      marginTop: 10,
      marginBottom: 10,
      color: 'white',
    },  
 

    inputStyle: {
      flex: 1,
      height: 40, 
      marginBottom: 5,
      borderBottomWidth: 1,
      borderColor: '#d6d7da',
      margin: 5,
    },

    SpaceBetween: {
      flex: 1,
      flexDirection: 'row', 
      width: '100%', 
      justifyContent: 'space-between', 
      marginBottom: 10,
      alignItems: 'center',

    },

    AddRecipeBtn: {
      borderRadius: 50,
      width: 45,
      marginHorizontal: 'auto'
    },
    Center: {
      flex: 1,
      width: '100%', 
      padding: 5,
      justifyContent: 'center',
      backgroundColor: 'red'
    }

  

});


export default GlobalStyles;



  