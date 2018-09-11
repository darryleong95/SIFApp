// Profile Detail mix with Profile Chat

import React, { Component } from 'react';
import { Text,Image, StatusBar, Platform, ScrollView,TouchableOpacity,View, I18nManager, Alert} from 'react-native';
import { Container,Right,Left,Content,Body,Header,Footer} from 'native-base';
// import DateTimePicker from 'react-native-modal-datetime-picker';
import { CalendarList } from 'react-native-calendars';
import ReadMore from 'react-native-read-more-text';
// Screen Styles
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather';

import { Images, Colors, Fonts, Metrics } from '../../Themes/';

/**
 *  Profile Screen
 */


export default class PostSignUpComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDateString: '',
      n: 1,
      markedDates: {
        '2018-09-17': {marked: true},
        '2018-09-18': {marked: true},
        '2018-09-19': {marked: true},
        '2018-09-20': {marked: true},
        '2018-09-24': {marked: true},
        '2018-09-25': {marked: true}
      }
    };
    this.setDate = this.setDate.bind(this)
  }

  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
  };

  setDate(day){
    // Works on both iOS and Android
    const alertTitle = 'Contact Susie!'
    Alert.alert(
      alertTitle,
      '',
      [
        {text: 'Send a voice message', onPress: () => console.log('Ask me later pressed')},
        {text: 'Call', onPress: () => console.log('Cancel Pressed')},
        // {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
    )
    }

    _renderTruncatedFooter = (handlePress) => {
      return (
        <Text style={{color: Colors.tintColor, marginTop: 5, fontSize: Fonts.moderateScale(10), color:'#37BFB6'}} onPress={handlePress}>
          Read more
        </Text>
      );
    }

    _renderRevealedFooter = (handlePress) => {
      return (
        <Text style={{color: Colors.tintColor, marginTop: 5, fontSize: Fonts.moderateScale(10), color:'#37BFB6'}} onPress={handlePress}>
          Show less
        </Text>
      );
    }

    _handleTextReady = () => {
      // ...
    }
  

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
    }
    
    const data = [
  {
    id: 1,
    name: "Goh Liang Seng",
    comment: "Auntie Susan is very knowledgeable about Szechuan cuisine. We were a group of three and comfortably moved through the wet market to discuss and buy produce and other supplies. We had a lot of questions regarding food from Sze Chuan and she answered them all. We enjoyed the mapo tofu, hot and sour soup and Chinese green beans! She also shared about how she adapted to living in Singapore when she first migrated here. Interesting and delicious. ",
    date: "17 Jan, 2018",
    profileImg: require('../../Images/SIF/liangseng.jpg'),
  },
  {
    id: 2,
    name: "Hannah Caitlin Tan",
    comment: "A delightful experience. It was well run & informative class . Teacher Helen is friendly and knowledgeable. She makes the experience easy going and fun. Will definitely visit again !",
    date: "21 Jan, 2018",
    profileImg: require('../../Images/SIF/hannah.jpg'),
  },
  {
    id: 3,
    name: "朱莉林",
    comment: "非常好的体验，亲自做出咖喱，谢谢Susan阿姨的细心指导",
    date: "4 May, 2018",
    profileImg: require('../../Images/SIF/xinmei.jpg'),
  },
  {
    id: 4,
    name: "Sorfina Puteri",
    comment: "We cooked traditional chicken rice and dumpling soup (from scratch!). Though traditional cooking can be laborious, it was fun when we cooked together. The food was authentic and nothing compares to home cooked food. Auntie is a joy to be with. She made the lesson fun and engaging. I'm a Singaporean and I brought along my best friend - Genevieve (also a Singaporean). Though we are local, we learn new things about our cultural cooking. We look forward to come back again - next time to learn Kung Pao Chicken. :-)",
    date: "26 Aug, 2018",
    profileImg: require('../../Images/SIF/sorfina.jpg'),
  }
]

    const {goBack} = this.props.navigation

    const bgImage = require('../../Images/SIF/soo_poh_lin_food2.jpg')
    const profileImageOne = require('../../Images/SIF/listingpage/susan_lim2.jpg')
    return(
      <Container style={styles.main}>
        <ScrollView>
          <Content>
            <View style={styles.listMainView} animation="bounceInDown" duration={1100} delay={1400}>
              <View style={styles.rowBg} >
                <Image source={bgImage} style={styles.bgImage}/>
                <View style={styles.discoveryContent}>
                  <Header style={styles.header}>
                    <Left style={styles.left}>
                      <TouchableOpacity style={styles.backArrow} onPress={()=>goBack()}>
                        <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
                      </TouchableOpacity>
                    </Left>
                    <Body style={styles.body}>
                      <Text style={styles.textTitle}></Text>
                    </Body>
                    <Right style={styles.right}>
                      <Entypo name="share" color="white" size={20} style={{marginRight: (Metrics.HEIGHT * 0.01)}}/>
                      <Feather name="heart" color="white" size={20}/>
                    </Right>
                  </Header>
                  <View style={styles.aboutSec}>
                    {/* <Text style={styles.cityName}>Susan Lim</Text> */}
                    <Text style={styles.titleHeading1}>
                      中国菜
                    </Text>
                    <Text style={styles.titleHeading2}>
                      Sze Chuan Delicacies
                    </Text>
                    <View style={{flex:1, flexDirection:"row", marginTop: (Metrics.HEIGHT * 0.005), marginBottom: (Metrics.HEIGHT * 0.005)}}>
                      <Entypo name="location-pin" size={20} color='white'/>
                      <Text style={styles.cityName}>Location: Macpherson</Text>
                    </View>
                    <View style={{flex:1, flexDirection:"row", marginTop: (Metrics.HEIGHT * 0.005), marginBottom: (Metrics.HEIGHT * 0.005)}}>
                      <Feather name="watch" size={20} color='white'/>
                      <Text style={styles.cityName}>2 Hours total</Text>
                    </View>
                    <View style={{flex:1, flexDirection:"row", marginTop: (Metrics.HEIGHT * 0.005), marginBottom: (Metrics.HEIGHT * 0.005)}}>
                      <SimpleLineIcons name="bubbles" size={20} color='white'/>
                      <Text style={styles.cityName}>Offered in Chinese</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.infoSec}>
              <View>
                <View style={{flex:1, flexDirection:"row", marginBottom: (Metrics.HEIGHT * 0.01)}}>
                  <View style={{flex:1, flexDirection:"column"}}>
                    <Text style={styles.hostName}>Meet your Senior, Susan Lim</Text>
                    <TouchableOpacity >
                      <Text style={{justifyContent: 'flex-start', color:"#37BFB6"}}>Message</Text>
                    </TouchableOpacity>
                  </View>
                  <Image source={profileImageOne} style={styles.hostImg} />
                </View>
                <ReadMore
                  numberOfLines={3}
                  renderTruncatedFooter={this._renderTruncatedFooter}
                  renderRevealedFooter={this._renderRevealedFooter}
                  onReady={this._handleTextReady}>
                  <Text style={styles.infoText}>
                    Auntie Susan was born and raised in Szechuan, China. She migrated to Singapore with her family when she was 9 years old. She enjoys playing Chinese chess and doing Tai-chi. She would definitely love to find a new chess partner or one to practice Tai-chi with, if you are up for it! {"\n\n"} As a child, she spent a lot of time on my childhood with her in the kitchen with her mother. Her mother helped developed her skills and had a lot of experiences making delicious dishes for her family.  {"\n\n"} She feels that it is important to connect with the younger generation to impart the skills and knowledge that she has. Family recipes that were passed down to her are held very close to her heart. She really hopes that her family recipes will be passed to passionate individuals who will appreciate her craft
                  </Text>
                </ReadMore>
              </View>
              <View style={styles.dividerHorizontal}/>
              <View>
                <Text style={styles.infoTitle}>What I can cook</Text>
                <ReadMore
                  numberOfLines={3}
                  renderTruncatedFooter={this._renderTruncatedFooter}
                  renderRevealedFooter={this._renderRevealedFooter}
                  onReady={this._handleTextReady}>
                  <Text style={styles.infoText}>
                    Kung Pao Chicken (宫保鸡丁) {"\n"}Mapo tofu (麻婆豆腐) {"\n"}Cold noodle salad (涼面)
                  </Text>
                </ReadMore>
              </View>
              <View style={styles.dividerHorizontal}/>
              <View>
                <Text style={styles.infoTitle}>What I'll provide: </Text>
                <Text style={styles.infoText}>
                  - Optional trip to the wet market {"\n"}
                  - Family recipes {"\n"}
                  - Complete lunch/dinner {"\n"}
                  - Coffee, tea and water {"\n"}
                  - All cooking ingredients {"\n"}
                </Text>
              </View>
              <View style={styles.dividerHorizontal}/>
              {/* Google map Section */}
              {/* Availability Secion */}
              {/* <View style={{ flex: 1 }}>
                <DateTimePicker
                  isVisible={true}
                  onConfirm={this._handleDatePicked}
                  onCancel={this._hideDateTimePicker}
                />
              </View> */}
              <View style={{height:320}}>
                <CalendarList
                  // Enable horizontal scrolling, default = false
                  horizontal={true}
                  // Enable paging on horizontal, default = false
                  // pagingEnabled={true}
                  calendarWidth={320}
                  // Max amount of months allowed to scroll to the past. Default = 50
                  pastScrollRange={0}
                  // Max amount of months allowed to scroll to the future. Default = 50
                  futureScrollRange={5}
                  onDayPress={(day) => {this.setDate(day)}}
                  markedDates={this.state.markedDates}
                />  
              </View>
              {/* Review Sections */}
              <View>
                <Text style={styles.infoReview}>Reviews</Text>

                {/*  data map */}
                {
                  data.map((item, index)=>{
                    return(
                      <View key={index}>
                        <View style={{flex:1, flexDirection:'row', marginTop:10, marginBottom:10}}>
                          <Image
                            style={styles.profileImg}
                            source={item.profileImg}
                          />
                          <View style={{flex:1, flexDirection:'column', marginLeft:5}}>
                            <Text style={{fontSize: Fonts.moderateScale(12), fontWeight: 'bold'}}>
                              {item.name}
                            </Text>
                            <Text style={{fontSize: Fonts.moderateScale(11)}}>
                              {item.date}
                            </Text>
                          </View>
                        </View>
                        <ReadMore
                          numberOfLines={3}
                          renderTruncatedFooter={this._renderTruncatedFooter}
                          renderRevealedFooter={this._renderRevealedFooter}
                          onReady={this._handleTextReady}>
                          <Text style={styles.infoText}>
                            {item.comment}
                          </Text>
                        </ReadMore>
                        <View style={styles.dividerHorizontal}/>
                      </View>
                    )
                  })
                }
                {/* end of data map */}
              </View>
            </View>
          </Content>  
        </ScrollView>
        <Footer style={styles.footer}>
          <View style={{flex:1, flexDirection:"row"}}>
            <View style={styles.footerContainer}>
              <View style={{flex:1, flexDirection:"column", justifyContent: 'center', alignItems: 'center',}}>
                <Text style={styles.footerText}>
                  <Text style={{fontWeight:'bold'}}>$25 SGD </Text>
                  <Text>per person</Text>
                </Text>
                <Text style={{textAlign: 'left'}}>
                  <FontAwesome name="star" size={9} color='#37BFB6'/>
                  <FontAwesome name="star" size={9} color='#37BFB6'/>
                  <FontAwesome name="star" size={9} color='#37BFB6'/>
                  <FontAwesome name="star" size={9} color='#37BFB6'/>
                  <FontAwesome name="star-half" size={9} color='#37BFB6'/> 
                  <Text style={{fontSize:Fonts.moderateScale(9),}}> 4 Reviews</Text>
                </Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.footerContainer}>
                <Text style={styles.footerButton}>
                  See dates
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Footer>
      </Container>
    );
  }
}
