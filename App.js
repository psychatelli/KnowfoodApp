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
  import NewRecipePost from './components/NewRecipePost/newRecipePost';
  import RecipeComponent from './components/RecipeComponent/recipeComponent';
  import { Container, View, Text  } from 'native-base';
 
  import { ActionSheetProvider } from '@expo/react-native-action-sheet'

  

 
  
// useScreens();
const storeInstance = store()

const RootStack = createStackNavigator(

  {
    Login: Login,
    RecipeComponent: RecipeComponent,
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
 
  },
 
  
)
   
const AuthStack = createSwitchNavigator({ 
  Recipes: Recipes,
  Recipe: Recipe,
  EditRecipe: EditRecipe,
  NewRecipePost: NewRecipePost 
})



class AuthLoadingScreen extends Component {
  
  constructor(props){
    super(props);
    this._loadData()
    
  }

     _loadData = async () => {
            try{
                const StorageItem = await AsyncStorage.getItem('Usertoken');
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



const App = () => {

  useEffect(() => {
    storeInstance.dispatch(AuthorizedUser());
    });
    
  return( 
    <Provider store={storeInstance}>
            <ActionSheetProvider>

    <Container>
        <AppContainer/>
        <StatusBar barStyle='default'/>

    </Container>
    </ActionSheetProvider>
    </Provider>
  )


}

export default App







