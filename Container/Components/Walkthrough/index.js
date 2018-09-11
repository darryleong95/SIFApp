
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, TouchableOpacity,BackHandler } from 'react-native';
import { Container } from 'native-base';
import Swiper from 'react-native-swiper';
import LoginComponent from '../Login/index'
// Screen Styles
import styles from './styles';

export default class WalkthroughComponent extends Component {

  constructor(props) {
 		super(props);
     this.state = {};
     this.goToLogin = this.goToLogin.bind(this)
 	}

  componentWillMount() {
	  var that = this
	  BackHandler.addEventListener('hardwareBackPress', function() {
			that.props.navigation.navigate('Home')
	   	return true;
	  });
  }
  
  goToLogin(){
    this.props.navigation.navigate('LoginComponent')
  }

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('rgba(0,0,0,0.3)',true);
			StatusBar.setTranslucent(true);
		}
    let firstImage = require('../../Images/SIF/front1.jpg')
    let secondImage = require('../../Images/SIF/front2.jpg')
    let thirdImage = require('../../Images/SIF/front4.jpg')
    let fourthImage = require('../../Images/SIF/front5.jpg')

    var data = [
      {
        id: 1,
        image: firstImage,
        title: 'WHIP UP A DELICIOUS MEAL',
        description: 'Set up a class with an elderly near you with just a few simple clicks on the application.',
      },
      {
        id: 2,
        image: secondImage,
        title: 'BUILD BONDS',
        description: 'Meet elderlys living near you that have valuable skills and knowledge that they are excited to share.',
      },
      {
        id: 3,
        image: thirdImage,
        title: 'EXPERIENCE CUISINES',
        description: 'Be in touch with cuisines from different cultures and share them with your loved ones',
      },
      {
        id: 4,
        image: fourthImage,
        title: 'A TRUSTED COMMUNITY',
        description: 'Read teacher ratings and reviews from fellow neighbours',
      },
    ]

    return(
     <Container style={styles.container}>
        <View style={styles.slidesec}>
         <Swiper showsButtons={false}
           autoplay={true}
           autoplayTimeout={2.5}
           activeDot={<View style={styles.activeDot} />}
           dot={<View style={styles.dot} />}
           >
             {
              data.map((item, index) => {
                 return (
                   <View style={styles.slide} key={index}>
                     <Image source={item.image} style={styles.sliderImage}/>
                     <View style={styles.contentStyle}>
                        <Text style={styles.headertext}>
                          {item.title}
                        </Text>
                        <Text style={styles.desctext}>
                          {item.description}
                        </Text>
                        <TouchableOpacity onPress={this.goToLogin}>
                          <Text style={styles.buttontext}>Login</Text>
                        </TouchableOpacity>
                     </View>
                   </View>
                 )
               })
             } 
         </Swiper>
       </View>
    </Container>

    );
  }
}
