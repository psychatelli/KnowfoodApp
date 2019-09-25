import React from 'react';
import { connect } from 'react-redux';
import Comments from './comments';
import { Container, View, Header, Content, Card, CardRecipeItem, Thumbnail, Title,Right, Text, Button, Icon, Left, Body,  } from 'native-base';
import { Image, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import stylesRC from '../../styles/StylesRecipeComponent';
import styles from '../../styles/styles';
import { connectActionSheet } from '@expo/react-native-action-sheet'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import NewStepPost from '../../components/NewStepPost/newStepPost';
import Footer_Nav from '../../components/common/footer_nav/footer_nav';
import { addRecipeStep, deleteRecipe, getRecipe, getUsersRecipes } from '../../actions/recipesAction';
import { getProfile } from '../../actions/profileActions';

import Step from './step';




 class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
      right: false,
      text: '',
      comment: '',
      thumbnail: 'https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg',
      visibilityState: false,
      recipeUser: this.props.recipe.user,
      authUser: this.props.auth.user._id
    }  
    // this.onSelection = this.onSelection.bind(this);
  }


  _onOpenActionSheet = () => {
    let options;
    let destructiveButtonIndex;
    let cancelButtonIndex;
    {!this.props.auth.loading && this.props.recipe.user === this.props.auth.user._id   ? ( options = ['Delete', 'Edit Recipe', 'Copy Link', 'Share to..', 'Cancel'], destructiveButtonIndex = 0, cancelButtonIndex=4 ) :  ( options = ['Copy Link', 'Share to..', 'Report', 'Cancel'], destructiveButtonIndex = 2, cancelButtonIndex=3 ) }

    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      buttonIndex => {
        // Do something here depending on the button index selected
        {!this.props.auth.loading && this.props.recipe.user === this.props.auth.user._id   ?  (this.privateRecipeOptions(buttonIndex)) :  (this.publicRecipeOptions(buttonIndex))}
      },
    );
  };
  
  publicRecipeOptions = (index) =>{
    switch(index){
      case 0:
      case 1:
    }
  }


  privateRecipeOptions = (index) =>{
     switch(index){
      case 0:
          this.deleteRecipe()
          break;

      case 1:
        this.gotoedit()
        break;

    }  }

    getProfile = (profileID) =>{
      this.props.getProfile(profileID)
      this.props.getUsersRecipes(profileID)
      this.props.navigation.navigate('Profile')
 
    }
 


  gotoedit = () => {
    this.props.navigation.navigate('EditRecipe')
  }
  
  deleteRecipe = () => {
    this.props.deleteRecipe(this.props.recipe._id)
    this.getProfile(this.props.auth.user._id)
  }

  toggleView() {
    this.setState({
      visibilityState: !this.state.visibilityState
    });
}

  render() {
      const { recipe, loading, auth } = this.props;
      const { visibilityState} = this.state;
      let RecipeContent;
      const { navigate } = this.props.navigation;

console.log(`RECIPE: ${JSON.stringify(recipe)}`)
   

    // const Ingredients = recipe.ingredients.map((item, index) => (
    //   <View key={index}>
    //      <Text>{item}</Text>
    //   </View>
    // ));
      
      if (this.state.TheRecipe  === null) {
        RecipeContent = <ActivityIndicator size='large' color='gray'/>
      } else {
        RecipeContent = ( 
          <Content disableKBDismissScroll={true}> 
          <View style={stylesRC.RecipeCardWrapper}>
                <View style={stylesRC.CardHeaderWrapper}>
                  <View>   
                    <View style={stylesRC.HeaderInfo}>
                      <Button transparent onPress={() => this.getProfile(recipe.user)}  style={stylesRC.ThumbnailWrapper}> 
                          <Thumbnail style={stylesRC.ThumbnailImage}   source={{uri: `https:${recipe.avatar}`}} />
                      </Button>
          
                      <View style={stylesRC.UserNameWrapper}> 
                        <Text style={stylesRC.Title}>{recipe.title}</Text>
                        <Text style={stylesRC.UserName}>{recipe.username}</Text>
                      </View>
                    </View> 

                  </View>
          
                      <View style={stylesRC.MenuWrapper}> 
                        <Text style={stylesRC.Menu} onPress={() => this._onOpenActionSheet()}> ...</Text>
 
                      </View>
          
                  </View>
          
                      <View style={stylesRC.PostImageWrapper}>
                        <Image style={stylesRC.PostImage} source={{uri: recipe.thumbnail}}/>
                      </View>
          </View>
  
                {recipe.step === undefined ?  <ActivityIndicator size='large' color='gray'/>
                : <View>

              <View style={stylesRC.Header_one}>  
                    <View style={styles.FlexRow}>
                      <Text style={styles.AccentColor1Font}>Date </Text>
                      <Text style={styles.white_font}>{recipe.date}</Text>
                    </View>

                    <Text style={styles.AccentColor1Font}>Ingredients </Text> 
                    {recipe.ingredients.map(item=> (<View key={item}><Text style={styles.white_font}>{item}</Text></View> )) }
                    <View style={styles.FlexRow}>
                      <Text style={styles.AccentColor1Font}>Comments </Text>
                      <Text style={styles.white_font}>{recipe.comments.length} </Text>
                    </View>
              </View>
    

                <Step Step={recipe.step} />


                </View> 
              }
                {recipe.comments === undefined ?  <ActivityIndicator size='large' color='gray'/>
                :    <Comments recipeId={recipe._id} Comment={recipe.comments} />
                }


           </Content>

        )


       
    return (

      <Container style={styles.CardBackground}>
         <Header style={styles.DarkOpacityBackground}>
          <Left>
           
          </Left>
          <Body>
            <Title style={styles.AccentColor1Font}>{recipe.title}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text></Text>
            </Button>
          </Right>
        </Header>

          {RecipeContent}

          <Footer_Nav Navigation={navigate}/>

       </Container>
        );
      }
    }
 }


 const ConnectedApp = connectActionSheet(Recipe)

const mapStateToProps = state => ({
  recipe: state.recipes.item,
   auth: state.auth,
});

 export default connect(mapStateToProps, { addRecipeStep, deleteRecipe, getRecipe, getProfile, getUsersRecipes })((ConnectedApp));
