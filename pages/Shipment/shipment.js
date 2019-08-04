import React, { Component } from "react";
import { Title, ScrollableTab, Container, TabHeading, Tabs, Tab, Header, Content, Text,  ButtonIcon, Footer, FooterTab, Left,Right, Body, Button, Icon } from "native-base";
// import Details from "./details";
// import Tracking from "./tracking";
// import Cargo from "./cargo";
// import Customs from "./customs";
// import Documens from "./documents";
// import Messages from "./messages";
import styles from "../../styles/styles";

class Shipment extends Component {
  render() {
    const {goBack} = this.props.navigation;

    return (
      <Container>
        <Header style={styles.MainContainer} hasTabs>
            <Left> 
              <Button transparent onPress={() => goBack()} >
                <Icon name="ios-arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title style={styles.title_font}>Shipment</Title>
            </Body>
            <Right />
        </Header>

        <Tabs renderTabBar={()=> <ScrollableTab />}> 
            <Tab heading={ <TabHeading><Text>Details</Text></TabHeading>}>
              {/* <Details navigation={this.props.navigation}/> */}
            </Tab>

            <Tab heading={ <TabHeading><Text>Tracking</Text></TabHeading>}>
              {/* <Tracking navigation={this.props.navigation}/> */}
            </Tab>

            <Tab heading={ <TabHeading><Text>Cargo</Text></TabHeading>}>
              {/* <Cargo/> */}
            </Tab>

            <Tab heading={ <TabHeading><Text>Customs</Text></TabHeading>}>
              {/* <Customs navigation={this.props.navigation}/> */}
            </Tab>

            <Tab heading={ <TabHeading><Text>Documents</Text></TabHeading>}>
              {/* <Documens navigation={this.props.navigation}/> */}
            </Tab>

            <Tab heading={ <TabHeading><Text>Messages</Text></TabHeading>}>
              {/* <Messages navigation={this.props.navigation}/> */}
            </Tab>
        </Tabs> 

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>

      </Container>
    );
  }
}

export default Shipment;
