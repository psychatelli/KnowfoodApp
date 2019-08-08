import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { login } from '../../actions/auth';
// import Alert from '../../components/common/alert';
import { Container, View, Header, Content, Card, CardRecipeItem, Thumbnail, Text, Button, Icon, Left, Body, Form, Item, Label, Input  } from 'native-base';
import { KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import styles from '../../styles/styles';


class Login extends Component {
          example
          static navigationOptions = ({ navigation }) => ({
            header: null,
          })

      
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {},
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
 
        componentDidMount() {
            // if(this.props.isAuthenticated){
            //     // this.props.history.push('/recipies');
            //     window.location.href = '/recipies';
            // }
        }

        componentWillReceiveProps(nextProps) {
            // if(nextProps.isAuthenticated) {
            //     // this.props.history.push('/recipies');
            //     window.location.href = '/recipies';
            // }
        }

    // onChange(e) {
    //     this.setState({ [e.target.name]: e.target.value })

    //     console.log(this.state.email)
    // }

    onChange(text, name){
        if(name=='email'){
            this.setState({
                name: text
            })
        }
        // this.setState({[name]: input})
        console.log(this.state.email)
    } 

    onSubmit(e) {
       let collection= {}
       collection.name= this.state.name,
       collection.email= this.state.email
    }
  
 
    render() {
        const { errors } = this.state;

       

        return(
            <Container style={styles.loginWrapper}>
                <View> 
                  <KeyboardAvoidingView behavior='padding'> 

                <View style={styles.LoginContainer}>
                    <Text style={styles.LoginTitle}>Log In</Text>
                    {/* <Alert /> */}

                       
                            {/* <Label>Email</Label> */}
                            <Item regular style={styles.LoginInput}> 
                            <Input
                            name="email"
                            placeholder='Email'
                            // value={this.state.email}
                            onChange={(text) => this.onChange(text, 'email')}
                            // error={errors.email}
                            />
                            </Item>
                       
                        

                            
                        
                        {/* <Label>Password</Label>       */}
                        <Item regular style={styles.LoginInput}> 
                        <Input 
                            name="email"
                            placeholder='password'
                            // value={this.state.email}
                            onChange={(text) => this.onChange(text, 'password')}
                            // error={errors.email}
                            />
                        </Item>
                        {/* {errors.password && (<View style="invalid-feedback"> {errors.password} </View> )} */}
                        
                       

                        <Button full style={styles.PrimaryButton} onPress={() => this.onSubmit()} ><Text>Sibmit</Text></Button>
                        <Button full style={styles.PrimaryButton} onPress={() => this.props.navigation.navigate('Recipes')}><Text>Register</Text></Button>

                    <View>
                        <Text>If you don't have an account</Text>
                        {/* <Link to={'/register'}>
                        <Text>Sign Up</Text>
                        </Link> */}
                    </View>
                </View>
                </KeyboardAvoidingView>
                </View>
            </Container>
        )
    }
}
 
// Login.propTypes = {
//     login: PropTypes.func.isRequired,
//     isAuthenticated: PropTypes.bool,

// }

// const mapStateToProps = (state) => ({
//     isAuthenticated: state.auth.isAuthenticated
// })

// export default connect(mapStateToProps, { login })(Login); 
export default Login;
