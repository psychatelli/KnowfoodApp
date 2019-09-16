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

import Step from './step'


const FooterData = [
  {
   active: false,
   link: '/recipes',
   icon: 'home'
  },
  {
      active: false,
      link: '/recipes',
      icon: 'list'
  },
  {
      active: false,
      link: '/recipes',
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
      visibilityState: 'fuck',
    }  
    // this.onSelection = this.onSelection.bind(this);
  }


  componentDidMount(){
   
      {!this.props.auth.loading && this.props.recipe.user === this.props.auth.user._id ? ( this.setState({  visibilityState : 'Hide' })  ) : ( this.setState({ visibilityState : 'Show'  }))  }
      this.props.navigation.setParams({ gotoedit: this.gotoedit });
    
  }

  componentDidUpdate(prevProps, prevState) {
    // only update chart if the data has changed

  }

  componentWillUnmount(){
    

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

  t

  

  _onOpenActionSheet = () => {
    let options;
    let destructiveButtonIndex;
    let cancelButtonIndex;
    { this.state.visibilityState == 'Hide' ? ( options = ['Copy Link', 'Share to..', 'Report', 'Cancel'], destructiveButtonIndex = 2, cancelButtonIndex=3 ) : ( options = ['Delete', 'Edit Recipe', 'Copy Link', 'Share to..', 'Cancel'], destructiveButtonIndex = 0, cancelButtonIndex=4 ) }

    this.props.showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
        destructiveButtonIndex,
      },
      buttonIndex => {
        // Do something here depending on the button index selected
        { this.state.visibilityState == 'Hide' ? ( this.publicRecipeOptions(buttonIndex) ) : ( this.privateRecipeOptions(buttonIndex)) }
      },
    );
  };

  publicRecipeOptions = (index) =>{
    switch(index){
      case 0:
        console.log('publicRecipeOptions you 0')
      case 1:
        console.log('publicRecipeOptions you 1')
    }
  }


  privateRecipeOptions = (index) =>{
     switch(index){
      case 0:
      case 1:
        this.gotoedit()
    }  }

  
 
    submitStep(){
      console.log('submitted step')

      this.setState({active: !this.state.active})
    }

  gotoedit = () => {
    this.props.navigation.navigate('EditRecipe')
  }


  render() {
      const { recipe, loading, auth } = this.props;
      const { visibilityState} = this.state;
      let RecipeContent;
      const { navigate } = this.props.navigation;


     

      if (this.state.TheRecipe  === null) {
        RecipeContent = <ActivityIndicator size='large' color='gray'/>
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
                    <Text style={styles.white_font}>{recipe.ingredients}</Text>
                  
        
                    <View style={styles.FlexRow}>
                      <Text style={styles.AccentColor1Font}>Comments </Text>
                      <Text style={styles.white_font}>{recipe.comments.length} </Text>
                    </View>
              </View>
    
              

                <Step Step={recipe.step} />

               <Button style={styles.AccentColor1Background} block light 
               onPress={() => this.setState({active: !this.state.active})}>
                <Text>Add Step</Text>
                {/* <Icon name='add' /> */}
                </Button>

                <NewStepPost 
                name='text' 
                onChangeText={(text) => this.setState({text: text})} 
                text={this.state.text} 
                // param={this.props.match.params.id} 
                Submit={() => this.submitStep()}
                // class={ this.state.active ? "HideInput" : "ShowInput" } 
                Close={() => this.setState({active: !this.state.active})} 
                />


                </View> 
                  }

            
                {recipe.comments === undefined ?  <ActivityIndicator size='large' color='red'/>
                :    <Comments param={recipe._id} Comment={recipe.comments} Visibility='Hide'/>
                }


           </Content>

        )


       
    return (

      <Container style={styles.CardBackground}>
          <Text>{this.state.visibilityState}</Text>
          <Text>{this.props.recipe.user}</Text>
          <Text>{this.props.auth.user._id}</Text>
          <Text>{this.props.auth.loading}</Text> 

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

 export default connect(mapStateToProps, { })((ConnectedApp));
