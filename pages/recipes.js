import React, {Component} from 'react';
import { Container, View, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,  } from 'native-base';

import RecipeComponent from '../components/RecipeComponent/recipeComponent';


const RecipeObj = [
  {
    thumbnail: 'https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg',
    title: 'Fettuccine',
    username: 'Adam D',
    avatar: 'https://www.gravatar.com/avatar/2675069ec8b9eb8c141e97cf92775f36?s=200&r=pg&d=mm',
    date: 'Jan 3, 2019'
  },
  {
    thumbnail: 'https://photos.smugmug.com/Test/i-n2csRzx/0/1d20a7a3/S/taco1-S.jpg',
    title: 'Tacos',
    username: 'Adam D',
    avatar: 'https://www.gravatar.com/avatar/2675069ec8b9eb8c141e97cf92775f36?s=200&r=pg&d=mm',
    date: 'Jan 3, 2019'
  },
  {
    thumbnail: 'https://photos.smugmug.com/Test/i-7fksTb3/0/cafb1120/M/Enchiladas-M.jpg',
    title: 'Salad',
    username: 'Adam D',
    avatar: 'https://www.gravatar.com/avatar/2675069ec8b9eb8c141e97cf92775f36?s=200&r=pg&d=mm',
    date: 'Jan 3, 2019'
  },
]


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
    
    let name = this.state.showName ? this.state.name : 'No Name';
    const { navigate } = this.props.navigation;

    


    return (
        <Container>  
          {/* <Head/> */}
        
        <RecipeComponent Navigation={navigate} RecipeObj={RecipeObj}/>

        </Container> 
    )
  }
}

