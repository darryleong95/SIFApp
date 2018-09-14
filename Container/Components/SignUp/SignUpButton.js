// Library Imports
import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
// import {  } from 'native-base'
import { Metrics } from '../../Themes';
// Component Imports


export default class SignUpButton extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <TouchableOpacity onPress={this.props.doSignUp} style={{marginTop: (Metrics.HEIGHT * 0.03)}}>
                <Text style={this.props.button}>Sign Up!</Text>
            </TouchableOpacity>
        )
    }
}