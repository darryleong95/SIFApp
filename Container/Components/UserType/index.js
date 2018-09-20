import React, { Component } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { Container, ScrollView } from 'native-base';

// Component Imports
import UserTypeButton from './UserTypeButton'
import styles from './styles';

export default function UserType(props){
    return(
        <View style={styles.container}>
            <View style={styles.body}>
                <UserTypeButton userType="Customer" navigate={props.navigation.navigate} destination="LoginComponent"/>
                <UserTypeButton userType="Senior" navigate={props.navigation.navigate} destination="LoginComponent"/>
            </View>
        </View>
    )
} 