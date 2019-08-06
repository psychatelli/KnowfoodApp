import React from 'react';
import { Container, View, Header, Content, Card, CardRecipeItem, Thumbnail, Text, Button, Icon, Left, Body,  } from 'native-base';
import { Image, TouchableWithoutFeedback } from 'react-native';
import stylesRC from '../../styles/StylesRecipeComponent';
import Step from './step'

const RecipeItem =  {
  thumbnail: "https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg",
  title: "new post ",
  ingredients: [],
  _id: "5cfc373ffc2258921932472a",
  username: "Adam Juan",
  avatar: "https://www.gravatar.com/avatar/23e9d550e766de28ddff7a8a81a490fb?s=200&r=pg&d=mm",
  user: "5cf52f27bd0aaf08a5879191",
  date: "2019-06-08T22:31:27.005Z",
  step: [
      {
          _id: "5cfc3d75e2d4d39514df325f",
          thumbnail: "https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg",
          text: "one step"
      },
      {
          _id: "5cfc3d7be2d4d39514df3260",
          thumbnail: "https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg",
          text: "another step"
      }
  ],
  likes: [],
  comments: [
      {
          date: "2019-06-29T14:10:54.285Z",
          _id: "5d17716e0ca09b696207d67e",
          text: "My comment",
          username: "Adam D",
          avatar: "https://www.gravatar.com/avatar/2675069ec8b9eb8c141e97cf92775f36?s=200&r=pg&d=mm",
          user: "5ced8fd90c50eaf96c72c91e"
      },
      {
          date: "2019-06-26T18:42:18.918Z",
          _id: "5d13bc8a380fb81f49faaccd",
          text: "Take this commnet",
          username: "Adam D",
          avatar: "https://www.gravatar.com/avatar/2675069ec8b9eb8c141e97cf92775f36?s=200&r=pg&d=mm",
          user: "5ced8fd90c50eaf96c72c91e"
      },
      {
          date: "2019-06-23T17:02:06.088Z",
          _id: "5d0fb08e61ea45855154df54",
          text: "How do you do the second step",
          username: "Adam Juan",
          avatar: "https://www.gravatar.com/avatar/23e9d550e766de28ddff7a8a81a490fb?s=200&r=pg&...",
          user: "5cf52f27bd0aaf08a5879191"
      }
  ]

}



export default class Recipe extends React.Component  {
      static navigationOptions =  ({ navigation }) =>{
        let headerTitle = 'Title in Component';
        let headerRight = (<Button><Text>Yay</Text></Button>)
        return { headerTitle, headerRight  }

        }

  render() {



    return (
      <Container style={{backgroundColor: '#282828'}}>
      <Header />
      <Content> 
        

        <View style={stylesRC.RecipeCardWrapper}>
              <View style={stylesRC.CardHeaderWrapper}>
                <View>  
        
                  <View style={stylesRC.HeaderInfo}>
                    <View style={stylesRC.ThumbnailWrapper}> 
                      <Thumbnail style={stylesRC.ThumbnailImage}   source={{uri: RecipeItem.avatar}} />
                    </View>
        
                    <View style={stylesRC.UserNameWrapper}> 
                    <Text style={stylesRC.Title}>{RecipeItem.title}</Text>
        
                    <Text style={stylesRC.UserName}>{RecipeItem.username}</Text>
                    </View>
                  </View> 
                        
                </View>
        
                    <View style={stylesRC.MenuWrapper}> 
                      <Text style={stylesRC.Menu}> ...</Text>
                    </View>
        
                </View>
        
                    <View style={stylesRC.PostImageWrapper}>
                      <Image style={stylesRC.PostImage} source={{uri: RecipeItem.thumbnail}}/>
                    </View>
        
              </View>


            <Step Step={RecipeItem.step} />

           <Button onPress={() => {
                /* 1. Navigate to the Details route with params */
                this.props.navigation.navigate('NativeBase', {
                  otherParam: 'anything you want here',
                });
              }}
            >
            <Text>Back to Recipes</Text>
          </Button>

         </Content>
      </Container>
    );
  }
}