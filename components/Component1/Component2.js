import React, {Component} from 'react';
import {  View, ListView, Button, Text, AppRegistry, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
// import { Title, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Icon } from "native-base";
import { Container } from 'native-base';

const styles = StyleSheet.create({
    myView: {
        backgroundColor: 'aqua',
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
        
    }
})





export default class Component2 extends Component {

    constructor() {
        super();
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
      }



    _onPressButton() {
        console.log('yoooo')
    }


   
  render(){

    const users = [
        {name: 'Adam'},
        {name: 'Ryan'},
        {name: 'Sam'},
    
    
    ]

    return (
        <View style={styles.myView}> 
        <Text style={styles.myText}> Hello Component 2 </Text>

        <TouchableHighlight underlayColor="blue" onPress={this._onPressButton}>
        <View style={styles.myView1}> 
        <Text style={styles.myText}> Hello Component 3 </Text>
        </View>
        </TouchableHighlight> 

         <TouchableOpacity underlayColor="blue" onPress={this._onPressButton}>
        <View style={styles.myView1}> 
        <Text style={styles.myText}> Hello Component 4 </Text>
        </View>
        </TouchableOpacity> 

        </View>

    )
  }
}

AppRegistry.registerComponent('Component2', () => Component2);