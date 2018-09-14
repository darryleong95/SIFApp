import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

export default function LoginButton(props){
    return(
        <TouchableOpacity info style={props.buttondialogsignup} onPress={() => props.navigate(props.destination)}>
            <Text autoCapitalize="words" style={props.buttonsignin}>
                Sign In
            </Text>
        </TouchableOpacity>
    )
}