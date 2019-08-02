import React from 'react';
import { Button, View, Text,StyleSheet, Image } from 'react-native';


const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  Info: {
    flex: 1,
    // alignItems: center,
    // View: { color: 'gray',  marginRight: 5, },
    // Date: {fontSize: 10,},
    // p: { margin: 0 10 }
},
Card:  {
  padding: 10,
  // border: solid thin rgb(224, 224, 224),
  // @extend .Shadow,
  // margin: 10px 0px 10px 0px,
  backgroundColor: 'white',
  borderRadius: 10,
},

h5: {
  // color: rgb(92, 92, 92);
  textTransform: 'uppercase',
  fontSize: 15
},
Avatar: {
    borderRadius: 50,
    width: 30,
},
SpaceBetween: {
  flex: 1,
  justifyContent: 'space-between'

}
});



export default class RecipeComponent extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      recipes: [
        {
          thumbnail: "https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg",
              title: "Enchilala",
              ingredients: [],
              _id: "5d17719c0ca09b696207d67f",
              username: "Adam D",
              avatar: "//www.gravatar.com/avatar/2675069ec8b9eb8c141e97cf92775f36?s=200&r=pg&d=mm",
              user: "5ced8fd90c50eaf96c72c91e",
              date: "2019-06-29T14:11:40.676Z",
        },
        {
            thumbnail: "https://photos.smugmug.com/Test/i-W5SXVkM/0/1d663a9e/S/fettuccine-S.jpg",
              title: "Tacos",
              ingredients: [],
              _id: "5d17719c0ca09b696207d67f",
              username: "Adam D",
              avatar: "//www.gravatar.com/avatar/2675069ec8b9eb8c141e97cf92775f36?s=200&r=pg&d=mm",
              user: "5ced8fd90c50eaf96c72c91e",
              date: "2019-06-29T14:11:40.676Z",
        }
      ]
    };
  }

  static navigationOptions = {
    title: 'Recipes',
  };



  render() {


    const Recipes = this.state.recipes.map((item) => (
      <View key={item._id} style={styles.Card}>
          <View>
              <View >  
              <Text style={styles.h5}> {item.title} </Text>

                {/* <View style={styles.Info}>
                  <View> <Image style={styles.Avatar} src={item.avatar} /> </View>
                  <View> <Text> {item.username} </Text> </View>
                </View>  */}
                      
              </View>
 
              <View> 
              {/* <button onClick={e => addLike(item._id)}>  <i className="material-icons">favorite_border</i> {item.likes.length} </button> */}


                {/* <Menu_dropdown  
                editContent={this.editRow.bind(this, item)}/> */}
              </View>

          </View>
          {/* <Link to={`/recipe/${item._id}`}>  
          <img src={item.thumbnail} /> 
          </Link> */}

          {/* <Image source={require('./my-icon.png')}   onPress={() => {
            this.props.navigation.navigate('Tutorial', {itemId: 33 });
          }} /> */}

      </View>
    ))




    return (
      <View>
        <Text>Recipes</Text>

        {Recipes}

         <Button
          title="Go to Details"
          onPress={() => {
            /* 1. Navigate to the Details route with params */
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
            })
          }}
        /> 

       </View>
    );
  }
}