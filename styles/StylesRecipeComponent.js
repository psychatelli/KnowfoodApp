
//import styles from './constants';
//import { primaryColor } from “../styles/common.js”;

import { StyleSheet, Platform } from 'react-native';
import {MidOpacity, CardBackground, DarkOpacity, LightOpacity, veryLightOpacity, PrimaryTextColor, SecondaryTextColor, AccentColor1, AccentColor2} from './styles';
let opacityBackground = 'rgba(40,44,42,0.5)'; 
let borderGray = '#d6d7da';
let lightGray = '#F1F1F3';
let lightGrayFont = '#8f8e8c';

let lightText = 'white';
let darkText = '#d6d7da';
let darkgray = '#515A5A';
let test = Platform.OS === 'ios' ? 'yellow'  : 'blue';
let MainObjectsColor = Platform.OS === 'ios' ? '#F8F8F8' : '#2c3d43';


const stylesRC = StyleSheet.create({

  RecipeCardWrapper: {
    backgroundColor: DarkOpacity,
    paddingBottom: 10,
    marginBottom: 10
  },

  CardHeaderWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    // borderColor: lightGray,
    padding: 10

  },

  HeaderInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },

Title: {
  fontWeight: 'bold',
  color: PrimaryTextColor
  },

ThumbnailWrapper: {
  marginRight: 5
},
ThumbnailImage: {

},
UserNameWrapper: {

},
UserName: {
  color: SecondaryTextColor
 
},
MenuWrapper: {

},
Menu: {
 color: 'white',
 fontSize: 25,
 padding: 10
},
PostImageWrapper: {
  flex: 1,
  height: 400,
 

},
PostImage: {
  // flex: 1,
  resizeMode: 'cover',
  width: '100%',
  height: 400,
},

RecipeStep: {
  flex: 1,
  flexDirection: 'column',
  margin: 5,
  borderRadius: 10,
  padding: 10,
  backgroundColor: LightOpacity
},
StepNumber: {
 fontSize: 15,
 color: SecondaryTextColor
},
StepInstructions: {
  marginBottom: 10,
  color: PrimaryTextColor
},

EditRecipe_Container: {
  marginTop: 30,
  padding: 10,
  backgroundColor: 'green'
},
Recipe_header: {
  backgroundColor: DarkOpacity,
  padding: 10,
},

Comment: {
  // backgroundColor: veryLightOpacity,
  padding: 10,
  // borderRadius: 10,
  marginVertical: 5,
  borderLeftColor: AccentColor1,
  borderBottomColor: MidOpacity,
  borderRightColor: MidOpacity,
  borderTopColor: MidOpacity,
  borderWidth: 2,

 
}
  

  });


export default stylesRC;


   
   