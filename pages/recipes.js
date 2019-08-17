import React, {Component} from 'react';

import { connect } from 'react-redux';

import { Container, View,  Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,  } from 'native-base';
import { Header } from 'react-native';
import { getRecipes, myAccessToken } from '../actions/recipesAction';
import { logout} from '../actions/auth';
 import { loadUser } from '../actions/auth';
import RecipeComponent from '../components/RecipeComponent/recipeComponent';
import stylesRC from '../styles/StylesRecipeComponent';
// import styles from '../styles/styles';
import {setToken, getAsyncStorage, deleteAsyncStorage} from '../utils/setAuthToken';


 

class Recipes extends Component {

   
 
  // static navigationOptions = {
  //   title: 'Home',
  //   headerStyle: {
  //     backgroundColor: '#f4511e',
  //   },
  //   headerTintColor: '#fff',
  //   headerTitleStyle: {
  //     fontWeight: 'bold',
  //   },
  // };

          // One example
          // static navigationOptions = ({ navigation }) => ({
          //   backgroundColor: 'rgba(40, 40, 40, 0.482)',
          // })

        //   static navigationOptions =  ({
        //      backgroundColor: 'rgba(40, 40, 40, 0.482)',
        // })

    constructor(props){
        super(props);
        this.state = {
            name: 'Hi Recipes',
            showName: true,
            message: this.props.message
        }
    }
 
              
    componentDidMount() {
      
    // deleteAsyncStorage()  
      this.props.getRecipes();
      // this.props.myAccessToken()
      // this.props.logout()

      if(this.props.user){
        console.log(`YOU HAVE A USER`)
      }
    }

  // componentDidUpdate() {
  //   // store.dispatch(loadUser());  
  // }
 
   Logout = () => {
     this.props.logout()
   }


    static defaultProps = {
        message: 'Hi There'
    }

  render(){
    
    let name = this.state.showName ? this.state.name : 'No Name';
    const { navigate } = this.props.navigation;
    const { recipes, user } = this.props;

 
    return (
       <Container>
         <Text style={{fontSize: 30}}>{user.username}</Text>

          <RecipeComponent Navigation={navigate} RecipeObj={recipes} />
          <Button onPress={() => Logout()}><Text style={{fontSize: 30}}>LOGOUT</Text></Button>
        </Container> 
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.items,
  user: state.auth.user,  
})


export default connect(mapStateToProps, {getRecipes, logout, loadUser })(Recipes);
