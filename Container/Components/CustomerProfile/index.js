// Library Imports
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, ScrollView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, FooterTab, Left, Body, Title, Content, Form, Label} from 'native-base';
import { Images, Colors, Fonts, Metrics } from '../../Themes/';
import styles from './styles'
import { Section1, Section2, Section3, Section4 } from './CustomerProfileSections'

export default class CustomerProfileComponent extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Container style={styles.container}>
                <Header>
                    {/* add top navi bar */}
                    <Left>
                        {/* back arrow */}
                    </Left>
                    <Body>
                        {/* Personal Profile */}
                    </Body>
                    <Right>
                        {/* edit button */}
                    </Right>
                </Header>
                {/* Body */}
                <ScrollView>
                    <View style={styles.profileBody}>
                        <Section1 />
                        <Section3 />
                        <Section2 />
                        <Section4 />
                    </View>
                </ScrollView>
            </Container>
        )
    }
}

// CustomerProfileComponent.propTypes = {
//     name: PropTypes.string,
//     email: PropTypes.string,
//     uid: PropTypes.string
// }

// const mapStateToProps = state => ({
//     name: state.login.name,
//     email: state.login.email,
//     uid: state.login.uid
// });

// export default connect(mapStateToProps)(CustomerProfileComponent)
