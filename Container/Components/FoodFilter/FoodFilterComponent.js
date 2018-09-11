import React, { Component } from 'react';
import { TouchableHighlight,Dimensions, StyleSheet,ImageBackground,Image,View,StatusBar,Platform, Alert, TouchableOpacity, I18nManager} from 'react-native';
import { Text,Header, Container,Form,Item,Button,Input,CheckBox, Left, Body,  Icon,Title ,Right} from 'native-base';
// Screen Styles
import styles from './styles';
import Modal from 'react-native-modal'
import { Images } from '../../Themes/';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class FoodFilterComponent extends Component{
    constructor(props) {
        super(props);
      this.state = {
        isModalVisible: false,
      }
    }
  
    render(){
        return(
            <Container>
                <Header style={styles.header}>
                    <Left style={styles.left}>
                        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Drawer')} style={styles.backArrow}>
                        {
                        (I18nManager.isRTL)
                        ?
                            <Ionicons name="ios-arrow-round-forward-outline" size={30} color="#ffffff"/>
                        :
                            <Ionicons name="ios-arrow-round-back-outline" size={30} color="#ffffff"/>
                        }
                        </TouchableOpacity>
                    </Left>
                    <Body style={styles.body}>
                        <View style={styles.headerNameView}>
                        <Title style={styles.headerTitle}>Drawer Ecom</Title>
                            <TouchableOpacity  onPress={()=>this._showModal()}>
                        <Icon name='ios-arrow-down-outline' style={styles.headerArrow} />
                            </TouchableOpacity>
                        </View>

                    </Body>
                    <Right style={styles.right}/>
                </Header>
                <Modal style={styles.bottomModal} isVisible={this.state.isModalVisible} onBackdropPress={()=>this._hideModal()}>
                    <View style={styles.triangles}></View>
                    <View style={styles.mainview}>
                        <View style={styles.headerbottom}>
                            <Text style={styles.filterText}>Categories</Text>
                        </View>
                        <View style={styles.horizontalline}></View>
                        <View style={styles.semirow}>
                            <TouchableOpacity onPress={() => alert('Living Room')} >
                                <View style={styles.listrow}>
                                    <Image source={Images.livingRoomBlue} style={ styles.rowicon } />
                                    <Text style={styles.rowtxt}>All</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.verticalline}></View>
                            <TouchableOpacity onPress={() => alert('Dining Room')} >
                                <View style={styles.listrow}>
                                    <Image source={Images.diningRoomBlue} style={ styles.rowicon } />
                                    <Text style={styles.rowtxt}>Halal</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.verticalline}></View>
                            <TouchableOpacity onPress={() => alert('Bookcase')} >
                                <View style={styles.listrow}>
                                    <Image source={Images.bookCaseBlue} style={ styles.rowicon } />
                                    <Text style={styles.rowtxt}>Peranakan</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.horizontalline}></View>
                        <View style={styles.semirow}>
                            <TouchableOpacity onPress={() => alert('Bedroom')} >
                                <View style={styles.listrow}>
                                    <Image source={Images.bedRoomBlue} style={ styles.rowicon } />
                                    <Text style={styles.rowtxt}>Seafood</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.verticalline}></View>
                            <TouchableOpacity onPress={() => alert('TV Stands')} >
                                <View style={styles.listrow}>
                                    <Image source={Images.tvStandBlue} style={ styles.rowicon} />
                                    <Text style={styles.rowtxt}>Sichuan</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.verticalline}></View>
                            <TouchableOpacity onPress={() => alert('Bathroom')} >
                                <View style={styles.listrow}>
                                    <Image source={Images.bathRoomBlue} style={ styles.rowicon} />
                                    <Text style={styles.rowtxt}>Indian</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </Container>
        )
    }
}