import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default class LoginButton extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(){
        this.props.action()
    }

    render(){
        return(
            <TouchableOpacity info style={this.props.buttondialogsignup} onPress={this.handleChange}>
                <Text autoCapitalize="words" style={this.props.buttonsignin}>
                    Sign In
                </Text>
            </TouchableOpacity>
        )
    }
}