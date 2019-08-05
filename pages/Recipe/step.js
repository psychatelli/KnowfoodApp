import React, {Component} from 'react';
import { Container, View, Header, Content, Card, CardRecipeItem, Thumbnail, Text, Button, Icon, Left, Body,  } from 'native-base';
import stylesRC from '../../styles/StylesRecipeComponent';
import { Image } from 'react-native';

export default class Step extends Component {

  render() {

const {Item, stepID, Step} = this.props;


  const StepItems = Step.map((item, index) => {
    return (
        <View key={index} style={stylesRC.RecipeStep}>
            <Text style={stylesRC.StepNumber}>STEP {index + 1}</Text>
            <Text style={stylesRC.StepInstructions}>{item.text}</Text>
            <Image style={stylesRC.PostImage} source={{uri: item.thumbnail}}/>
        </View>
     );
    });


    return  (
        <View>
          {StepItems}
        </View>
      )
    
  }
}
