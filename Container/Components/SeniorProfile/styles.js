import { Platform, StyleSheet, Dimensions } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../Themes/';

const styles = StyleSheet.create({
    container:{
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
        // justifyContent: 'center',
        alignItems: "flex-start"
    },

    header: {
        backgroundColor: '#e25858',
        height: (Metrics.HEIGHT) * 0.1,
        width: Metrics.WIDTH,
        flexDirection: 'row',
        borderBottomColor: '#2d324f',
        ...Platform.select({
            ios: {
                marginTop: (Metrics.HEIGHT) * 0.007,
                paddingTop: 0,
            },
            android: {}
        }),
    },
    
    left: {
      flex: 1,
      paddingTop: (Platform.OS === 'ios')? 15 : 0,
    },
    
    body: {
      flex: 2,
      alignItems: 'center',
    },
    
    right: {
      flex: 1,
      paddingTop: (Platform.OS === 'ios')? 15 : 0,
    },

    
    headerText:{
        fontFamily: 'AirbnbCereal-Bold',
        fontSize: Fonts.moderateScale(16)
    },

    // Profile Body
    profileBody: {
        width:(Metrics.WIDTH) * 0.9,
        paddingTop: (Metrics.HEIGHT * 0.02),
        paddingBottom:(Metrics.HEIGHT * 0.02),
        paddingLeft:(Metrics.WIDTH * 0.07),
        paddingRight:(Metrics.WIDTH * 0.07),
    },

    // 1st Section : Photo + Name
    firstSection:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: (Metrics.HEIGHT * 0.01),
        marginBottom: (Metrics.HEIGHT * 0.01),
    },

    profileName: {
        color: Colors.blacktxt,
        fontSize: Fonts.moderateScale(20),
        fontFamily: "AirbnbCereal-Bold",
        // marginLeft: (Metrics.WIDTH) * 0.01,
    },

    hostImg: {
        // marginLeft: (Metrics.WIDTH) * 0.2,
        width: (Metrics.WIDTH) * 0.16,
        height: (Metrics.WIDTH) * 0.16,
        borderRadius: (Metrics.WIDTH) * 0.1,
    },

    // 2nd Section: About me
    aboutMeSection: {
        marginTop: Metrics.HEIGHT * 0.02,
        marginBottom: Metrics.HEIGHT * 0.02,
    },

    aboutMeHeader: {
        color: Colors.blacktxt,
        fontSize: Fonts.moderateScale(18),
        fontFamily: "AirbnbCereal-Bold",
        marginBottom: Metrics.WIDTH * 0.01
    },

    aboutMeText: {
        color: Colors.blacktxt,
        fontSize: Fonts.moderateScale(15),
        fontFamily: "AirbnbCereal-Light",
    },

    readMore: {
        color: Colors.tintColor, 
        marginTop: 5, 
        fontSize: Fonts.moderateScale(14), 
        color:'#37BFB6'
    },

});
export default styles;
