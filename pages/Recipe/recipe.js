import React from 'react';
import { connect } from 'react-redux';
import Comments from './comments';
import { Container, View, Header, Content, Card, CardRecipeItem, Thumbnail, Text, Button, Icon, Left, Body,  } from 'native-base';
import { Image, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import stylesRC from '../../styles/StylesRecipeComponent';
import styles from '../../styles/styles';
import { connectActionSheet } from '@expo/react-native-action-sheet'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'

import Step from './step'



 class Recipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
        right: false,
      text: '',
      comment: '',
      thumbnail: 'https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg',
      visibilityState: ''
    }  
    // this.onSelection = this.onSelection.bind(this);
  }
 
  
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
        this.onSelection(buttonIndex)

      },
    );
  };

  onSelection = (index) =>{
    console.log(`your index ${index}`)
  }

  componentWillMount(){

    {!this.props.auth.loading && this.props.recipe.user === this.props.auth.user._id ? ( this.setState({  visibilityState : 'Hide' })  ) : ( this.setState({ visibilityState : 'Show'  }))}
    this.props.navigation.setParams({ gotoedit: this.gotoedit, ShowHide: this.state.visibilityState });


  }

  static navigationOptions = ({ navigation }) => {
    // const { params = {} } = navigation.state;
    const { params } = navigation.state;
  let Head;

    {navigation.getParam('ShowHide') === 'Show' ? ( Head =  <Icon style={styles.Show} onPress={navigation.getParam('gotoedit')}  ios='ios-create' android="md-create"/> ) : ( Head = <Text>'HIII'</Text> ) }
    console.log(`your navigation val : ${navigation.getParam('ShowHide')}`)
    return {
      headerTitle: 'title',
      headerStyle: styles.FooterAndHeader,
      headerTitleStyle: { color: 'white'},
      headerRight: ( <Icon style={styles[navigation.getParam('ShowHide')]} onPress={navigation.getParam('gotoedit')}  ios='ios-create' android="md-create"/> )
      // headerRight:( <Text> {Head} </Text>)
    };
  };


  gotoedit = () => {
    this.props.navigation.navigate('EditRecipe')
  }


  render() {
      const { recipe, loading, auth } = this.props;
      const { visibilityState} = this.state;
      let RecipeContent;
     

     

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
                        <Text style={stylesRC.Menu} onPress={() => this._onOpenActionSheet(1)}> ...</Text>
                        {/* <Icon style={stylesRC.Menu} ios='' android=''/> */}
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
    
    
             <View style={styles[visibilityState]}>
                    <Icon ios='ios-add' style={{fontSize: 50, color: 'red'}} Click={() => this.setState({active: !this.state.active})} /> 
             </View>
    
             {/* <NewStepPost name='text' handleChange={this.handleChange} text={this.state.text} onSubmit={this.onSubmit.bind(this)} param={this.props.match.params.id}   ClassName={ this.state.active ? "HideInput" : "ShowInput" } Close={() => this.setState({active: !this.state.active})} /> */}
                <Step Step={recipe.step} />
                </View> 
                  }

            
                {recipe.comments === undefined ?  <ActivityIndicator size='large' color='red'/>
                :    <Comments param={recipe._id} Comment={recipe.comments} Visibility='Hide'/>
                }
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


 const ConnectedApp = connectActionSheet(Recipe)

const mapStateToProps = state => ({
  recipe: state.recipes.item,
   auth: state.auth,
});

 export default connect(mapStateToProps, { })((ConnectedApp));
