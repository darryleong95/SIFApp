
import React, { Component } from 'react';
import { Text, View, Image, StatusBar, Platform, ImageBackground,Dimensions,TouchableOpacity, ListView, ScrollView, BackHandler, I18nManager} from 'react-native';
import { Container, Button, Icon, Right, Item, Input, Header, Footer, FooterTab, Left, Body, Title, Content, Form, Label} from 'native-base';
// Screen Styles
import styles from './styles';
import Foundation from 'react-native-vector-icons/Foundation';
import { Images,Metrics } from '../../Themes/';

/**
 *  Profile Screen
 */
export default class LandingComponent extends Component {

  componentWillMount() {
    var that = this
    BackHandler.addEventListener('hardwareBackPress', function() {
      that.props.navigation.navigate('Social')
      return true;
    });
  }

  constructor(props) {
 		super(props);
    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({rowHasChanged})

    const dataObjects = [
      {
        id: 1,
        profile: require('../../Images/SIF/listingpage/susan_lim2.jpg'),
        uploadImage: require('../../Images/SIF/soo_poh_lin_food.jpg'),
        name: "Susan Lim",
        comment: 'Auntie Susan was taught how to cook Szechuan dishes by her mother who was from China. Starting young at the age of 7, she has accumulated a wide range of recipes that she is excited to share with the younger generation.',
      },
      {
        id: 2,
        profile: require('../../Images/SIF/listingpage/wee_beng_choo2.jpg'),
        uploadImage: require('../../Images/SIF/wee_beng_choo_food.jpg'),
        name: "Wee Beng Choo",
        comment: 'Auntie Wee enjoys cooking for her family members and is willing to impart her skills to the younger generation. You must try her mind-blowingly good egg foo yong! ',
      },
      {
        id: 3,
        profile: require('../../Images/SIF/listingpage/soo_poh_lin2.jpg'),
        uploadImage: require('../../Images/SIF/susan_lim_food.jpg'),
        name: "Soo Poh Lin",
        comment: 'Interested in whipping up some simple but delicious home-cooked Chinese meals? Learn from Auntie Soo who has a good sense of humour, making her lessons entertaining and enriching. ',
      },
      {
        id: 4,
        profile: require('../../Images/SIF/listingpage/linda2.jpeg'),
        uploadImage: require('../../Images/SIF/linda_food.jpg'),
        name: "Linda Neo",
        comment: 'Auntie Linda enjoys adding twists to traditional Peranakan recipes. Perhaps, you might be lucky enough to try her signature gula melaka chendol!',
      },
      {
        id: 5,
        profile: require('../../Images/SIF/listingpage/areeba2.jpg'),
        uploadImage: require('../../Images/SIF/areeba_food.jpg'),
        name: "Areeba Baktha",
        comment: 'Auntie Areeba used to cook for her family of 7. Her classes will definitely give you knowledge of the Indian spices secrets. ',
      },
      {
        id: 6,
        profile: require('../../Images/SIF/listingpage/aisyah2.jpg'),
        uploadImage: require('../../Images/SIF/aisyah_food.jpg'),
        name: "Aisyah Binte Jamil",
        comment: 'Auntie Aisyah finds joy in seeing people savour her authentic Malay dishes. She would love to share with you her family recipes and interesting life stories. ',
      },
      {
        id: 7,
        profile: require('../../Images/SIF/listingpage/ismail2.jpg'),
        uploadImage: require('../../Images/SIF/ismail_food.jpg'),
        name: "Ismail Syahid",
        comment: 'Uncle Ismail worked as a hawker providing vegetarian halal meal options for the past 43 years. Having retired, he hopes to be able to teach how to cook such scrumptious meals so that people can continue to enjoy his craft.',
      },
      {
        id: 8,
        profile: require('../../Images/SIF/listingpage/neo_su_kim2.jpg'),
        uploadImage: require('../../Images/SIF/neo_su_kim_food.jpg'),
        name: "Neo Su Kim",
        comment: 'Dumplings are Auntie Neo’s specialty, it is physically impossible to not finish 10 dumplings at one go. Her patience will definitely give you a homely feeling. ',
      },{
        id: 9,
        profile: require('../../Images/SIF/listingpage/lhaijja2.jpg'),
        uploadImage: require('../../Images/SIF/lhaijja_food.jpg'),
        name: "Lhajja Uda",
        comment: 'Auntie Lhajja adores making delicious dishes with personal touches. She is super passionate about food and share about her Moroccan origins. ',
      }
    ]

 		this.state = {
      dataSource: ds.cloneWithRows(dataObjects),
    };
 	}

  _renderRow (rowData) {
    return (
      <View style={styles.rowMain}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('SeniorProfileComponent')}>
          <Image source={rowData.uploadImage} style={styles.rowImage}/>
          <Image source={rowData.profile} style={styles.rowProImage}/>
          <View style={styles.rowConTitle}>
            <Text style={styles.rowName}>{rowData.name}</Text>
            <Text style={styles.rowTitle}>{rowData.comment}</Text>
          </View>
          <View style={styles.rowdevider}/>
        </TouchableOpacity>
      </View>
    )
  }

  render(){
		StatusBar.setBarStyle('light-content', true);
		if(Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent',true);
			StatusBar.setTranslucent(true);
		}

    var that = this;

    var item = [
      {
        text: 'All',
        image:  require('../../Images/SIF/aisyah_food.jpg'),
      },
      {
        text: 'Chinese',
        image:  require('../../Images/SIF/china1.jpg'),
      },
      {
        text: 'Malay',
        image:  require('../../Images/SIF/malay1.jpg'),
      },
      {
        text: 'Indian',
        image:  require('../../Images/SIF/indian1.jpg'),
      },
      {
        text: 'Vegetarian',
        image:  require('../../Images/SIF/veg1.jpg'),
      },
      {
        text: 'Seafood',
        image:  require('../../Images/SIF/seafood.jpg'),
      },
    ]

    return(
     <Container style={styles.main}>
       <View style={styles.logosec}>
         <Header
           style={styles.header}>

           {/* Take up the space */}
           <Left style={styles.left}>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate("LoginComponent")}>
              <Foundation name="list-bullet" color="white" size={23}/>
            </TouchableOpacity>
           </Left>

           {/* Title */}
           <Body style={styles.body}>
             <Title style={styles.headerTitle}>
               All
             </Title>
           </Body>

           {/* Right Icon */}
           <Right style={styles.right}>
             <TouchableOpacity onPress={()=>alert("Search")}>
               <Icon name="ios-search" style={styles.searchIcon}/>
             </TouchableOpacity>
           </Right>
         </Header>
       </View>
       <View style={styles.slidesec}>
         <ScrollView
           horizontal={true}
           showsHorizontalScrollIndicator={false}
           style={styles.postImageContent}>
           {
             item.map((itemImage, index) => {
               return (
                 <View style={styles.itemBar} key={index}>
                   <Image source={itemImage.image} style={styles.postedImage}/>
                   <TouchableOpacity style={styles.overlay} onPress={()=>alert(itemImage.text)}>
                    <Text style={styles.postedText}>{itemImage.text}</Text>
                  </TouchableOpacity>
                 </View>
               )
             })
           }
         </ScrollView>

         <ListView
            contentContainerStyle={styles.listContent}
            dataSource={this.state.dataSource}
            renderRow={this._renderRow.bind(this)}
            enableEmptySections
            pageSize={4}/>

       </View>
    </Container>

    );
  }
}
