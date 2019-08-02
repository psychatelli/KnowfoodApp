import React from 'react';
import {  View, Button } from 'react-native';
// import Footer_Nav from './components/common/footer_nav';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import Store from './store';
import { Provider } from 'react-redux';
// import Setup from "./boot/setup";
import './styles';
import Styles from "./styles/styles";
// import Tutorial from './tutorial';
 import NativeBase from './components/Component1/Nativebase1';
 import Recipes from './pages/recipes';
// import Head from './components/Header/header'
  import HomeScreen from './pages/Testing';
// import { useScreens } from 'react-native-screens';

// useScreens();

const RootStack = createStackNavigator(
  {
     Recipes: Recipes,
    HomeScreen: HomeScreen,
    
    // Tutorial: Tutorial,
    NativeBase: {
      screen: NativeBase,
      navigationOptions: ({ navigation}) => ({
        title: 'Profile For' + navigation.getParam('name')
      }),
    }
    
  },
  {
    
    defaultNavigationOptions: {
      gesturesEnabled: false,
      header: null,
      // headerMode: 'none',
      // mode: 'modal',

    },
  }
  
)


const AppContainer = createAppContainer(RootStack);


export default class App extends React.Component {
  render() {
    return (
    // <Head/>
    <AppContainer />
  )
  }
}




