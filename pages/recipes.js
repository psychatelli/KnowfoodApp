import React, {Component} from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,  } from 'native-base';

import RecipeComponent from '../components/RecipeComponent/recipeComponent';
// import Head from '../components/Header/header';
import HomeScreen from './Testing';

export default class Recipes extends Component {

  // One example
  // static navigationOptions = ({ navigation }) => ({
  //   header: null,
  // })

  static navigationOptions =  ({
    title: 'Recipes',
  })



    constructor(props){
        super(props);
        this.state = {
            name: 'Hi Recipes',
            showName: true,
            message: this.props.message
        }
    }

    static defaultProps = {
        message: 'Hi There'
    }

  render(){
    console.log('Hi')
    let name = this.state.showName ? this.state.name : 'No Name';
    const { navigate } = this.props.navigation;
    return (
        <Container> 
          {/* <Head/> */}
        
        <RecipeComponent Navigation={navigate}/>

        </Container>
    )
  }
}

