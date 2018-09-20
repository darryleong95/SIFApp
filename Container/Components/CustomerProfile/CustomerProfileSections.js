// Library Imports
import React, { Component } from 'react'
import ReadMore from 'react-native-read-more-text'
import { View, Text, Image, TouchableOpacity, ListsView } from 'react-native'
// Styles Imports
import styles from './styles'

const review = [
    {
        id: 1,
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        id: 12,
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        id: 3,
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        id: 4,
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    {
        id: 5,
        review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
]

export class Section1 extends Component {
    render(){
        const profileImageOne = require('../../Images/SIF/listingpage/susan_lim2.jpg')
        return(
            <View style={styles.firstSection}>
                <Text style={styles.profileName}>Darryl Leong</Text>
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

export class Section3 extends Component {

    render(){
        return(
            <View style={styles.reviewSection}>
                {/* About myself */}
                <Text style={styles.reviewHeader}>
                    5 Reviews
                </Text>
                <View>
                    <View style={styles.reviewTextContainer}>
                        <Text style={styles.reviewText}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </Text>
                        <TouchableOpacity style={styles.moreReviews}>
                            <Text style={styles.moreReviewsText}>
                                Read all 5 Reviews
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export class Section4 extends Component {
    render(){
        return(
            <View>
                
            </View>
        )
    }
}