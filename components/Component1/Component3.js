import React, {Component} from 'react';
import {  View, Button, Switch, Text, AppRegistry, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    myView: {
        padding: 30,
    },
    myView1: {
        backgroundColor: 'red',
        padding: 30,
        color: 'white',
        margin: 10
    },

    myText: {
        color: 'gray'
        
    },
    input: {
        backgroundColor: '#c3c4c7',
        padding: 10,
        margin: 10
    }
})



export default class Component2 extends Component {


    constructor() {
        super();
        this.state = {
            textValue: 'Hello',
            switchValue: false,

        }
    }
    _onPressButton() {
        console.log('yoooo')
    }

    onChangeText(value) {
        this.setState({
            textValue: value,
        })
    }

    onSwitchChange(value){
        this.setState({
            switchValue: value
        })
    }

    onSubmit(){
        console.log('you submited')
    }

  render(){
        const { textValue, switchValue} = this.state;
    return (
        <View style={styles.myView}> 
        <Text style={styles.myText}> Hello Component 3 </Text>
        <TextInput 
        placeholder='Enter Text'
        value={textValue}
        style={styles.input}
        onChangeText={(value) => this.onChangeText(value)}
        onSubmitEditing={this.onSubmit}
        />

        <Switch
         value={switchValue}
         onValueChange={(value) => this.onSwitchChange(value)}
        />

        <Text>{textValue}</Text>
        {/* <TouchableHighlight underlayColor="blue" onPress={this._onPressButton}>
        <View style={styles.myView1}> 
        <Text style={styles.myText}> Hello Component 3 </Text>
        </View>
        </TouchableHighlight>  */}
        </View>

    )
  }
}

AppRegistry.registerComponent('Component2', () => Component2);