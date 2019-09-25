import React, {Component} from 'react';

import { connect } from 'react-redux';

import { Container, View,  Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Title, Right, Header  } from 'native-base';
// import { Header } from 'react-native';
import { getRecipes, myAccessToken } from '../actions/recipesAction';
import { logout} from '../actions/auth';
 import { loadUser } from '../actions/auth';
import RecipeComponent from '../components/RecipeComponent/recipeComponent';
import Footer_Nav from '../components/common/footer_nav/footer_nav';
import styles from '../styles/styles';
import {setToken, getAsyncStorage, deleteAsyncStorage} from '../actions/utils/setAuthToken';



class Recipes extends Component {

  static navigationOptions = {
    // header: null,
    headerTitle:  'KnowFood',
    headerStyle: styles.FooterAndHeader,
    headerTitleStyle: { color: 'white'}    
  }

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
      console.log('you hit recipes!!!!')     
    }
 
  
   Logout = () => {
     this.props.logout()
   }
  
 
    static defaultProps = {
        message: 'Hi There'
    }
   
  render(){
    
    let name = this.state.showName ? this.state.name : 'No Name';
    const { navigate } = this.props.navigation;
    const { recipes, user, loading } = this.props;
 
    let BodyContent;
	
	
		if (user === null || loading)  {
		BodyContent = 	<Text>Loading...</Text>;
		} else {
		 
		BodyContent = (
        <Container>
         {/* <Text style={{fontSize: 30}}>{user.username}</Text> */} 
         
           
          <RecipeComponent Navigation={navigate} RecipeObj={recipes} />
          <Footer_Nav pageIndicator='0' Navigation={navigate}/>
        </Container> 
    )}
    
    return (
      <Container style={styles.CardBackground}>

          <Header style={styles.DarkOpacityBackground}>
          <Left>
           
          </Left>
          <Body>
            <Title style={styles.AccentColor1Font}>Recipes</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text></Text>
            </Button>
          </Right>
        </Header> 

        {BodyContent}
        </Container>
    )
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes.items,
  user: state.auth.user,  
})


export default connect(mapStateToProps, {getRecipes, logout, loadUser })(Recipes);
