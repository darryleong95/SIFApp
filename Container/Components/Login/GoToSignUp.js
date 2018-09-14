// Library Imports
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default function SignUpButton(props){
    return(
        <TouchableOpacity info style={props.buttondialogsignup} onPress={() => props.navigate(props.destination)}>
            <Text autoCapitalize="words" style={props.buttonsignin}>
                New User? Sign Up here!
            </Text>
        </TouchableOpacity>
    )
}