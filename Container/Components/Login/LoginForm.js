// Library Imports
import React from 'react'
import { View, Image } from 'react-native'
// Component Imports
import LoginButton from './LoginButton'
import LoginInput from './LoginInput'
import SignUpButton from './GoToSignUp'
// Style Imports
import styles from './styles'

export default function LoginForm(props){
    return(
        <View style={styles.loginFormBody}>
            <Image source={props.logoImage} style={styles.logostyle}/>
            <View style={styles.inputFieldSec}>
                <LoginInput name="Email" secureEntry={false} />
                <LoginInput name="Password" secureEntry={true} />
            </View>
            <View style={styles.signInSec}>
                <LoginButton buttondialogsignup={styles.buttondialogsignup} buttonsignin={styles.buttonsignin} navigate={props.navigate} destination={props.destination} />
                <SignUpButton buttondialogsignup={styles.buttondialogsignup} buttonsignin={styles.buttonsignin} navigate={props.navigate} destination="SignUpComponent" />
            </View>
        </View>
    )
}