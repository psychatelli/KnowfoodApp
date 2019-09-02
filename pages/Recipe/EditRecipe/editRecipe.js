import React, { Component } from 'react'
import { updateRecipe, getRecipe, addRecipeStep, deleteRecipeStep } from '../../../actions/recipesAction';
import { Container, View, Header, Content, Card, CardRecipeItem, Thumbnail, Text, Button, Icon, Left, Body, Input, Form, Item  } from 'native-base';
import { Image, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import styles from '../../../styles/styles';
import stylesRC from '../../../styles/StylesRecipeComponent';

// import Comments from '../comments';
 
export class EditRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          TheRecipe: this.props.recipe,        
          title: this.props.recipe.title,
          thumbnaileEdited: '',
          indexEdited: 'ds',
          recipeText : '',
          recipeThumbnail: '',
          stepText: '',
          stepThumbnail: '',
          StepId: '',
          recipeId: this.props.recipe._id,
          showStatus: ''
        }
      
        this.onSubmit = this.onSubmit.bind(this)
    }

        

        updateRecipe() {
        let newRecipe = {
           title: this.state.title
        }
            this.props.updateRecipe(this.props.recipe._id, newRecipe)
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
            this.state.TheRecipe.step.splice(index, 1)
            this.props.deleteRecipeStep(this.props.recipe._id, selectedID)
          }

    

        onSubmit(e) {
            e.preventDefault();
            const EditedRecipe = {
               title: this.props.title,
            }
              this.props.updateRecipe(EditedRecipe);
          }

  
 
         
 
  render() {
 
    const { recipe, DeletePost, param ,Visibility, auth} = this.props;
    const {TheRecipe} = this.state
 

    const Steps =  TheRecipe.step.map(function (item, index) {
      return (
        <View  style={stylesRC.RecipeStep} key={item._id} className='RecipeStepEdit'>
          <View style={styles.SpaceBetween}> 
            <Text style={stylesRC.StepNumber}> EDIT STEP {index + 1}</Text>
            <View  onClick={() => { this.deleteStep(item._id, index)}} >
            <Icon name='close' style={{color: 'white'}} />

            </View>
          </View>
              
          <Item regular style={styles.LoginInput}> 
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


  
    return (
      <Container style={styles.CardBackground}> 
        <Content> 
      <View>
        <Form onSubmit={() => {this.onSubmit}}>
            <View style={{margin: 10 }}> 
            <Input regular style={styles.LoginInput} 
            placeholder='Title'  value={this.state.title} 
            onChangeText={(title) => this.setState({title: title})} 
            onEndEditing={() => {this.updateRecipe()}} />

                                        


            </View>
            {Steps}
            {/* <Comments Comment={recipe.comments}/> */}
            {/* <Comments param={recipe._id} Comment={recipe.comments} Visibility={Visibility}/> */}
        </Form>
      </View>
      </Content>
      </Container>
    )
  }  
}

 
const mapStateToProps = state => ({
    recipe: state.recipes.item,
    auth: state.auth
  })
  
  export default connect(mapStateToProps, {updateRecipe, addRecipeStep, deleteRecipeStep, getRecipe})(EditRecipe)
  
 