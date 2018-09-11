import React, { Component } from 'react';
import { CalendarList } from 'react-native-calendars';
import { Container,Right,Left,Content,Body,Header,Footer} from 'native-base';
import { Text,Image, StatusBar, Platform, ScrollView,TouchableOpacity,View, I18nManager, Alert} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './styles'

export default class DateComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            markedDates: {
              '2018-09-17': {marked: true},
              '2018-09-18': {marked: true},
              '2018-09-19': {marked: true},
              '2018-09-20': {marked: true},
              '2018-09-24': {marked: true},
              '2018-09-25': {marked: true},
              '2018-09-26': {marked: true},
              '2018-09-27': {marked: true},
              '2018-09-28': {marked: true},
              '2018-10-01': {marked: true},
              '2018-10-02': {marked: true},
              '2018-10-05': {marked: true},
            }
          };
    }

    selectDate(day){
        // Works on both iOS and Android
        const alertTitle = 'Date selected: ' + day.dateString  
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

    render(){
        const {goBack} = this.props.navigation
        return(
            <Container>
                <Header style={styles.header}>
                    <Left style={styles.left}>
                        <TouchableOpacity style={styles.backArrow} onPress={()=>goBack()}>
                        <FontAwesome name={I18nManager.isRTL ? "angle-right" : "angle-left"} size={25} color='white'/>
                        </TouchableOpacity>
                    </Left>
                    <Body style={styles.body}>
                        <Text style={styles.textTitle}>Calendar view</Text>
                    </Body>
                    <Right style={styles.right}>
                        {/* <Entypo name="share" color="white" size={20} style={{marginRight: (Metrics.HEIGHT * 0.01)}}/>
                        <Feather name="heart" color="white" size={20}/> */}
                    </Right>
                </Header>
                    <CalendarList
                        // Callback which gets executed when visible months change in scroll view. Default = undefined
                        onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
                        // Max amount of months allowed to scroll to the past. Default = 50
                        pastScrollRange={0}
                        // Max amount of months allowed to scroll to the future. Default = 50
                        futureScrollRange={5}
                        // Enable or disable scrolling of calendar list
                        scrollEnabled={true}
                        // Enable or disable vertical scroll indicator. Default = false
                        showScrollIndicator={true}
                        // Marked dates
                        markedDates={this.state.markedDates}
                        // Select date
                        onDayPress={(day) => {this.selectDate(day)}}
                    />
            </Container>


        )
    }
}