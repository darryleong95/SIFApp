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
            <TouchableOpacity onPress={this.props.doSignUp} style={{marginTop: (Metrics.HEIGHT * 0.05)}}>
                <Text style={this.props.button}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}