import React, { Component } from 'react'
import { connect } from 'react-redux';
 import {  addRecipeStep, getRecipe } from '../../actions/recipesAction';
 import { Content, View, Item, Input, Thumbnail, Text, Textarea, Button, Icon, Form } from 'native-base';
 import { Image, TouchableWithoutFeedback, ActivityIndicator } from 'react-native';
 import stylesRC from '../../styles/StylesRecipeComponent';
 import styles from '../../styles/styles';



export class NewStepPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thumbnail: 'https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg',
      selectedFile: ''
     
    }
    // this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this)

}

 

    onSubmit(e) {
      e.preventDefault();
      const AddedStep= {
        text: this.props.text,
        thumbnail: this.state.thumbnail,
      }
        this.props.addRecipeStep(this.props.param, AddedStep);

       
      }

      

  
  render() {
      const { recipeId, changedProp, recipe, param, Submit, text, onChangeText, name, Close } = this.props;

    return (
      <View>
          <Form>

      {/* <input name='Instructions' placeholder='Add Step Instructions' value={this.state.text} onChange={this.handleChange}  /> */}

                            <Textarea
                            rowSpan={5} 
                            style={{width: '100%', backgroundColor: 'gray'}}
                            bordered
                            placeholder='Step instructions...'
                            autoCapitalize='none'
                            onChangeText={onChangeText}
                            value={text}
                            />
 
                <View style={styles.FlexRow}>
                  <Button transparent><Text>Choose thumbnail</Text></Button>
                  <Button transparent onPress={Submit}><Text>Add</Text></Button>
                  <Button transparent onPress={Close}><Text>Cancel</Text></Button>
                </View>
                
            
        </Form>
      </View>
    )
  }
}




const mapStateToProps = state => ({
     recipe: state.recipes.item,

})

export default connect(mapStateToProps, { addRecipeStep, getRecipe})(NewStepPost) 