import React, { Component } from "react";
import {  Container, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
import { View, Text } from "react-native";
// import { bindActionCreators } from 'redux';

export default class Footer_Nav extends Component {


       render() {
        return (
            <Container>
            <Footer >
                <FooterTab>
                    <Button>
                       <Text>  Apps </Text>
                        {/* <Icon name='ios-apps-outline' /> */}
                    </Button> 
                    <Button>
                        <Text>  Camera </Text>
                        {/* <Icon name='ios-camera-outline' /> */}
                    </Button>
                    <Button active>
                    <Text>  Navigate </Text>
                        {/* <Icon name='ios-compass' /> */}
                    </Button>
                    <Button>
                    <Text>  Contact </Text>
                        {/* <Icon name='ios-contact-outline' /> */}
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
        );
    }

}