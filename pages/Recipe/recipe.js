import React from 'react';
import { connect } from 'react-redux';

import { Container, View, Header, Content, Card, CardRecipeItem, Thumbnail, Text, Button, Icon, Left, Body,  } from 'native-base';
import { Image, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import stylesRC from '../../styles/StylesRecipeComponent';
import styles from '../../styles/styles';

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
    // this.onSubmit = this.onSubmit.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'title',
      headerStyle: styles.FooterAndHeader,
      headerTitleStyle: { color: 'white'},
      headerRight: (
        <Icon onPress={navigation.getParam('gotoedit')}   ios='ios-create' android="md-create" style={{fontSize: 20, color: 'white', marginRight: 10, padding: 10}}/>
      ),
    };
  };



  componentDidMount(){
    this.props.navigation.setParams({ gotoedit: this.gotoedit });

  }
  gotoedit = () => {
    this.props.navigation.navigate('EditRecipe')
  }


  render() {
      const { recipe, loading, auth } = this.props;

      let RecipeContent;
     
      // {!auth.loading && recipe.user === auth.user._id ? ( this.setState({  visibilityState : 'Show' })  ) : ( this.setState({ visibilityState : 'Hide'  }))}



      if (this.state.TheRecipe  === null) {
        RecipeContent = <ActivityIndicator size='large' color='purple'/>
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
    
    
             <View className={this.state.visibilityState}>
                    <Icon ios='ios-add' style={{fontSize: 50, color: 'red'}} Click={() => this.setState({active: !this.state.active})} /> 
             </View>
    
    
             {/* <NewStepPost name='text' handleChange={this.handleChange} text={this.state.text} onSubmit={this.onSubmit.bind(this)} param={this.props.match.params.id}   ClassName={ this.state.active ? "HideInput" : "ShowInput" } Close={() => this.setState({active: !this.state.active})} /> */}
    
      


                <Step Step={recipe.step} />
                </View> 
                 
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



const mapStateToProps = state => ({
  recipe: state.recipes.item,
   auth: state.auth,
});

 export default connect(mapStateToProps, { })((Recipe));
