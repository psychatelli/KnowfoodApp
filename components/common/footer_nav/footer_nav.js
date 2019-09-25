import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import styles from "../../../styles/styles"; 
import { bindActionCreators } from 'redux';


const FooterData = [
    {
     active: 0,
     link: 'Recipes',
     icon: 'home'
    },
    {
        active: 1,
        link: 'Recipes',
        icon: 'list'
    },
    {
        active: 2,
        link: 'AddRecipe',
        icon: 'add-circle'
       },
       {
        active: 3,
        link: 'Profiles',
        icon: 'search'
       },
       {
        active: 4,
        link: 'Profile',
        icon: 'person'
       },
  ]
   

export default class Footer_Nav extends Component {

    renderList() {
        return FooterData.map((item) => {
            const { Navigation,  pageIndicator} = this.props;

            return (
                // <Button key={item.id}  onPress={() => this.props.navigation.navigate("LCL_Active_Tabs")}> 
                <Button style={{backgroundColor: 'none'}}  key={item.icon}  
                onPress={() => Navigation(item.link)}> 
                <Icon style={{ color: item.active == pageIndicator ? "#FFF" : "#2AE7AA" }} name={item.icon}/>
                </Button>
           
         );
        });
    }

    render() {
        const { pageIndicator } = this.props;

        return (
            <Footer style={styles.FooterAndHeader}>
            <FooterTab > 
                {this.renderList()}
            </FooterTab>
            </Footer>
        );
    }

}
