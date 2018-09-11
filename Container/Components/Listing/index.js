import React, { Component } from "react";
import {
  Text,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  ListView,
  BackHandler,
  I18nManager
} from "react-native";
import {
  Container,
  Button,
  Right,
  Left,
  ListItem,
  Content,
  Body,
  Header
} from "native-base";

// Screen Styles
import styles from "./styles";
import { View } from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Images } from "../../Themes/";

/**
 *  Social Screen
 */
export default class ListingComponent extends Component {
  componentWillMount() {
    var that = this;
    BackHandler.addEventListener("hardwareBackPress", function() {
      that.props.navigation.navigate("Social");
      return true;
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      name: "",
      postImage: "",
      profileImage: "",
      time: "",
      status: "",
      statusBgColor: "",
      description: ""
    };
  }

  render() {
    StatusBar.setBarStyle("light-content", true);
    if (Platform.OS === "android") {
      StatusBar.setBackgroundColor("#2d324f", true);
      StatusBar.setTranslucent(true);
    }

    const {goBack} = this.props.navigation;

    var that = this;

    const profileImageOne =
      "https://antiqueruby.aliansoftware.net//Images/social/card_profile_one_socialsix.png";
    const postImageOne =
      "https://antiqueruby.aliansoftware.net//Images/social/ic_post_one_social_three.png";

    var data = [
      {
        id: 1,
        title: "Peranakan Popiah",
        name: "Johnie Cornwall",
        postImage: { uri: postImageOne },
        profileImage: { uri: profileImageOne },
        time: "8 mins",
        status: "Travel",
        statusBgColor: "#4cd964",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      },
    ];

    var listingData = [
      { 
        id: 1,
        date: '',
        details: '',
        price: '',
        class_size: 1,
        contact_email: '',
        contact_org: '',
        location: '',
        current_attendees: 1 //if applicable
      }
    ]
    // event information: [date, details, price, class_size, contact_email, contact_org (number), location, num_attendees (if class - else null)]
    

    return (
      <Container style={styles.main}>
        <Header style={styles.header}>
          <Left style={styles.left}>
            <TouchableOpacity
              style={styles.backArrow}
              onPress={() => goBack()}
            >
              {I18nManager.isRTL ? (
                <MaterialIcons name="chevron-right" size={25} color="white" />
              ) : (
                <MaterialIcons name="chevron-left" size={25} color="white" />
              )}
            </TouchableOpacity>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.textTitle}>Peranakan Popiah</Text>
          </Body>
          <Right style={styles.right}>
            <TouchableOpacity onPress={() => alert("Search")}>
              {/* <Ionicons name="ios-search" size={25} color="white" /> */}
            </TouchableOpacity>
          </Right>
        </Header>
        <Content>
          <View
            style={styles.rowMainView}
            animation="bounceInDown"
            duration={1100}
            delay={1400}
          >
            {data.map((item, index) => {
              return (
                <View
                  style={
                    index === data.length - 1 ? styles.lastRowBg : styles.rowBg
                  }
                  key={index}
                >
                  <View style={styles.rowHeaderView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("SeniorProfileComponent")}> 
                      <Image
                        style={styles.profileImg}
                        source={item.profileImage}
                      />
                    </TouchableOpacity>  
                    <View style={styles.rowHeaderNameView}>
                      <Text style={styles.rowNameTxt}>{item.name}</Text>
                      <Text style={styles.rowTimeTxt}>{item.time}</Text>
                    </View>
                    <Right>
                      <TouchableOpacity
                        onPress={() => alert(item.status)}
                        style={[
                          styles.statusView,
                          { backgroundColor: item.statusBgColor }
                        ]}
                      >
                        <Text style={styles.statusTxt}>{item.status}</Text>
                      </TouchableOpacity>
                    </Right>
                  </View>

                  {item.postImage == "" ? null : (
                    <Image
                      style={styles.postDescImage}
                      source={item.postImage}
                    />
                  )}
                  <View>
                    {/* Distance from User's house: If applicable */}
                  </View>
                  <View style={styles.descriptionView}>
                    <Text style={styles.rowDescTxt}>{item.description}</Text>
                  </View>
                  <View>
                    {/* Class information:
                          Location, Time, Duration, Cost ...
                    */}
                  </View>
                  <View style={styles.descriptionView}>
                    {/*  
                        View what others have to say! 
                        Comments from past attendees
                    */}
                    <Text style={styles.rowDescTxt}>Comment section: </Text>
                    <View style={{flex:1, flexDirection:'row'}}>
                      <Image
                        style={styles.profileImg}
                        source={item.profileImage}
                      />
                      <Text style={styles.commentTxt}>Really Yummy food! She makes lessons so enjoyable</Text>
                    </View>
                    <Text style={styles.commentTxt}>Didn't realise how much work went into making this!</Text>
                    <Text style={styles.commentTxt}>Finally able to prepare this dish for CNY</Text>
                  </View>
                  <View style={styles.descriptionView}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUpForEventComponent") }>
                      <Text style={styles.signUpButton}>
                        Sign up now!
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.dividerHorizontal} />
                  {/* <View style={styles.likeCommentShareView}>
                    <View style={styles.likeView}>
                      <TouchableOpacity onPress={() => alert("Like")}>
                        <FontAwesome name="heart" size={18} color="#d4d4d4" />
                      </TouchableOpacity>
                      <Text style={styles.likeCommentShareText}>Like</Text>
                      <Right>
                        <View style={styles.dividerVertical} />
                      </Right>
                    </View>
                    <View style={styles.commentView}>
                      <TouchableOpacity onPress={() => alert("Comment")}>
                        <Image
                          style={styles.likeCommentShareImage}
                          source={Images.comments}
                        />
                      </TouchableOpacity>
                      <Text style={styles.likeCommentShareText}>Comment</Text>
                      <Right>
                        <View style={styles.dividerVertical} />
                      </Right>
                    </View>
                    <View style={styles.shareView}>
                      <TouchableOpacity onPress={() => alert("Share")}>
                        <MaterialIcons name="share" size={18} color="#d4d4d4" />
                      </TouchableOpacity>
                      <Text style={styles.likeCommentShareText}>Share</Text>
                    </View>
                  </View> */}
                </View>
              );
            })}
          </View>
        </Content>
      </Container>
    );
  }
}
