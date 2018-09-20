import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class NewClassComponent extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <View>
                <Text style={{fontSize: 30}}>
                    Made It
                </Text>
            </View>
        )
    }


}