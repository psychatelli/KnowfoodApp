import React, { Component } from 'react';
import { Image, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Content, View, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,  } from 'native-base';
import stylesRC from '../../styles/StylesRecipeComponent';

export default class RecipeComponent extends Component {
  render() {
    const {Navigation} = this.props;

    return (
      <Container>
        <Header />
        <Content>
          
    <View style={stylesRC.RecipeCardWrapper}>
      <View style={stylesRC.CardHeaderWrapper}>
        <View>  

          <View style={stylesRC.HeaderInfo}>
            <View style={stylesRC.ThumbnailWrapper}> 
              <Thumbnail style={stylesRC.ThumbnailImage}   source={{uri: 'https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg'}} />
            </View>

            <View style={stylesRC.UserNameWrapper}> 
            <Text style={stylesRC.Title}>Inchiladas</Text>

            <Text style={stylesRC.UserName}>Psychatetelli</Text>
            </View>
          </View> 
                
        </View>

            <View style={stylesRC.MenuWrapper}> 
              <Text style={stylesRC.Menu}> ...</Text>
            </View>

        </View>

            <View style={stylesRC.PostImageWrapper}>
              <TouchableWithoutFeedback onPress={() => Navigation('HomeScreen')}> 
              <Image style={stylesRC.PostImage} source={{uri: 'https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg'}}/>
            </TouchableWithoutFeedback>
            </View>

      </View>

      




      
      <View style={stylesRC.RecipeCardWrapper}>
      <View style={stylesRC.CardHeaderWrapper}>
        <View>  

          <View style={stylesRC.HeaderInfo}>
            <View style={stylesRC.ThumbnailWrapper}> 
              <Thumbnail style={stylesRC.ThumbnailImage}   source={{uri: 'https://photos.smugmug.com/Test/i-7fksTb3/0/cafb1120/M/Enchiladas-M.jpg'}} />
            </View>

            <View style={stylesRC.UserNameWrapper}> 
            <Text style={stylesRC.Title}>Inchiladas</Text>

            <Text style={stylesRC.UserName}>Psychatetelli</Text>
            </View>
          </View> 
                
        </View>

            <View style={stylesRC.MenuWrapper}> 
              <Text style={stylesRC.Menu}> ...</Text>
            </View>

        </View>

            <View style={stylesRC.PostImageWrapper}>
              <TouchableWithoutFeedback onPress={() => Navigation('HomeScreen')}> 
              <Image style={stylesRC.PostImage} source={{uri: 'https://photos.smugmug.com/Test/i-7fksTb3/0/cafb1120/M/Enchiladas-M.jpg'}}/>
            </TouchableWithoutFeedback>
            </View>

      </View>



        </Content>
      </Container>
    );
  }
}