import React from 'react';
import { connect } from 'react-redux';
import Comments from './comments';
import { Container, View, Header, Content, Card, CardRecipeItem, Thumbnail, Text, Button, Icon, Left, Body,  } from 'native-base';
import { Image, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import stylesRC from '../../styles/StylesRecipeComponent';
import styles from '../../styles/styles';
import { connectActionSheet } from '@expo/react-native-action-sheet'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import NewStepPost from '../../components/NewStepPost/newStepPost';
import Footer_Nav from '../../components/common/footer_nav/new_footer';
import { addRecipeStep, deleteRecipe, getRecipe } from '../../actions/recipesAction';
import Step from './step';


const FooterData = [
  {
   active: false,
   link: 'Recipes',
   icon: 'home'
  },
  {  
      active: false,
      link: 'Recipes',
      icon: 'list'
  },
  {
      active: false,
      link: 'NewRecipePost',
      icon: 'add-circle'
     },
     {
      active: false,
      link: '/recipes',
      icon: 'person'
     },
     {
      active: false,
      link: '/recipes',
      icon: 'people'
     },
]

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




  
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'title',
      headerStyle: styles.FooterAndHeader,
      headerTitleStyle: { color: 'white'},
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Info"
          color="#fff"
      />     )
    }   
  };


  

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
      case 1:
        this.gotoedit()
    }  }

  
 
    // submitStep(){
    //   const newStep= {
    //     text: this.state.text,
    //     thumbnail: this.state.thumbnail
    //   }
    //     this.props.addRecipeStep(this.props.recipe._id, newStep);
    //     this.setState({ 
    //       text : '',
    //     });
    //  }

  gotoedit = () => {
    this.props.navigation.navigate('EditRecipe')
  }
  
  deleteRecipe = () => {
    this.props.deleteRecipe(this.props.recipe._id)
    this.props.navigation.navigate('Recipes')
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
                        <Text style={stylesRC.Menu} onPress={() => this._onOpenActionSheet()}> ...</Text>
 
                      </View>
          
                  </View>
          
                      <View style={stylesRC.PostImageWrapper}>
                        <Image style={stylesRC.PostImage} source={{uri: recipe.thumbnail}}/>
                      </View>
          </View>
  
                {recipe.step === undefined ?  <ActivityIndicator size='large' color='gray'/>
                : <View>

              <View style={stylesRC.Recipe_header}>  
                    <View style={styles.FlexRow}>
                      <Text style={styles.AccentColor1Font}>Date </Text>
                      <Text style={styles.white_font}>{recipe.date}</Text>
                    </View>

                  
                    <Text style={styles.AccentColor1Font}>Ingredients </Text> 
                    
                    {/* {Ingredients} */}
                    {/* <Text style={styles.white_font}>{recipe.ingredients[0]}</Text> */}
                    {recipe.ingredients.map(item=> (<View key={item}><Text style={styles.white_font}> {item}</Text></View> )) }

                    <View style={styles.FlexRow}>
                      <Text style={styles.AccentColor1Font}>Comments </Text>
                      <Text style={styles.white_font}>{recipe.comments.length} </Text>
                    </View>
              </View>
    

                <Step Step={recipe.step} />

                {/* { this.props.recipe.user === this.props.auth.user._id ? <Button style={styles.AccentColor1Background} block light onPress={() => this.setState({visibilityState: !this.state.visibilityState})}>
                <Text>Add Step</Text></Button>:  <Text></Text>}
                
              
                { this.state.visibilityState ? <NewStepPost 
                name='text' 
                onChangeText={(text) => this.setState({text: text})} 
                text={this.state.text} 
                // param={this.props.match.params.id} 
                Submit={() => this.submitStep()}
                Close={() => this.setState({active: !this.state.active})} 
                />  :  <Text></Text>} */}

                

 
                </View> 
              }
                {recipe.comments === undefined ?  <ActivityIndicator size='large' color='gray'/>
                :    <Comments recipeId={recipe._id} Comment={recipe.comments} />
                }


           </Content>

        )


       
    return (

      <Container style={styles.CardBackground}>
        

          {RecipeContent}

          <Footer_Nav FooterData={FooterData} Navigation={navigate}/>

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

 export default connect(mapStateToProps, { addRecipeStep, deleteRecipe, getRecipe })((ConnectedApp));
