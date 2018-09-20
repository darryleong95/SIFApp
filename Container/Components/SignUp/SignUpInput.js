// Library Import
import React, { Component } from 'react'
import { I18nManager } from 'react-native'
import { Item, Input } from 'native-base'
// Styles Import
import styles from './styles'

export default class SignUpInput extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(text){
        this.props.update(text, this.props.name)
    }

    render(){
        return (
            <Item underline style={styles.item}>
                <Input 
                    placeholderTextColor='#929597' 
                    textAlign={I18nManager.isRTL ? 'right' : 'left'} 
                    placeholder={this.props.placeholder} 
                    style={styles.input} 
                    secureTextEntry={this.props.secureEntry}
                    onChangeText={text => this.handleChange(text)}
                    />
            </Item>
        )    
    }
    
}