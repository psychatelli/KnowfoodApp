import React from 'react';
import { Provider } from 'react-redux';
import Store from './store';

import {  View, Button } from 'react-native';
// import Footer_Nav from './components/common/footer_nav';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import Setup from "./boot/setup";
// import Tutorial from './tutorial';
 import NativeBase from './components/Component1/Nativebase1';
 import Recipes from './pages/recipes';
// import Head from './components/Header/header'
  import Recipe from './pages/Recipe/recipe';
  import Shipment from './pages/Shipment/shipment';
  import RecipeComponent from './components/RecipeComponent/recipeComponent';
// import { useScreens } from 'react-native-screens';

// useScreens();
const storeInstance = Store()

const RootStack = createStackNavigator(
  {
    Recipes: Recipes,
    RecipeComponent: RecipeComponent,
    Shipment: Shipment,
    Recipe: Recipe,
    NativeBase: {
      screen: NativeBase,
      navigationOptions: ({ navigation}) => ({
        title: 'Profile For' + navigation.getParam('name'),
        cardStyle: {backgroundColor: 'red'},
        headerTintColor: 'blue'

      }),
    } 
  },
  {
    
    defaultNavigationOptions: {
      // headerStyle: {
      //   backgroundColor: '#28F1A6',
      //   elevation: 0,
      //   shadowOpacity: 0
      // },
      // headerTintColor: '#333333',
      // headerTitleStyle: {
      //     fontWeight: 'bold',
      //     color: '#ffffff'
      // },
      // mode: 'modal',

    },

  },
  // {
  //   headerMode: 'screen',
  // },

  
)


const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={storeInstance}>
    <AppContainer />
    </Provider>
  )
  }
}




