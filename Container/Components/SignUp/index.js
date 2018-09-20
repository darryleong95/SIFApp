// Library imports
import React, { Component } from 'react'
import { View, ImageBackground } from 'react-native';
import { Container } from 'native-base';

// Component Imports
import SignUpForm from './SignUpForm'

// style imports
import styles from './styles'

export default class SignUpComponent extends Component {
    constructor(props){
        super(props)        
    }

    render(){
        const imageUri = require('../../Images/SIF/vietnam1.jpg')
        return(
            <Container>
                <ImageBackground style={styles.imgContainer} source={imageUri} >
                    <View style={styles.overlay} /> 
                </ImageBackground>
                <SignUpForm navigate={this.props.navigation.navigate} destination="CustomerProfileComponent"/>
			</Container>
        )
    }
}