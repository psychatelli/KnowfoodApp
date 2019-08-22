import React,  {useEffect, Component} from 'react';

import { Provider } from 'react-redux';
import store from './store';
import styles from './styles/styles';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from './pages/auth/Login';
import { AuthorizedUser, removeToken  } from './actions/auth';
// import {setAuthToken, getToken, getAsyncStorage} from './utils/setAuthToken';
// import  from './utils/setAuthToken';
import {AsyncStorage, ActiveIndicator, StatusBar} from 'react-native';

 import NativeBase from './components/Component1/Nativebase1';
 import Recipes from './pages/recipes';
  import Recipe from './pages/Recipe/recipe';
  import EditRecipe from './pages/Recipe/EditRecipe/editRecipe';
  import Shipment from './pages/Shipment/shipment';
  import RecipeComponent from './components/RecipeComponent/recipeComponent';
  import { Container, View, Text  } from 'native-base';
 
   
  

 
  
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
    },
     
  },
  {
    
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#303451',
    //   },
    //   headerTintColor: '#2AE7AA',
    //   headerTitleStyle: {
    //     fontWeight: 'bold',
    //   }
    // },
   
    
  },
 
  
)

const AuthStack = createStackNavigator({ 
  Recipes: Recipes,
  Recipe: Recipe,
  EditRecipe: EditRecipe
  
  
})



class AuthLoadingScreen extends Component {
  
  constructor(props){
    super(props);
    this._loadData()
    
  }

     _loadData = async () => {
            try{
                console.log('_retrieveAsyncStorage FIRED');
                const StorageItem = await AsyncStorage.getItem('Usertoken');
                console.log(StorageItem)
                  this.props.navigation.navigate(StorageItem ? 'AuthStack' : 'RootStack');
            }catch (error) {
             // Error retrieving data
            }        
        };
 
 componentDidMount(){
 }


    render(){
      return(
        <View>
          {/* <ActiveIndicator/> */}
          <StatusBar barStyle="default"/>

          <Text>Your Screen</Text>
        </View>
      )
    }

  }

  const AppContainer = createAppContainer(createSwitchNavigator(

    {
      AuthLoadingScreen: AuthLoadingScreen,
      RootStack: RootStack,
      AuthStack: AuthStack,

    },
    {
    }
  ));

//  export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }



//     render(){
//       return(
//         <Provider store={storeInstance}>
//         <Container>
//             <AppContainer/>
//             <StatusBar barStyle='default'/>
//         </Container>
//         </Provider>
//       )
//     }
   
    
// }

const App = () => {

  useEffect(() => {
    storeInstance.dispatch(AuthorizedUser());
    });
    
  return( 
    <Provider store={storeInstance}>
    <Container>
        <AppContainer/>
        <StatusBar barStyle='default'/>

    </Container>
    </Provider>
  )


}

export default App







