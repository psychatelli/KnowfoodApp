import React, { Component } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Content, View, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,  } from 'native-base';
import stylesRC from '../../styles/StylesRecipeComponent';

export default class RecipeComponent extends Component {
  render() {
    const {Navigation, RecipeObj } = this.props;

    return (
      <Container style={stylesRC.MainBackground}>
        <Header />
        <Content>

          {
            RecipeObj.map(item=> (
            <View key={item._id} style={stylesRC.RecipeCardWrapper}>
              <View style={stylesRC.CardHeaderWrapper}>
                <View>  
        
                  <View style={stylesRC.HeaderInfo}>
                    <View style={stylesRC.ThumbnailWrapper}> 
                      <Thumbnail style={stylesRC.ThumbnailImage}   source={{uri: item.avatar}} />
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
                      <TouchableWithoutFeedback onPress={() => Navigation('Recipe')}> 
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