import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { login } from '../../actions/auth';
// import Alert from '../../components/common/alert';
import { Container, View, Header, Content, Card, CardRecipeItem, Thumbnail, Text, Button, Icon, Left, Body, Form, Item, Label, Input  } from 'native-base';
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

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.login(userData);
    }

 
    render() {
        const { errors } = this.state;

       

        return(
            <Container style={styles.loginWrapper}>
                <View style={styles.LoginContainer}>
                    <Text style={styles.LoginTitle}>Log In</Text>
                    {/* <Alert /> */}

                    <Form onSubmit={this.onSubmit}>
                        <Item inlineLabel>
                            <Label>Email</Label>
                            <Input 
                            // name="email"
                            // type="email"
                            // value={this.state.email}
                            // onChange={this.onChange}
                            // error={errors.email}
                            />
                        </Item>
                        

                            
                        <Item inlineLabel>
                        <Label>Email</Label>      
                        <Input type="password" 
                        // style={styles('form-control form-control-lg', { 'is-invalid' : errors.password } )}  
                            // name="password" 
                            // value={this.state.password}
                            // onChange={this.onChange}
                        />
                        {/* {errors.password && (<View style="invalid-feedback"> {errors.password} </View> )} */}
                        </Item>
                       

                        <Button style={styles.PrimaryButton} onPress={() => this.props.navigation.navigate('Recipes')} type="submit"><Text>Submit</Text></Button>
                    </Form>

                    <View>
                        <Text>If you don't have an account</Text>
                        {/* <Link to={'/register'}>
                        <Text>Sign Up</Text>
                        </Link> */}
                    </View>
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
