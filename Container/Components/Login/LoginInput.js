import React from 'react'
import { I18nManager } from 'react-native'
import { Item, Input } from 'native-base'

import styles from './styles'

export default function LoginComponent(props) {
    return (
        <Item underline style={styles.item}>
            <Input 
                placeholderTextColor='#929597' 
                textAlign={I18nManager.isRTL ? 'right' : 'left'} 
                placeholder={props.name} 
                keyboardType={props.keyboardType} 
                style={styles.input} 
                secureTextEntry={props.secureEntry}
                />
        </Item>
    )
}