import React from 'react';
import { connect } from 'react-redux';

import { Container, View, Header, Content, Card, CardRecipeItem, Thumbnail, Text, Button, Icon, Left, Body,  } from 'native-base';
import { Image, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import stylesRC from '../../styles/StylesRecipeComponent';
import styles from '../../styles/styles';

import Step from './step'
const RecipeObj = {
  
    thumbnail: 'https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg',
    title: 'Fettuccine',
    username: 'Adam D',
    avatar: 'https://www.gravatar.com/avatar/2675069ec8b9eb8c141e97cf92775f36?s=200&r=pg&d=mm',
    date: 'Jan 3, 2019',
  
  step: [
    {
      thumbnail: 'https://photos.smugmug.com/Test/i-7fksTb3/0/cafb1120/M/Enchiladas-M.jpg',
      text: 'Salad',
     
    },
    {
      thumbnail: 'https://photos.smugmug.com/Test/i-7fksTb3/0/cafb1120/M/Enchiladas-M.jpg',
      title: 'this is a step',
      
    },
  ]
}


 class Recipe extends React.Component {
  // static navigationOptions =  ({ navigation }) =>{
  //   let headerTitle = 'Title in Component';
  //   let headerRight = (<Button><Text>Yay</Text></Button>)
  //   return { headerTitle, headerRight  }

  // }

  constructor(props) {
    super(props);
    this.state = {

    }
    // this.onSubmit = this.onSubmit.bind(this);
  }


  componentDidMount(){

  }

  render() {
      const { recipe, loading } = this.props;

      let RecipeContent;
     


      if (this.state.TheRecipe  === null) {
        RecipeContent = <ActivityIndicator size='large' color='red'/>
      } else {
        RecipeContent = ( 
          <Content> 
        

          <View style={stylesRC.RecipeCardWrapper}>
                <View style={stylesRC.CardHeaderWrapper}>
                  <View>   
          
                    <View style={stylesRC.HeaderInfo}>
                      <View style={stylesRC.ThumbnailWrapper}> 
                        <Thumbnail style={stylesRC.ThumbnailImage}   source={{uri: `https:${recipe.avatar}`}} />
                      </View>
          
                      <View style={stylesRC.UserNameWrapper}> 
                      <Text style={stylesRC.Title}>{recipe.title}</Text>
          
                      <Text style={stylesRC.UserName}>{recipe.username}</Text>
                      </View>
                    </View> 
                          
                  </View>
          
                      <View style={stylesRC.MenuWrapper}> 
                        <Text style={stylesRC.Menu}> ...</Text>
                      </View>
          
                  </View>
          
                      <View style={stylesRC.PostImageWrapper}>
                        <Image style={stylesRC.PostImage} source={{uri: recipe.thumbnail}}/>
                      </View>
          
                </View>
  
                {recipe.step === undefined ?  <ActivityIndicator size='large' color='red'/>
                :
                <Step Step={recipe.step} />

                  }

             <Button style={styles.PrimaryButton} onPress={() => {
                  /* 1. Navigate to the Details route with params */
                  this.props.navigation.navigate('NativeBase', {
                    otherParam: 'anything you want here',
                  });
                }}
              >
              <Text>Back to Recipes</Text>
            </Button>
  
           </Content>

        )

    return (
      <Container style={styles.CardBackground}>
      {RecipeContent}

      </Container>
    );
  }
}
 }



const mapStateToProps = state => ({
  recipe: state.recipes.item,
  // auth: state.auth,
});

 export default connect(mapStateToProps, { })((Recipe));
