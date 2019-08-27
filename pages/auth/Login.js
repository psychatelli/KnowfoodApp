import React, { Component } from 'react'
import { connect } from 'react-redux';
import { login, loadUser, logout } from '../../actions/auth';
import Alert from '../../components/common/alert';
import { Container, View, Header, Content, Card, CardRecipeItem, Thumbnail, Text, Button, Icon, Left, Body, Form, Item, Label, Input  } from 'native-base';
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/styles';
import {setToken, getAsyncStorage, deleteAsyncStorage} from '../../actions/utils/setAuthToken';
import {AsyncStorage} from 'react-native';

class Login extends Component {
         
  
      
    constructor(props) {
        super(props);
        // this._loadData();

        this.state = {
            email: '',
            password: '',
            errors: {},
            User: this.props.user
        }

    }
 
    componentWillMount() {
        // getAsyncStorage()
        }
    
                                          
               
    componentWillReceiveProps(nextProps) {
       
            
        if(nextProps.isAuthenticated) {
            this.props.navigation.navigate('Recipes')
            console.log('IS AUTHETICATED')
            //  async () => {
            //     try {
            //       await AsyncStorage.setItem('Usertoken', 'Adam');
            //     } catch (error) { 
            //       // Error saving data
            //     }
            //   };
        }

    }

    // if(AsyncStorage.getItem('token')){
    //     setAuthToken(AsyncStorage.token)
    //     console.log('App.js token in AsyncStorage')
    //   }

        
  
    onSubmit() {
    const userData = {
        email: this.state.email,
        password: this.state.password
    }
    //    console.log(this.state.password)
   
        
        this.props.login(userData);
         
    }
    LogOut() {
        this.props.logout();  
        }
   
    
     render() {
        const { errors } = this.state;
        const { user, token, isAuthenticated } = this.props;

    //    console.log(`YOUR ERRORS: ${errors}`)

        return(
            <Container style={styles.loginWrapper}>

                    <KeyboardAvoidingView behavior='padding'> 

                <View> 

                <View style={styles.LoginContainer}>
                <Text style={{fontSize: 30}}>{token}</Text>

                    <Text style={styles.LoginTitle}>LOGIN</Text>
                    <Alert />
                  

                            <Item regular style={styles.LoginInput}> 
                            <Input
                            placeholder='Email'
                            autoCapitalize='none'
                            onChangeText={(email) => this.setState({email: email})}
                            />
                            {/* {errors.email && (<View> {errors.email} </View> )} */}

                            </Item>
                        
                                                
                        <Item regular style={styles.LoginInput}> 
                        <Input 
                            placeholder='password'
                            onChangeText={(password) => this.setState({password})}
                            secureTextEntry 
                            />
                        </Item>
                        {/* {errors.password && (<View> {errors.password} </View> )} */}
                        
                       

                        <Button full style={styles.PrimaryButton} onPress={() => this.onSubmit()} ><Text>Submit</Text></Button>
                        <Button full style={styles.PrimaryButton} onPress={() => this.props.navigation.navigate('Recipes')}><Text>Register</Text></Button>
                        <Button full style={styles.PrimaryButton} onPress={() => this.LogOut()} ><Text>Logout</Text></Button>

                    <View>
                        <Text>If you don't have an account</Text>
                        {/* <Link to={'/register'}>
                        <Text>Sign Up</Text>
                        </Link> */}
                    </View>
                </View>
                </View>
                </KeyboardAvoidingView>

            </Container>
        )
    }
}
 
// Login.propTypes = {
//     login: PropTypes.func.isRequired,
//     isAuthenticated: PropTypes.bool,

// }
   
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user,
    token: state.auth.token

})
 
export default connect(mapStateToProps, { login, loadUser, logout })(Login); 
// export default Login;
