import React, { Component } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Content, View, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,  } from 'native-base';
import stylesRC from '../../styles/StylesRecipeComponent';
import styles from '../../styles/styles';
import { getRecipe } from '../../actions/recipesAction';
import { connect } from 'react-redux';
// import console = require('console');

 class RecipeComponent extends Component {
  render() {
    const {Navigation, RecipeObj } = this.props;

 
    getRecipeID = (id) => {
      this.props.getRecipe(id);
      this.props.Navigation('Recipe')
      
    }
 
    return (
      <Container style={styles.CardBackground}>
        <Content>
 
          {
            RecipeObj.map(item=> (
            <View key={item._id} style={stylesRC.RecipeCardWrapper}>
              <View style={stylesRC.CardHeaderWrapper}>
                <View>  
                   <View style={stylesRC.HeaderInfo}>
                    <View style={stylesRC.ThumbnailWrapper}> 
                      <Thumbnail style={stylesRC.ThumbnailImage}   source={{uri: `https:${item.avatar}`}} />
                    </View>
        
                    <View style={stylesRC.UserNameWrapper}> 
                      <Text style={stylesRC.Title}>{item.title}</Text>
                      <Text style={stylesRC.UserName}>{item.username}</Text>
                    </View>
                  </View> 
                </View>
        
                    <View style={stylesRC.MenuWrapper}> 
                      <Text style={stylesRC.Menu}> ...</Text>
                    </View>
        
              </View>
        
                    <View style={stylesRC.PostImageWrapper}>
                      <TouchableWithoutFeedback onPress={() => getRecipeID(item._id)}> 
                      <Image style={stylesRC.PostImage} source={{uri: item.thumbnail}}/>
                    </TouchableWithoutFeedback>
                    </View>
              </View>
            ))
          }
  
        </Content>
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  // auth: state.auth
  
})


export default connect(mapStateToProps, {getRecipe })(RecipeComponent);
