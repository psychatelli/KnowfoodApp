import React, {useEffect} from 'react';
import { Provider } from 'react-redux';
import store from './store';
import styles from './styles/styles';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './pages/auth/Login';
import { loadUser, removeToken  } from './actions/auth';
import {setAuthToken, getToken} from './utils/setAuthToken';
// import  from './utils/setAuthToken';

import {AsyncStorage, ActiveIndicator, StatusBar} from 'react-native';

 import NativeBase from './components/Component1/Nativebase1';
 import Recipes from './pages/recipes';
  import Recipe from './pages/Recipe/recipe';
  import Shipment from './pages/Shipment/shipment';
  import RecipeComponent from './components/RecipeComponent/recipeComponent';
  import { Container, View,   } from 'native-base';
 
 
  if(AsyncStorage.getItem('Usertoken')){
    // getToken()
   const token = AsyncStorage.getItem('Usertoken')
      
    // setAuthToken(token)
    console.log(`App.js token: ${JSON.stringify(token)}`)
    // loadUser()
  }   
 
  
// useScreens();
const storeInstance = store()

const RootStack = createStackNavigator(
  {
    Login: Login,
    
    RecipeComponent: RecipeComponent,
    Shipment: Shipment,
   
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

const AuthStack = createStackNavigator({ 
  Recipes: Recipes,
  Recipe: Recipe,
})



const AppContainer = createAppContainer(createSwitchNavigator(

  {
    RootStack: RootStack,
    AuthStack: AuthStack,
  },
  {
  }
));


 export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }


    render(){
      return(
        <Provider store={storeInstance}>
        <Container>
            <AppContainer/>
            <StatusBar barStyle='default'/>
        </Container>
        </Provider>
      )
    }

    
}
 




// const AppContainer = createAppContainer(RootStack);
// export default class App extends React.Component {

//   render() {
//     return (
//       <Provider store={storeInstance}>
//       <AppContainer />
//       </Provider>
//   )
//   }
// }








