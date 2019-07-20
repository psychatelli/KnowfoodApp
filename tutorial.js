import React, {Component} from 'react';
import {  View, Button, Text, AppRegistry } from 'react-native';
// import { Title, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Icon } from "native-base";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Container } from 'native-base';
// import Component1 from './components/Component1/Component1';
// import Component2 from './components/Component1/Component2';
// import Component3 from './components/Component1/Component3';

export default class Tutorial extends Component {
  render(){
    const  otherParam  = this.props.navigation.getParam('otherParam');
    return (
        <View> 
        {/* <Component1 message="hello Adam"/>
        <Component2 />
        <Component3/> */}

        <Text  onPress={() => {this.props.navigation.push('Recipes')}}> Push to Recipes </Text>
        <Text  onPress={() => {this.props.navigation.pop('Recipes')}}> Pop to Recipes </Text>
        <Text style={{color: 'red'}}>{otherParam} </Text>
        </View>
    )
  } 
}

AppRegistry.registerComponent('Tutorial', () => Tutorial);