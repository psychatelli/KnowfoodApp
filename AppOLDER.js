import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import styles from './styles/styles';
import {  View, Button } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from './pages/auth/Login';
import { loadUser } from './actions/auth';

import setAuthToken from './utils/setAuthToken';
import {AsyncStorage} from 'react-native';

 import NativeBase from './components/Component1/Nativebase1';
 import Recipes from './pages/recipes';
  import Recipe from './pages/Recipe/recipe';
  import Shipment from './pages/Shipment/shipment';
  import RecipeComponent from './components/RecipeComponent/recipeComponent';


  // if(AsyncStorage.token){
  //   setAuthToken(AsyncStorage.token)
  //   console.log('App.js token in AsyncStorage')
  // }


// useScreens();
const storeInstance = store()

const RootStack = createStackNavigator(
  {
    Login: Login,
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
      headerStyle: {
        backgroundColor: '#303451',
      },
      headerTintColor: '#2AE7AA',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      
     

    },
    containerStyle: {
      backgroundColor: 'blue'
    }
  },
 
  
)


const AppContainer = createAppContainer(RootStack);


// export default class App extends React.Component {

//   render() {
//     return (
//       <Provider store={storeInstance}>
//       <AppContainer />
//       </Provider>
//   )
//   }
// }

const App = () => {

 

  return(
    <Provider store={storeInstance}>
    <AppContainer />
    </Provider>
  )
}
export default App;




