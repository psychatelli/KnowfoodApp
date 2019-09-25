import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getProfile } from '../actions/profileActions';
import { getUsersRecipes } from '../actions/recipesAction';
import { Container, View, Header, Content, Card, CardRecipeItem, Thumbnail, Title,Right, Text, Button, Icon, Left, Body,  } from 'native-base';
import Footer_Nav from '../components/common/footer_nav/footer_nav';
import styles from '../styles/styles';
import stylesRC from '../styles/StylesRecipeComponent';
import RecipeComponent from '../components/RecipeComponent/recipeComponent';



export class Profile extends Component {


      constructor(props) {
        super(props);
        this.state = {
          
          errors: {},
          
        }
    }

      componentWillMount() {
        //  this.props.getProfile(this.props.auth.user._id);
        //  this.props.getUsersRecipes(this.props.auth.user._id)
      }

      render() {
      const { profile, recipes, classes } = this.props;
      const { navigate } = this.props.navigation;

      console.log(`user : ${JSON.stringify(this.props.auth.user)}`)
    return (
      <Container style={styles.CardBackground}>
        <Header style={styles.DarkOpacityBackground}>
          <Left>
           
          </Left>
          <Body>
            <Title style={styles.AccentColor1Font}>{profile.username}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text></Text>
            </Button>
          </Right>
        </Header>

       <Content> 

        <View style={stylesRC.Header_two}>
       

            <View>
           <Thumbnail style={stylesRC.ThumbnailImage}  source={{uri: `https:${profile.avatar}`}} />
           <Text style={styles.white_font}>{profile.username}</Text>

           </View>

           <View>

              <View style={styles.FlexRow}>
                <Text style={styles.white_font}>  <Text style={styles.custom_text}>recipes:</Text> {recipes.length}</Text> 
                <Text style={styles.white_font}>     <Text style={styles.custom_text}>followers:</Text> {recipes.length}</Text>
              </View>

            </View>

         </View>

          <RecipeComponent Navigation={navigate} RecipeObj={recipes} />

          </Content>

          <Footer_Nav  pageIndicator='4' Navigation={navigate}/>

      </Container>

     
    )
  }
}




const mapStateToProps = state => ({
  profile: state.profiles.item,
  recipes: state.recipes.profileRecipes,
  auth: state.auth,

})


export default connect(mapStateToProps, {getProfile, getUsersRecipes})(Profile);
  