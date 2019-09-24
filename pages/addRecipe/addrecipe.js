import React, { Component } from 'react'
import { connect } from 'react-redux';
 import {  addRecipe, getRecipes } from '../../actions/recipesAction';
 import { Container, View, Header, Content, Right, Title, Text, Button, Icon, Left, Body, Input, Form, Item  } from 'native-base';
 import { Image, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
 import stylesRC from '../../styles/StylesRecipeComponent';
 import styles from '../../styles/styles';

export class AddRecipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      thumbnail: 'https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg',
      ingredients: 'sald, pepper, onion'
     
    }
    this.onSubmit = this.onSubmit.bind(this)
}

// thumbnail: req.body.thumbnail,
// title: req.body.title,
// username: req.body.username,
// avatar: req.body.avatar,
// user: req.body.id,
// ingredients: req.body.ingredients,

    onSubmit() {
      // e.preventDefault();
      const AddedRecipe = {
        title: this.state.title,
        username: this.props.auth.username,
        thumbnail: this.state.thumbnail,
        avatar: this.props.auth.user.avatar,
        user: this.props.auth.user._id,
        ingredients: this.state.ingredients
      }   
        this.props.addRecipe(AddedRecipe);
      console.log(AddedRecipe)
        this.setState({ 
          title : '',
          // thumbnail : '',
        });
        this.props.getRecipes()

        this.props.navigation.navigate('EditRecipe')
      }



  render() {
    const { navigate } = this.props.navigation;


    return (
      <Container style={styles.CardBackground}> 

        <Header style={styles.DarkOpacityBackground}>
          <Left>
           
          </Left>
          <Body>
            <Title style={styles.AccentColor1Font}>Add Recipe</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text></Text>
            </Button>
          </Right>
        </Header>

      <Content> 
        <View>
              <View style={{margin: 10 }}> 
              <Input regular style={styles.LoginInput} 
              placeholder='Recipe Title'  value={this.state.title} 
              onChangeText={(title) => this.setState({title: title})} 
              />
              </View>
              <Button full style={styles.PrimaryButton} onPress={() => this.onSubmit()} ><Text>Submit</Text></Button>
              <Button full style={styles.PrimaryButton} onPress={() => navigate('Recipes')} ><Text>Cancel</Text></Button>
              

        </View>
    </Content>
    </Container>
    )
  }
}




const mapStateToProps = state => ({
  auth: state.auth

})

export default connect(mapStateToProps, { addRecipe, getRecipes})(AddRecipe)