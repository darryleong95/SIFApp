import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { setLoginType } from '../../Actions/LoginAction'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './styles'

class UserTypeButton extends Component {
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(){
        this.props.setLoginType(this.props.userType)
        this.props.navigate(this.props.destination)
    }

    render(){
        return(
            <TouchableOpacity style={styles.userButton} onPress={this.handleChange}>
                <Text style={styles.userText}>
                    I am a {this.props.userType}
                </Text>
            </TouchableOpacity>
        )
    }
    
}

UserTypeButton.propTypes = {
    setLoginType: PropTypes.func.isRequired,
}

export default connect(null, {setLoginType})(UserTypeButton)