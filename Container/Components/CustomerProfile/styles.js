
import { Platform, StyleSheet, Dimensions, I18nManager } from 'react-native';

// Screen Styles
import { Fonts, Metrics, Colors } from '../../Themes/';

const styles = StyleSheet.create({
    //Container
    container:{
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH
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
        marginTop: (Metrics.HEIGHT * 0.05),
        marginBottom: (Metrics.HEIGHT * 0.05),
    },

    profileName: {
        color: Colors.blacktxt,
        fontSize: Fonts.moderateScale(28),
        fontFamily: "AirbnbCereal-Bold",
        marginLeft: (Metrics.WIDTH) * 0.1,
    },

    hostImg: {
        marginLeft: (Metrics.WIDTH) * 0.2,
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

   // 3rd Section: Reviews
    reviewSection: {
        marginTop: Metrics.HEIGHT * 0.02,
        marginBottom: Metrics.HEIGHT * 0.02,
    },

    reviewTextContainer: {
        marginTop: Metrics.HEIGHT * 0.02,
        marginBottom: Metrics.HEIGHT * 0.015    ,
    },

    reviewHeader: {
        color: Colors.blacktxt,
        fontSize: Fonts.moderateScale(25),
        fontFamily: "AirbnbCereal-Bold",
    },

    reviewText: {
        color: Colors.blacktxt,
        fontSize: Fonts.moderateScale(18),
        fontFamily: "AirbnbCereal-Book",
    },

    moreReviews: {
        marginTop: Metrics.WIDTH * 0.01 
    },

    moreReviewsText:{
        fontFamily: 'AirbnbCereal-Book',
        fontSize: Fonts.moderateScale(15),
        color: '#37BFB6',
    },
    //

    left: {
        flex: 0.5,
        backgroundColor: Colors.transparent,
    },
    backArrow: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    menuIconWhite: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    body: {
        flex: 3,
        alignItems: 'center',
        backgroundColor: Colors.transparent
    },

    textTitle: {
        color: Colors.snow,
        fontSize: Fonts.moderateScale(17),
        marginTop: (Metrics.HEIGHT * 0.001),
        alignSelf: 'center',
        fontFamily: "AirbnbCereal-Light",
    },

    right: {
        flex: 0.5
    },

    imgContainer: {
        width: Metrics.WIDTH,
        height: (Metrics.HEIGHT) * 0.60,
    },

    main: {
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
        backgroundColor: Colors.transparent,
        flexDirection: 'column'
    },

    nameTxt: {
        color: "#252525",
        fontSize: Fonts.moderateScale(22),
        fontFamily: "AirbnbCereal-Light",
        textAlign: "center",
        marginTop: (Metrics.HEIGHT) * 0.03
    },

    addressTxt: {
        color: "#a2a2a2",
        fontSize: Fonts.moderateScale(15),
        fontFamily: "AirbnbCereal-Light",
        width: (Metrics.WIDTH) * 0.65,
        alignSelf: 'center',
        textAlign: 'center',
        marginTop: (Metrics.HEIGHT) * 0.003
    },

    followerFollwingLikeBg: {
        flexDirection: 'row',
        width: (Metrics.WIDTH) * 0.87,
        alignSelf: 'center',
        marginTop: (Metrics.HEIGHT) * 0.015,
        marginBottom: (Metrics.HEIGHT) * 0.015
    },

    countLabelBg: {
        flexDirection: 'column',
        width: (Metrics.WIDTH) * 0.29,
        justifyContent: 'center'
    },

    countTxt: {
        color: "#363636",
        fontSize: Fonts.moderateScale(16),
        fontFamily: "AirbnbCereal-Light",
        textAlign: 'center'
    },

    labelTxt: {
        color: "#959595",
        fontSize: Fonts.moderateScale(12),
        textAlign: 'center'
    },

    divideVertical: {
        backgroundColor: "#d7d7d7",
        width: (Metrics.WIDTH) * 0.003,
        height: (Metrics.HEIGHT) * 0.03,
        alignSelf: 'flex-end',
        marginBottom: (Metrics.HEIGHT) * 0.007
    },

    addUserBg: {
        backgroundColor: "#f4f4f4",
        width: (Metrics.WIDTH) * 0.14,
        height: (Metrics.WIDTH) * 0.14,
        borderRadius: (Metrics.WIDTH) * 0.07,
        justifyContent: 'center',
        alignItems: 'center'
    },

    commentBg: {
        backgroundColor: "#f7412d",
        width: (Metrics.WIDTH) * 0.14,
        height: (Metrics.WIDTH) * 0.14,
        marginLeft: (Metrics.WIDTH) * 0.04,
        borderRadius: (Metrics.WIDTH) * 0.07,
        justifyContent: 'center',
        alignItems: 'center'
    },

    callBg: {
        backgroundColor: "#00c160",
        width: (Metrics.WIDTH) * 0.14,
        height: (Metrics.WIDTH) * 0.14,
        marginLeft: (Metrics.WIDTH) * 0.04,
        borderRadius: (Metrics.WIDTH) * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: (Metrics.HEIGHT) * 0.007
    },

    userCommentImage: {
        marginBottom: (Metrics.HEIGHT) * 0.06,
        width: (Metrics.WIDTH) * 0.06,
        height: (Metrics.HEIGHT) * 0.06,
        alignSelf: 'center',
        resizeMode: 'contain',
        transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]
    },

    callImage: {
        width: (Metrics.WIDTH) * 0.05,
        height: (Metrics.HEIGHT) * 0.05,
        alignSelf: 'center',
        resizeMode: 'contain'
    },

    detailsView:{
        width: Metrics.WIDTH,
        backgroundColor: Colors.snow,
        flexDirection: 'column',
        height: (Metrics.HEIGHT) * 0.6
    },

    addUserCommentCallView:{
        width: (Metrics.WIDTH) * 0.60,
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: (Metrics.HEIGHT) * 0.04,
        alignItems: 'center',
        justifyContent:'center'
    },

    bottomView:{
        bottom: 0,
        position: 'absolute',
        width: Metrics.WIDTH,
        flexDirection: 'column',
        backgroundColor: Colors.snow
    },

    // Horizontal divider
    dividerHorizontal: {
        width: (Metrics.WIDTH) * 0.8,
        height: (Metrics.HEIGHT) * 0.001,
        backgroundColor: '#cecece',
        alignSelf: 'center',
        marginTop: (Metrics.HEIGHT) * 0.022,
        marginBottom: (Metrics.HEIGHT) * 0.022,
        paddingLeft:(Metrics.WIDTH * 0.07),
        paddingRight:(Metrics.WIDTH * 0.07)
    },

    // Top image
    header: {
        backgroundColor: Colors.transparent,
        height: Metrics.HEIGHT * 0.1,
        borderBottomWidth: 0,
        paddingTop: (Metrics.HEIGHT * 0.03),
        elevation: 0,
        paddingLeft: (Metrics.WIDTH * 0.05),
        paddingRight: (Metrics.WIDTH * 0.05),
    },

    listMainView:{
        width: (Metrics.WIDTH)
    },

    rowBg: {
        width: (Metrics.WIDTH),
        height: (Metrics.HEIGHT * 0.6),
        backgroundColor: 'gray',
        justifyContent: 'center',
    },

    bgImage: {
        height:(Metrics.HEIGHT),
        width:(Metrics.WIDTH),
        resizeMode:'cover',
        position:'absolute'
    },

    discoveryContent: {
        height:(Metrics.HEIGHT * 0.6),
        backgroundColor: '#0006'
    },

    aboutSec: {
        flexDirection:'column',
        justifyContent:'space-between',
        bottom:0,
        position:'absolute',
        width:(Metrics.WIDTH),
        paddingBottom:(Metrics.HEIGHT * 0.015),
        paddingLeft:(Metrics.WIDTH * 0.03),
        paddingRight:(Metrics.WIDTH * 0.05)
    },
    
    cityName: {
        color: Colors.snow,
        fontSize: Fonts.moderateScale(16),
        fontFamily: "AirbnbCereal-Light",
        marginLeft: (Metrics.WIDTH * 0.02),
    },

    titleHeading1:{
        fontSize: Fonts.moderateScale(13), 
        color: 'white', 
        fontFamily: "AirbnbCereal-Bold", 
    },

    titleHeading2:{
        fontSize: Fonts.moderateScale(30), 
        color: 'white', 
        fontFamily: "AirbnbCereal-Bold", 
    },

    // Coaching Information


    infoTitle: {
        color: Colors.blacktxt,
        fontSize: Fonts.moderateScale(17),
        fontFamily: "AirbnbCereal-Light",
        fontWeight: 'bold',
        marginBottom: (Metrics.HEIGHT * 0.03),
    },

    infoReview: {
        color: Colors.blacktxt,
        fontSize: Fonts.moderateScale(17),
        fontFamily: "AirbnbCereal-Light",
        fontWeight: 'bold',
        marginTop: (Metrics.HEIGHT * 0.03),
        marginBottom: (Metrics.HEIGHT * 0.03),
    },

    

    profileImg: {
        width: (Metrics.WIDTH) * 0.1,
        height: (Metrics.WIDTH) * 0.1,
        borderRadius: (Metrics.WIDTH) * 0.06,
        padding: 10,
        alignSelf: 'flex-start',
    },

    // Review
    reviewText: {
        marginTop: 10,

    },
    
    

    // Footer
    footer:{
        backgroundColor: Colors.snow,
    },

    footerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: (Metrics.WIDTH * 0.5)
    },

    footerButton:{
        color:'white',
        fontSize: Fonts.moderateScale(11),
        textAlign: 'center',
        paddingTop: (Metrics.HEIGHT) * 0.016,
        paddingBottom: (Metrics.HEIGHT) * 0.016,
        backgroundColor: '#e25858',
        paddingLeft: (Metrics.WIDTH) * 0.1,
        paddingRight: (Metrics.WIDTH) * 0.1,
        borderRadius: 3,
        fontFamily: "AirbnbCereal-Medium"
    },

    footerText:{
        color: Colors.darktext,
    }

    });

export default styles;
