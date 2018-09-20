// Library Imports
import React, { Component } from 'react'
import { View, Image } from 'react-native'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// Component Imports
import LoginButton from './LoginButton'
import LoginInput from './LoginInput'
import SignUpButton from './GoToSignUp'
import { doUserLogin, doSeniorLogin } from '../../Actions/LoginAction'
// Style Imports
import styles from './styles'

class LoginForm extends Component{
    constructor(props){
        super(props)
        state = {
            email: '',
            password: ''
        }
        this.doLogin = this.doLogin.bind(this)
        this.setCredentials = this.setCredentials.bind(this)
    }

    setCredentials(text, name){
        if(name === "Email"){
            this.setState({
                email: text
            })
        }
        else{
            this.setState({
                password: text
            })
        }
    }

    doLogin(){
        if(this.props.loginType === "Customer"){
            this.props.doUserLogin(this.state);
        }
        else{
            console.log('perform login')
            this.props.doSeniorLogin(this.state)
            this.props.navigate(this.props.destination)
        }
    }

    render(){
        return(
            <View style={styles.loginFormBody}>
                <Image source={this.props.logoImage} style={styles.logostyle}/>
                <View style={styles.inputFieldSec}>
                    <LoginInput update={this.setCredentials} name="Email" secureEntry={false} />
                    <LoginInput update={this.setCredentials} name="Password" secureEntry={true} />
                </View>
                <View style={styles.signInSec}>
                    <LoginButton action={this.doLogin} buttondialogsignup={styles.buttondialogsignup} buttonsignin={styles.buttonsignin} />
                    <SignUpButton buttondialogsignup={styles.buttondialogsignup} buttonsignin={styles.buttonsignin} navigate={this.props.navigate} destination="SignUpComponent" />
                </View>
            </View>
        )
    }
}

LoginForm.propTypes = {
    loginType: PropTypes.string,
    doUserLogin: PropTypes.func.isRequired,
    doSeniorLogin: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    loginType: state.login.loginType
})

export default connect(mapStateToProps, {doUserLogin, doSeniorLogin})(LoginForm)