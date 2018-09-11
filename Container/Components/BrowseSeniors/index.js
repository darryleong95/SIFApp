
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ScrollView,BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Header, Left, Body, Title, Content } from 'native-base';
// import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { Metrics } from '../../Themes/';
// Screen Styles
import styles from './styles';

const data = [
  {
    id: 1,
    friendProfile: 'https://antiqueruby.aliansoftware.net//Images/profile/snap_user1__p28.png',
    bgImg: require('../../Images/senior-lady.png'),
    name: 'Nancy lam'
  },
  {
    id: 2,
    friendProfile: 'https://antiqueruby.aliansoftware.net//Images/profile/snap_user2_ptwentynine_p28.png',
    bgImg: require('../../Images/Cooking.png'),
    name: 'Susie Gan'
  },
  {
    id: 3,
    friendProfile: 'https://antiqueruby.aliansoftware.net//Images/profile/snap_user3_ptwentynine_p28.png',
    bgImg: require('../../Images/senior-lady.png'),
    name: 'Lim Siew Tok'
  },
  {
    id: 4,
    friendProfile: 'https://antiqueruby.aliansoftware.net//Images/profile/snap_user4_ptwentynine_p28.png',
    bgImg: require('../../Images/senior-lady.png'),
    name: 'Yan Ying Seng'
  },
  {
    id: 5,
    friendProfile: 'https://antiqueruby.aliansoftware.net//Images/profile/snap_user5_ptwentynine_p28.png',
    bgImg: require('../../Images/Cooking.png'),
    name: 'Ho Sau Lan'
  },
  {
    id: 6,
    friendProfile: 'https://antiqueruby.aliansoftware.net//Images/profile/snap_user6_ptwentynine_p28.png',
    bgImg: require('../../Images/senior-lady.png'),
    name: 'Kim Myon Yun'
  },
  {
    id: 7,
    friendProfile: 'https://antiqueruby.aliansoftware.net//Images/profile/snap_user7_ptwentynine_p28.png',
    bgImg: require('../../Images/Cooking.png'),
    name: 'Lebron James'
  }
]

export default class BrowseSeniorsComponent extends Component {

  constructor(props) {
 		super(props);
 		this.state = {
      isFavorite: false,
      selectedLots: 2,
      bgImg: require('../../Images/elderly-language.png'), 
      name: 'Susie Gan'
    };
    this.changeInformation = this.changeInformation.bind(this)
   }
   
  changeInformation(id, bgImg, name){
    // set active information on state
    this.setState({
      selectedLots: id,
      bgImg: bgImg,
      name: name
    })
    if(id>1){
      const offsetX = (id * (Metrics.WIDTH * 0.07));
      this.refs.imageList.scrollTo({ x: offsetX })
    }
    else{
      const offsetX = ((Metrics.WIDTH * 0));
      this.refs.imageList.scrollTo({ x: offsetX })
    }
  }

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

    return(
      <Container>
        <ImageBackground source={this.state.bgImg} style={styles.imgContainer}>
          {/* <Header
            androidStatusBarColor={'transparent'}
            style={styles.header}> */}

            {/* Take up the space */}
            {/* <Left style={styles.left}>
              <TouchableOpacity style={styles.backArrow} onPress={()=>this.props.navigation.navigate('Profile')}>
                <Icon name={I18nManager.isRTL ? "ios-arrow-forward" : "ios-arrow-back"} style={styles.backArrow2}/>
              </TouchableOpacity>
            </Left> */}

            {/* Title */}
            {/* <Body style={styles.body}>
              <Title style={styles.headerTitle}>
                Discovery
              </Title>
            </Body> */}

            {/* Right Icon */}
            {/* <Right style={styles.right}>
              <Button transparent>
              </Button>
            </Right>
          </Header> */}
          <View>
            <ScrollView horizontal={true} ref='imageList' showsHorizontalScrollIndicator={false} style={styles.profileImgScrollBg}>
            {
              data.map((item, index)=>{
                return(
                  <TouchableOpacity key={index} style={styles.profileImgBg} onPress={() => this.changeInformation(item.id, item.bgImg, item.name)}>
                    <Image source={{uri:item.friendProfile}} style={(this.state.selectedLots == item.id) ? styles.activeImage : styles.normalImage}/>
                  </TouchableOpacity>
                )
              })
            }
            </ScrollView>
          </View>
          <View style={styles.slidesec}>
            <View style={styles.nameBg}>
              <Text style={styles.nameTxt}>{this.state.name}</Text>
              <TouchableOpacity onPress={()=>this.setState({isFavorite: !this.state.isFavorite})} style={(this.state.isFavorite) ? styles.activeButton : styles.normalButton}>
                <FontAwesome name="heart" size={22} color="white"/>
              </TouchableOpacity>
            </View>
            <View style={styles.addressBg}>
              <View style={styles.mappinBg}>
                <Entypo name="location-pin" size={25} color="#0691ce"/>
              </View>
              <Text style={styles.addressTxt}>Seattle,US</Text>
            </View>
            {/* <LinearGradient locations={[0.01,0.6]} colors={['transparent', 'rgba(0,0,0,0.7)']} style={styles.shadowBg}> */}
            <View style={styles.addressBg}> 
              <TouchableOpacity onPress={ () => this.props.navigation.navigate("SeniorProfileComponent") }>
                <Text style={styles.nameBg}>
                  Learn more about {this.state.name}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.descrtiptionBg}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.descriptionTxt}>
                  What i cook
                </Text>
              </ScrollView>
            </View>
            
            {/* </LinearGradient> */}
          </View>
        </ImageBackground>
      </Container>

    );
  }
}
