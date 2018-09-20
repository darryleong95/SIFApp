import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Form } from 'native-base'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EmailValidator from 'email-validator'

// Component Import
import SignUpInput from './SignUpInput'
import SignUpButton from './SignUpButton'
import SignUpMainText from './SignUpMainText'

// Actions Import
import { doUserSignUp } from '../../Actions/UserAction'
import { doSeniorSignUp } from '../../Actions/SeniorAction'

// Style Import
import styles from './styles'
import { Metrics } from '../../Themes';

class SignUpForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            contactNo: '',
            password: '',
            passwordEquality: false
        }
        this.setCredentials = this.setCredentials.bind(this)
        this.handleSignUp = this.handleSignUp.bind(this)
        this.checkPasswords = this.checkPasswords.bind(this)
    }

    setCredentials(text, name){
        if(name === "name"){
            this.setState({
                name: text
            })
        }
        else if (name === "email"){
            this.setState({
                email: text
            })
        }
        else if (name === "password"){
            this.setState({
                password: text
            })
        }
        else {
            this.setState({
                contactNo: text
            })
        }
    }

    handleSignUp(){
        // check for valid contact number (Check whether all are digits)
        var contactNumberIsValid = /^\d+$/.test(this.state.contactNo)

        if(EmailValidator.validate(this.state.email)){
            if(this.props.loginType === "Customer"){
                this.props.doUserSignUp(this.state)   
            }
            else{
                if(contactNumberIsValid){
                    this.props.doSeniorSignUp(this.state)
                    this.props.navigate('SeniorStack')
                }
                else{
                    alert('Ensure Contact number is valid')
                }
            }
        }
        else {
            alert('The Email you have entered is Invalid')
        }
    }

    checkPasswords(value){
        if(this.state.password === value && value){
            // show error message
           this.setState({
               passwordEquality: true
           })
        }
    }

    render(){
        return(
            <View style={this.props.loginType === 'Customer'? styles.userSignUp : styles.seniorSignUp}>
                <SignUpMainText />
                <View style={{marginTop: Metrics.HEIGHT * 0.05}}>
                    <Form>
                        <SignUpInput name="name" update={this.setCredentials} placeholder="Name" secureEntry={false} />
                        <SignUpInput name="email" update={this.setCredentials} placeholder="Email" secureEntry={false} />
                        {
                            this.props.loginType !== 'Customer' &&
                            <SignUpInput name="contactNo" update={this.setCredentials} placeholder="Contact No." secureEntry={false} />
                        }
                        <SignUpInput name="password" update={this.setCredentials} placeholder="Password" secureEntry={true} />
                        <SignUpInput name="password" update={this.checkPasswords} placeholder="Confirm Password" secureEntry={true} />
                        {
                            !this.state.passwordEquality && 
                                <View style={{marginTop: Metrics.HEIGHT * 0.02, alignSelf:"center", width: Metrics.WIDTH * 0.80}}>
                                    <Text style={{color:'white'}}>Please ensure password matches</Text>
                                </View> 
                        }
                        <SignUpButton text="Sign Up!" doSignUp={this.handleSignUp} button={styles.signUpButton} /> 
                    </Form>
                </View>
            </View>
        )
    }
}

SignUpForm.propTypes = {
    doUserSignUp: PropTypes.func.isRequired,
    doSeniorSignUp: PropTypes.func.isRequired,
    name: PropTypes.string
}

const mapStateToProps = state => ({
    loginType: state.login.loginType
})

export default connect(mapStateToProps, {doUserSignUp, doSeniorSignUp})(SignUpForm)