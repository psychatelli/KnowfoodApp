import React, { Component } from 'react'
import styles from '../../styles/styles';
import { Container, View, Content, Form, CardRecipeItem, Thumbnail, Input,Textarea, Text, Button, Icon  } from 'native-base';

export default class AdjustableInput extends Component {
    render() {
        const { placeholder, value, onChangeText, onPress, icon,onSubmit } = this.props;
        return (
            <Form onSubmit={onSubmit}> 

        <View style={{flexDirection:'row', alignItems:'center', height: 'auto', justifyContent:'space-between', borderWidth:1, borderColor: 'white'}}>
            <View> 
            <Textarea 
              style={{marginLeft: 10, height: 'auto', width: 350 }}
              placeholder={placeholder}
              value={value}
              onChangeText={onChangeText}
              />
              </View>

              <View>
              <Button transparent onPress={onPress} >
              <Icon name={icon} style={styles.AccentColor1Font} />
              </Button>
              </View>
        </View>
        </Form>

        )
    }
}
