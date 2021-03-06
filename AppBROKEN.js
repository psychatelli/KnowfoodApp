import React from 'react';
import {  View, Button } from 'react-native';
import Footer_Nav from './components/common/footer_nav';
import { createStackNavigator, createAppContainer, createNavigationContainer } from 'react-navigation';
// import Store from './store';
import { Provider } from 'react-redux';
// import Setup from "./boot/setup";
import Styles from "./styles/styles";
import Tutorial from './tutorial';
 import NativeBase from './components/Component1/Nativebase1';
 import Recipes from './pages/recipes';
import Head from './components/Header/header'
import HomeScreen from './pages/Testing';
// import { useScreens } from 'react-native-screens';

// useScreens();

const RootStack = createStackNavigator(
  {
    // Recipes: Recipes,
    // HomeScreen: HomeScreen,
    Tutorial: Tutorial,
    // NativeBase: {
    //   screen: NativeBase,
    //   navigationOptions: ({ navigation}) => ({
    //     title: 'Profile For' + navigation.getParam('name')
    //   }),
    // }
  },
   {
    initialRouteName: 'Tutorial',
    defaultNavigationOptions: {
      // header: null,
      // mode: 'modal',
      headerMode: 'none',
      headerBackTitleVisible: false,
      headerTransitionPreset: 'fade-in-place',
      headerLayoutPreset: 'left',
      cardStyle: {
        backgroundColor: 'orange',
      },

      // headerStyle: {
      //   backgroundColor: 'lightblue',
      // },
      // headerTintColor: 'white',
      // headerTitleStyle: {
      //   textAlign: 'center',
      //   flex: 1
      // }
  } 
}
);

const AppContainer = createNavigationContainer(RootStack);


export default class App extends React.Component {
  render() {
    return (
    // <Head/>
    <AppContainer />
  )
  }
}




