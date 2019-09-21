import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, View, Header, Content, Form, Card, CardRecipeItem, Thumbnail, Input, Text, Button, Icon, Left, Body,  } from 'native-base';
import stylesRC from '../../styles/StylesRecipeComponent';
import styles from '../../styles/styles';

import { addComment, deleteComment } from '../../actions/recipesAction';

class Comments extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }



  onSubmit = () => {

    const { user } = this.props.auth;
    const { recipeId } = this.props;
    console.log(`your user: ${JSON.stringify(user)}`)
    console.log(`your user id: ${user._id}`)

    const newComment = {
      text: this.state.text,
      username: user.username,
      avatar: user.avatar,
      user: user._id
    }

    this.props.addComment(recipeId, newComment);
    this.setState({ text: ' '});
}

deleteComment(commentId) {
    this.props.deleteComment(this.props.recipeId ,commentId)
}

handleChange (e) {
  this.setState({
    [e.target.name]: e.target.value
    })
  }
 


  render() {

const { Comment, recipeId, Visibility} = this.props;
const {text } = this.state;
const { user } = this.props.auth;

 
var CommentItems = Comment.map((item) => {
    return (
            <View key={item._id} style={stylesRC.Comment}>
                  <View style={styles.SpaceBetween}>
                      <View style={stylesRC.HeaderInfo}>
                          <View style={stylesRC.ThumbnailWrapper}> 
                            <Thumbnail source={{uri: `https:${item.avatar}`}} />
                          </View>
              
                          <View style={stylesRC.UserNameWrapper}> 
                            <Text style={styles.AccentColor1Font}> {item.username}</Text>
                            <View style={styles.white_font}><Text>{item.date} </Text></View> 
                          </View>
                      </View>
                      
                      {Visibility ?  <Button  bordered success small onPress={() => { this.deleteComment(item._id)}} >
                        <Icon name='close' style={{color: 'white'}} />
                      </Button>
                :<Text></Text> }
                      
                  </View>
        
                  <View> 
                     <Text style={styles.white_font}>{item.text}</Text>
                  </View>
          </View>
     );
    });
 

    return  (
        <View style={{marginHorizontal: 5, marginVertical: 10}}>
            <Form onSubmit={this.onSubmit.bind(this)}>
                  <Input
                    placeholder='add comment...'
                    value={text}
                    onChangeText={(text) => this.setState({text: text})}
                    />
                    <Button full style={styles.PrimaryButton} onPress={() => this.onSubmit()} ><Text>Submit</Text></Button>

            </Form>
            {CommentItems}
        </View>
      )
   }
}

const mapStateToProps = state => ({
  auth: state.auth,

});

 export default connect(mapStateToProps, {addComment, deleteComment})(Comments);

