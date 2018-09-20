import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles'

// Component Imports
import { Section1, Section2, Section3ExistingClass, Section3NoExistingClass } from './SeniorProfileSection'
import { Header, Left, Body, Right } from 'native-base';

class SeniorProfileComponent extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.container}>
                <Header style={styles.header}>
                    <Left style={styles.left}>
                    </Left>   
                    <Body style={styles.body}>
                        <Text style={styles.headerText}>{this.props.name}'s Profile</Text>
                    </Body>
                    <Right style={styles.right}>
                        <TouchableOpacity onPress={() => alert('To be implemented')}>
                            <Text style={styles.headerText}>Edit</Text>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <View style={styles.profileBody}>
                    <Section1 name={this.props.name} email={this.props.email} contact={this.props.contactNo}/>
                    <Section3NoExistingClass navigate={this.props.navigation.navigate} destination="NewClassComponent"/>
                </View>
            </View>
        )
    }
}

SeniorProfileComponent.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    contactNo: PropTypes.string
}

const mapStateToProps = state => ({
    name: state.senior.name,
    email: state.senior.email,
    contactNo: state.senior.contactNo
})

export default connect(mapStateToProps, {})(SeniorProfileComponent)
