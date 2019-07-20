import React, {Component} from 'react';
import {  View, Button, Text, AppRegistry } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Container } from 'native-base';
import Head from '../components/Header/header';


export default class Recipes extends Component {

  // One example
  // static navigationOptions = ({ navigation }) => ({
  //   header: null,
  // })

  static navigationOptions =  ({
    title: 'Recipes',
  })



    constructor(props){
        super(props);
        this.state = {
            name: 'Hi Recipes',
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
          <Head/>
        
          <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Tutorial', {
              itemId: 86,
              otherParam: 'anything you want here',
              name: 'Bob'
            });
          }}
        />


        <Button
          title="Go to NativeBase"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('NativeBase', {
              name: 'Bob'
            });
          }}
        />

        </View>
    )
  }
}

AppRegistry.registerComponent('Recipes', () => Recipes);