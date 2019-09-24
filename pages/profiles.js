import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProfiles } from '../actions/profileActions';
import { Container, View,  Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Title, Right, Header, List, ListItem  } from 'native-base';
import styles from '../styles/styles';
import stylesRC from '../styles/StylesRecipeComponent';
import AdjustableInput from '../components/common/adjustableInput';
import Footer_Nav from '../components/common/footer_nav/new_footer';

 
const FooterData = [
  {
   active: false,
   link: 'Recipes',
   icon: 'home'
  },
  {
      active: false,
      link: 'Recipes',
      icon: 'list'
  },
  {
      active: false,
      link: 'AddRecipe',
      icon: 'add-circle'
     },
     {
      active: true,
      link: 'Profiles',
      icon: 'search'
     },
     {
      active: false,
      link: '/recipes',
      icon: 'person'
     },
]

export class Profiles extends Component {

      constructor(props) {
        super(props);
        this.state = {
          errors: {},
        }
    }

      componentWillMount() {
        this.props.getProfiles();
      }

      render() {
      const { profiles, classes } = this.props;
      const { navigate } = this.props.navigation;


    const Profiles = profiles.map((item) => (
          <ListItem key={item._id} style={styles.FlexRow}>
                
                    <View style={stylesRC.ThumbnailWrapper}> 
                      <Thumbnail style={stylesRC.ThumbnailImage}   source={{uri: `https:${item.avatar}`}} />
                    </View>
        
                    <View> 
                      <Text style={stylesRC.UserName}>{item.username}</Text>
                    </View>
   
          </ListItem>
      
    ))

    
    return (
      <Container style={styles.CardBackground}>
       
       <Header style={styles.DarkOpacityBackground}>
          <Left>
           
          </Left>
          <Body>
            <Title style={styles.AccentColor1Font}>Profiles</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text></Text>
            </Button>
          </Right>
        </Header> 
 
        <Content>
        
          <View style={{marginVertical: 10}}>  
          <AdjustableInput 
          placeholder='search'
          value=''
          icon='search'
          />
          </View>

           {Profiles}
         
          </Content>

          <Footer_Nav FooterData={FooterData} Navigation={navigate}/>
  
      </Container>

     
    )
  }
}




const mapStateToProps = state => ({
  profiles: state.profiles.items,
})


export default connect(mapStateToProps, {getProfiles})(Profiles);
 