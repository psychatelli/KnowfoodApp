import React, {Component} from 'react';
import {  View, Button, Text, AppRegistry } from 'react-native';
// import { Title, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Icon } from "native-base";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Container } from 'native-base';



export default class Component1 extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: 'Adams',
            showName: true,
            message: this.props.message
        }
    }

    static defaultProps = {
        message: 'Hi There'
    }

  render(){
    console.log('Hi')
    let name = this.state.showName ? this.state.name : 'No Name';

    return (
        <View> 
        <Text> {this.state.message} </Text>
        <Text> {name} </Text>
        </View>
    )
  }
}

AppRegistry.registerComponent('Component1', () => Component1);