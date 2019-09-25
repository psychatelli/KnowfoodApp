import React, { Component } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Content, View, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,  } from 'native-base';
import stylesRC from '../../styles/StylesRecipeComponent';
import styles from '../../styles/styles';
import { getRecipe, getUsersRecipes } from '../../actions/recipesAction';
import { getProfile } from '../../actions/profileActions';
import { connect } from 'react-redux';
// import console = require('console');

 class RecipeComponent extends Component {


  getRecipeID = (id) => {
    this.props.getRecipe(id);
    this.props.Navigation('Recipe')
    
  }


  getProfile = (profileID) =>{
    this.props.getProfile(profileID)
    this.props.getUsersRecipes(profileID)
    this.props.Navigation('Profile')
  }


  render() {
    const {Navigation, RecipeObj } = this.props;

 
    
 
    return (
        <Content style={styles.CardBackground}>
 
          {
            RecipeObj.map(item=> (
            <View key={item._id} style={stylesRC.RecipeCardWrapper}>
              <View style={stylesRC.CardHeaderWrapper}>
                <View>
                   <View style={stylesRC.HeaderInfo}>
                    <Button transparent onPress={() => this.getProfile(item.user)}  style={stylesRC.ThumbnailWrapper}> 
                      <Thumbnail style={stylesRC.ThumbnailImage}   source={{uri: `https:${item.avatar}`}} />
                    </Button>
        
                    <View style={stylesRC.UserNameWrapper}> 
                      <Text style={stylesRC.Title}>{item.title}</Text>
                      <Text style={stylesRC.UserName}>{item.username}</Text>
                    </View>
                  </View> 
                </View>
        
                    
        
              </View>
        
                    <View style={stylesRC.PostImageWrapper}>
                      <TouchableWithoutFeedback onPress={() => this.getRecipeID(item._id)}> 
                      <Image style={stylesRC.PostImage} source={{uri: item.thumbnail}}/>
                    </TouchableWithoutFeedback>
                    </View>
              </View>
            ))
          }
  
        </Content>
    );
  }
}


const mapStateToProps = state => ({
   auth: state.auth
  
})


export default connect(mapStateToProps, {getRecipe, getProfile, getUsersRecipes })(RecipeComponent);
