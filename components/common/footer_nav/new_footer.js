import React, { Component } from "react";
import { Segment, Card, CardItem, Title, InputGroup, Form, Item, Label, Input, Subtitle, Container, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import styles from "../../../styles/styles"; 
import { bindActionCreators } from 'redux';



export default class Footer_Nav extends Component {

    renderList() {
      
       
 
        
        return this.props.FooterData.map((item) => {
            const { Navigation } = this.props;

            return (
                // <Button key={item.id}  onPress={() => this.props.navigation.navigate("LCL_Active_Tabs")}> 
                <Button style={{backgroundColor: 'none'}} active={item.active} key={item.icon}  onPress={() => Navigation(item.link)}> 
                <Icon style={{ color: item.active === true ? "#FFF" : "#2AE7AA" }} name={item.icon}/>
                </Button>
           
         );
        });
    }

    render() {
        return (
            <Footer style={styles.FooterAndHeader}>
            <FooterTab > 
                {this.renderList()}
            </FooterTab>
            </Footer>
        );
    }

}
