// Library Imports
import React from 'react'
import { View, Text } from 'react-native' 
// Style Imports
import styles from './styles'

export default function SignUpHeader(props){
    return(
        <View>
            <Text style={styles.headerText}>
                Your <Text style={styles.meaningful}>Meaningful</Text> {'\n'}Experience Starts Here
            </Text>
        </View>
    )
} 