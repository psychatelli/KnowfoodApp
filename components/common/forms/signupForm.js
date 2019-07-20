


import React, { Component } from "react";
import { Segment, Icon, Button, Text, CardItem, Left, Right, Body, Title, Badge} from "native-base";
import { ImageBackground, View, StatusBar, TextInput, Platform } from "react-native";
import styles from "../../styles/styles"; 
import { connect } from 'react-redux';

import { createUserRequest } from '../../actions';

class SignupForm extends Component {
   

  render() {
    return ( 
        
        <View style={styles.Carditem_Wrapper}>    
            <Text style={styles.TextLight}>THIS IS THE SIGNUPFORM </Text>
        </View>     

        );
    }
}

// SignupForm.protoTypes = {
//     submit: PropType.func.isRequired
// };

export default connect(null, { submit: createUserRequest})(SignupForm);

