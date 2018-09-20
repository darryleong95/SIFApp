import { Platform, StyleSheet } from 'react-native';
import { Fonts, Metrics, Colors } from '../../Themes';

const styles = StyleSheet.create({
    container:{
        height: Metrics.HEIGHT,
        width: Metrics.WIDTH,
    },
    body:{
        height: Metrics.HEIGHT * 0.7,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userButton:{
        backgroundColor: Colors.loginBlue,
        marginTop: Metrics.HEIGHT * 0.05,
        marginBottom: Metrics.HEIGHT * 0.05,
    },
    userText:{
        width: Metrics.WIDTH * 0.8,
        fontSize: Fonts.moderateScale(26),
        fontFamily: 'AirbnbCereal-Bold',
        textAlign: 'center',
        paddingTop: Metrics.HEIGHT * 0.02,
        paddingBottom: Metrics.HEIGHT * 0.02,
        color: Colors.snow
    }
})

export default styles