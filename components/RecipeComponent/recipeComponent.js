import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,  } from 'native-base';
export default class RecipeComponent extends Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <Container>
        <Header />
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <TouchableOpacity onPress={() => navigate('Shipment')}> 
                <Thumbnail   source={{uri: 'https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg'}} />
               </TouchableOpacity>
                <Body>
                  <Text onPress={() => navigate('HomeScreen')}>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <TouchableOpacity onPress={() => navigate('HomeScreen')}> 
                  <Image onPress={() => navigate('HomeScreen')} source={{uri: 'https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg'}} style={{height: 150, width: 350, flex: 1}}/>
                </TouchableOpacity>

              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}