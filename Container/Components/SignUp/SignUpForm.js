import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Form } from 'native-base'
// Component Import
import SignUpInput from './SignUpInput'
import SignUpButton from './SignUpButton'
import SignUpHeader from './SignUpHeader'
import { auth, firebasedb }  from '../../Firebase'
// Style Import
import styles from './styles'
import { Metrics } from '../../Themes';

export default class SignUpForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
        }
        this.setName = this.setName.bind(this)
        this.setPassword = this.setPassword.bind(this)
        this.setEmail = this.setEmail.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    setName(value){
        this.setState({name: value})
    }

    setEmail(value){
        this.setState({email: value})
    }

    setPassword(value){
        this.setState({password: value})
    }

    handleChange(){
        auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((data) => {
            // Also create new User entry
            firebasedb.ref('users/' + data.user.uid).set({
                name: this.state.name,
                email: data.user.email
            })
        })
        .catch(error => {
            alert(error)
        });
    }

    render(){
        return(
            <View style={styles.body}>
                <SignUpHeader />
                <View style={{marginTop: Metrics.HEIGHT * 0.05}}>
                    <Form>
                        <SignUpInput name="name" update={this.setName} placeholder="Name" secureEntry={false} />
                        <SignUpInput name="email" update={this.setEmail} placeholder="Email" secureEntry={false} />
                        <SignUpInput name="password" update={this.setPassword} placeholder="Password" secureEntry={true} />
                        <SignUpButton doSignUp={this.handleChange} button={styles.button} />
                    </Form>
                </View>
            </View>
        )
    }

}