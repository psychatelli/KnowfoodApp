
//import styles from './constants';
//import { primaryColor } from “../styles/common.js”;

import { StyleSheet, Platform } from 'react-native';
 import GlobalStyles from './styles';

let opacityBackground = 'rgba(40,44,42,0.5)'; 
let borderGray = '#d6d7da';
let lightGray = '#F1F1F3';
let lightGrayFont = '#8f8e8c';

let lightText = 'white';
let darkText = '#d6d7da';
 let wittwerBlue = '#00aeef';
let darkgray = '#515A5A';
let test = Platform.OS === 'ios' ? 'yellow'  : 'blue';
let MainObjectsColor = Platform.OS === 'ios' ? '#F8F8F8' : '#2c3d43';


const stylesRC = StyleSheet.create({

  RecipeCardWrapper: {
    backgroundColor: lightGray,
    marginTop: 10,
  },

  CardHeaderWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: lightGray,
    padding: 10

  },

  HeaderInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },

Title: {
  fontWeight: 'bold'
  },

ThumbnailWrapper: {
  marginRight: 5
},
ThumbnailImage: {

},
UserNameWrapper: {

},
UserName: {
  color: lightGrayFont
 
},
MenuWrapper: {

},
Menu: {

},
PostImageWrapper: {
  flex: 1,
  height: 400

},
PostImage: {
  // flex: 1,
  resizeMode: 'cover',
  width: '100%',
  height: 400,
},



  

  });


export default stylesRC;


   
   