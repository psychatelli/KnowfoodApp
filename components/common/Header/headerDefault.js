import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';


export default class HeaderDefault extends Component {

  renderList() {
      return this.props.FooterData.map((item) => {
          const { Navigation } = this.props;
          return (
            <Header>
            <Left> 
             <Button transparent>
               <Icon name='arrow-back' />
             </Button>
           </Left>
           <Body>
             <Title>Header</Title>
           </Body>
           <Right>
             <Button transparent>
               <Icon name='menu' />
             </Button>
           </Right>
         </Header>
         
       );
      });
  }

  render() {
      return (
          <View> 
              {this.renderList()}
         </View>
      );
  }

}
