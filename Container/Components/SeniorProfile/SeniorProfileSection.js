// Library Imports
import React, { Component } from 'react'
import ReadMore from 'react-native-read-more-text'
import { View, Text, Image, TouchableOpacity, ListsView } from 'react-native'

// Styles Imports
import styles from './styles'

export class Section1 extends Component {
    constructor(props){
       super(props) 
    }   

    render(){
        const profileImageOne = require('../../Images/SIF/listingpage/susan_lim2.jpg')
        return(
            <View style={styles.firstSection}>
                <View style={{flex:1, flexDirection:"column"}}>
                    <Text style={styles.profileName}>{this.props.name}</Text>
                    <Text style={styles.profileName}>{this.props.email}</Text>
                    <Text style={styles.profileName}>{this.props.contact}</Text>
                </View>
                <Image source={profileImageOne} style={styles.hostImg} />
            </View>
        )   
    }
}

export class Section2 extends Component {

    _renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={styles.readMore} onPress={handlePress}>
                Read more
            </Text>
        );
    }

    _renderRevealedFooter = (handlePress) => {
        return (
            <Text style={styles.readMore} onPress={handlePress}>
                Show less
            </Text>
        );
    }

    render(){
        return(
            <View style={styles.aboutMeSection}>
                {/* About myself */}
                <Text style={styles.aboutMeHeader}>
                    About me
                </Text>
                <ReadMore
                    numberOfLines={3}
                    renderTruncatedFooter={this._renderTruncatedFooter}
                    renderRevealedFooter={this._renderRevealedFooter}
                    onReady={this._handleTextReady}>
                    <Text style={styles.aboutMeText}>
                        Auntie Susan was born and raised in Szechuan, China. She migrated to Singapore with her family when she was 9 years old. She enjoys playing Chinese chess and doing Tai-chi. She would definitely love to find a new chess partner or one to practice Tai-chi with, if you are up for it! {"\n\n"} As a child, she spent a lot of time on my childhood with her in the kitchen with her mother. Her mother helped developed her skills and had a lot of experiences making delicious dishes for her family.  {"\n\n"} She feels that it is important to connect with the younger generation to impart the skills and knowledge that she has. Family recipes that were passed down to her are held very close to her heart. She really hopes that her family recipes will be passed to passionate individuals who will appreciate her craft
                    </Text>
                </ReadMore>
            </View>
        )
    }
}

export class Section3ExistingClass extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Text>
                    Dank Memes
                </Text>
            </View>
        )
    }
}

export class Section3NoExistingClass extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.firstSection}>
                <TouchableOpacity onPress={() => this.props.navigate(this.props.destination)}>
                    <Text>
                        Click here to Create a class!
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}