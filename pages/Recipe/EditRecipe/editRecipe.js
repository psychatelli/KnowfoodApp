import React, { Component } from 'react'
import { updateRecipe, getRecipe, addRecipeStep, deleteRecipeStep } from '../../../actions/recipesAction';
import { Container, View, Header, Content, Card, CardRecipeItem, Textarea, Thumbnail, Text, Button, Icon, Left, Right, Body, Input, Form, Item  } from 'native-base';
import { Image, TouchableWithoutFeedback, Platform, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../../styles/styles';
import stylesRC from '../../../styles/StylesRecipeComponent';
import Comments from '../comments';
import NewStepPost from '../../../components/NewStepPost/newStepPost';
import Footer_Nav from '../../../components/common/footer_nav/new_footer';

 
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
      link: 'AddRecipe',
      icon: 'add-circle'
     },
     {
      active: false,
      link: 'Profiles',
      icon: 'search'
     },
     {
      active: false,
      link: '/recipes',
      icon: 'person'
     },
]
export class EditRecipe extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'hiii',
      headerRight: (
        <Button
          // onPress={navigation.getParam('increaseCount')}
          title="+1"
          color={Platform.OS === 'ios' ? '#fff' : null}
        />
      ),
    };
  };


    constructor(props) {
        super(props);
        this.state = { 
          TheRecipe: this.props.recipe,        
          title: this.props.recipe.title,
          ingredients: '',
          thumbnaileEdited: '',
          indexEdited: 'ds',
          recipeText : '',
          recipeThumbnail: '',
          stepText: '',
          stepThumbnail: '',
          StepId: '',
          recipeId: this.props.recipe._id,
          showStatus: '',
          deleteVisibility: true,
          visibilityState: false,
          newstepText: '',
          newStepThumbnail: 'https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg'

        }
      
        this.onSubmit = this.onSubmit.bind(this)
    }

        componentWillMount(){
          let Ingredients = this.props.recipe.ingredients.join(',');
          this.setState({
            ingredients: Ingredients
          })
        }

        


        updateRecipe() {
        let newRecipe = {
           title: this.state.title,
           ingredients: this.state.ingredients
           
        }
            this.props.updateRecipe(this.props.recipe._id, newRecipe)
        }


        submitStep(prevState){
          const newStep= {
            text: this.state.newstepText,
            thumbnail: this.state.newStepThumbnail
          }

            const newStateContent = this.state.TheRecipe;
             let array = newStateContent.step.push(newStep) // create mutable copy of the array
      
            let newObj = {...newStateContent, newStep}
          console.log(`NEWOBJ: ${JSON.stringify(array)}`);
          this.setState({
            TheRecipe: newObj
          });
 
          this.props.addRecipeStep(this.props.recipe._id, newStep);

            this.setState({ 
              newstepText : '',
              // thumbnail : '',
            });

            
        }



        handleStepChange = index => evt =>{
          const newStateContent = this.state.TheRecipe;
          let array = newStateContent.step.slice() // create mutable copy of the array
    
          array[index].text = evt;
          let newObj = {...this.state.TheRecipe}
    
        this.setState({
          TheRecipe: newObj
        });
    
    }
    
          updateRecipeStep() {
          let NewRecipe =  this.state.TheRecipe
          this.props.updateRecipe(this.props.recipe._id, this.state.TheRecipe)
            }

 
          deleteStep(selectedID, index) {
            console.log(selectedID)
            this.state.TheRecipe.step.splice(index, 1)
            this.props.deleteRecipeStep(this.props.recipe._id, selectedID)
          }

    
          deleteComment(commentId) {
            this.props.deleteComment(this.props.recipe._id ,commentId)
        }

        onSubmit(e) {
            e.preventDefault();
            const EditedRecipe = {
               title: this.props.title,
            }
              this.props.updateRecipe(EditedRecipe);
          }

  
 
          
  
  render() {
 
    const { recipe, DeletePost, param , auth} = this.props;
    const {TheRecipe, deleteVisibility} = this.state
    const { navigate } = this.props.navigation;
    let Steps;



    if (this.state.recipe  === null) {
      Steps = <ActivityIndicator size='large' color='gray'/>
    } else { 

       Steps =  TheRecipe.step.map(function (item, index) {
        return (
          <View  style={stylesRC.RecipeStep} key={item._id} className='RecipeStepEdit'>
            <View style={styles.SpaceBetween}> 
              <Text style={stylesRC.StepNumber}> EDIT STEP {index + 1}</Text>
              <Button   bordered success small onPress={() => { this.deleteStep(item._id, index)}} >
              <Icon name='close' style={{color: 'white'}} />
              </Button>
            </View>
                 
            <Item regular style={styles.InputStyle}> 
              <Input
              name='text'
              value={item.text}
              autoCapitalize='none'
              // onChangeText={(email) => this.setState({email: email})}
              onChangeText={this.handleStepChange(index)} onEndEditing={() => {this.updateRecipeStep()}}
              />
              </Item>
  
              <View style={stylesRC.PostImageWrapper}>
                   <Image style={stylesRC.PostImage} source={{uri: item.thumbnail}}/>
               </View>
  
          </View>
        )
      }.bind(this))


    }

    


  
    return (
      <Container disableKBDismissScroll={true} style={styles.CardBackground} style={styles.CardBackground}> 

          <Header style={styles.DarkOpacityBackground}>
          <Left>
            <Button  onPress={() => navigate('Recipe')} transparent>
              <Icon style={styles.AccentColor1Font}  name='arrow-back' />
              <Text style={styles.AccentColor1Font} >Back</Text>
            </Button>
          </Left>
          <Body>
            {/* <Title>Header</Title> */}
          </Body>
          <Right>
            <Button transparent>
              <Text></Text>
            </Button>
          </Right>
        </Header>


        <Content> 
          <View>
            {/* <Form onSubmit={() => {this.onSubmit}}> */}
                <View style={{margin: 10 }}> 
                <Input regular style={styles.InputStyle} 
                placeholder='Title'  value={this.state.title} 
                onChangeText={(title) => this.setState({title: title})} 
                onEndEditing={() => {this.updateRecipe()}} />

                <Textarea rowSpan={2} regular style={styles.InputStyle} 
                placeholder='Ingredients. Must seperate with comma'  value={this.state.ingredients} 
                onChangeText={(ingredients) => this.setState({ingredients: ingredients})} 
                onEndEditing={() => {this.updateRecipe()}} />


                </View>


                {Steps}

                <Button style={styles.AccentColor1Background} block light onPress={() => this.setState({visibilityState: !this.state.visibilityState})}>
                <Text>Add Step</Text></Button>
                { this.state.visibilityState ? <NewStepPost 
                name='text' 
                onChangeText={(newstepText) => this.setState({newstepText: newstepText})} 
                text={this.state.newstepText} 
                // param={this.props.match.params.id} 
                Submit={() => this.submitStep()}
                />  :  <Text></Text>}



                <Comments recipeId={recipe._id} Comment={recipe.comments} Visibility={deleteVisibility}/>
                {/* <Comments param={recipe._id} Comment={recipe.comments} Visibility={Visibility}/> */}
            {/* </Form> */}
          </View>
      </Content>

      <Footer_Nav FooterData={FooterData} Navigation={navigate}/>

      </Container>
    )
  }  
}

 
const mapStateToProps = state => ({
    recipe: state.recipes.item,
    auth: state.auth
  })
  
  export default connect(mapStateToProps, {updateRecipe, addRecipeStep, deleteRecipeStep, getRecipe})(EditRecipe)
  
 