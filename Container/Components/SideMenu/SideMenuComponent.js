import React, { Component } from "react";
import {
  AsyncStorage,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
  Linking,
  Alert,
  Platform,
  BackHandler
} from "react-native";
import {
  Header,
  Button,
  Text,
  Container,
  List,
  ListItem,
  Content,
  Icon,
  top,
  Left,
  Right,
  Title,
  Body
} from "native-base";
// Styles
import { Images } from "../../Themes/Images";
import styles from "./styles";
export default class SideBarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        langId: 1,
        activeMenu: "SignUp"
        };
    }

    _handlePress(screenName) {
        var tempVar = "";
        this.setState({ activeMenu: screenName, activeMenuImage: tempVar });
        this.props.navigation.navigate(screenName);
    }

    componentWillMount() {
        var that = this;
        BackHandler.addEventListener('hardwareBackPress', function() {
            that.props.navigation.navigate('FirstScreen');
            return true;
        });
    }

    render() {
        StatusBar.setBarStyle("light-content", true);

        if (Platform.OS === "android") {
        StatusBar.setBackgroundColor("transparent", true);
        StatusBar.setTranslucent(true);
        }
        return (
        <Container>
            <Content style={{ backgroundColor: "#1a191f" }}>
            <View>
                <Header style={styles.header}>
                {/* <Image source={Images.drawer_antiquruby_logo} style={styles.headerimg} /> */}
                </Header>
                <View style={{backgroundColor: 'grey',marginTop: 8,height: 0.3}}></View>
                <View style={styles.mainview}>
                <TouchableOpacity onPress={() => this._handlePress("LandingComponent")}>
                    <View style={styles.listrow}>
                    {/* <Image source={Images.admob} style={styles.rowicon} /> */}
                    <Text style={styles.rowtxt}>Classes</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this._handlePress("BrowseSeniorsComponent")}>
                    <View style={styles.listrow}>
                    {/* <Image source={Images.admob} style={styles.rowicon} /> */}
                    <Text style={styles.rowtxt}>Meet the Seniors</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
            </Content>
        </Container>
        );
    }
}
